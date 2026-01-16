import { getDbPool } from '../../../utils/db';
import { generateToken } from '../../../utils/jwt';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code;

  if (!code) {
    return sendRedirect(event, '/login?error=no_code');
  }

  try {
    // 1. 구글 토큰 교환 (클라이언트 시크릿은 .env에 넣어주세요)
    const tokenResponse = await $fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: {
        code,
        client_id: process.env.YOUR_GOOGLE_CLIENT_ID + '.apps.googleusercontent.com',
        client_secret: process.env.YOUR_GOOGLE_CLIENT_SECRET, 
        redirect_uri: 'https://www.nextboard.kro.kr/api/auth/google/callback',
        grant_type: 'authorization_code',
      },
    });

    // 2. 구글 사용자 정보 가져오기
    const googleUser = await $fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    });

    const pool = getDbPool();

    // 3. DB 사용자 조회 (일반 로그인과 동일한 테이블 'nextict_tbl_user' 사용)
    const [users] = await pool.query(
      'SELECT userid, name FROM nextict_tbl_user WHERE userid = ?',
      [googleUser.email]
    );

    let user = users[0];

    // 4. 만약 가입되지 않은 소셜 유저라면 자동 회원가입
    if (!user) {
      // 비밀번호는 소셜 로그인이므로 랜덤값이나 특정 규약으로 저장 (로그인 시 사용 안 함)
      const dummyPassword = 'SOCIAL_LOGIN_USER'; 
      await pool.query(
        'INSERT INTO nextict_tbl_user (userid, name, password, social) VALUES (?, ?, ?, 1)',
        [googleUser.email, googleUser.name || 'GoogleUser', dummyPassword]
      );
      user = { userid: googleUser.email, name: googleUser.name };
    }

    // 5. JWT 토큰 생성 (작성하신 utils/jwt 사용)
    const token = generateToken({
      userid: user.userid,
      name: user.name
    });

    // 6. 쿠키 저장 (작성하신 login.post.js와 동일한 설정)
    setCookie(event, 'auth_token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(event, 'user_name', user.name, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(event, 'user_id', user.userid, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    // 7. 성공 후 게시판 목록으로 리다이렉트
    return sendRedirect(event, '/board/list');

  } catch (error) {
    console.error('Google Callback Error:', error);
    return sendRedirect(event, '/login?error=' + encodeURIComponent(error.message));
  }
});