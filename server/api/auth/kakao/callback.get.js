import { getDbPool } from '../../../utils/db';
import { generateToken } from '../../../utils/jwt';

export default defineEventHandler(async (event) => {
  const code = getQuery(event).code;
  if (!code) return sendRedirect(event, '/?error=no_code');

  try {
    const config = useRuntimeConfig();
    // 1. 카카오 토큰 받기
    const tokenRes = await $fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: config.kakaoRestApiKey,
        redirect_uri: 'https://www.nextboard.kro.kr/api/auth/kakao/callback',
        code
      })
    });

    // 2. 카카오 사용자 정보 받기
    const kakaoUser = await $fetch('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${tokenRes.access_token}` }
    });

    const pool = getDbPool();
    // 3. DB 체크 (nextict_tbl_user 사용)
    const [users] = await pool.query('SELECT * FROM nextict_tbl_user WHERE userid = ?', [kakaoUser.id.toString()]);
    
    let user = users[0];
    if (!user) {
      // 신규 가입 (social 컬럼에 'kakao' 저장)
      await pool.query(
        'INSERT INTO nextict_tbl_user (userid, name, password, social) VALUES (?, ?, ?, 2)',
        [kakaoUser.id.toString(), kakaoUser.properties.nickname, 'KAKAO_AUTH']
      );
      user = { userid: kakaoUser.id.toString(), name: kakaoUser.properties.nickname };
    }

    // 4. JWT 및 쿠키 설정 (로그인 로직과 동일)
    const token = generateToken({ userid: user.userid, name: user.name });
    setCookie(event, 'auth_token', token, { maxAge: 60 * 60 * 24, path: '/' });
    setCookie(event, 'user_name', user.name, { maxAge: 60 * 60 * 24, path: '/' });
    setCookie(event, 'user_id', user.userid, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    return sendRedirect(event, '/board/list');
  } catch (error) {
    console.error('Kakao Error:', error);
    return sendRedirect(event, '/?error=kakao_failed');
  }
});