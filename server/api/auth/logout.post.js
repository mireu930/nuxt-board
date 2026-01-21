import { getDbPool } from '../../utils/db';

export default defineEventHandler(async (event) => {
  // 쿠키에서 현재 사용자 ID 추출
  const config = useRuntimeConfig();
  const userId = getCookie(event, 'user_id');
  let socialType; // 기본값 (일반)

  if (userId) {
    const pool = getDbPool();
    // 1. DB에서 해당 유저의 social 값을 조회
    const [rows] = await pool.query(
      'SELECT social FROM nextict_tbl_user WHERE userid = ?', 
      [userId]
    );
    
    if (rows.length > 0) {
      socialType = rows[0].social; // '2' 또는 'kakao' 등 저장된 값
    }
  }

  // 2. 카카오 유저가 아닐 경우에만 여기서 바로 쿠키를 지워줍니다.
  // (카카오 유저는 logout-callback에서 지울 것이기 때문)
  if (socialType !== '2' && socialType !== 'kakao') {
    deleteCookie(event, 'auth_token', { path: '/' });
    deleteCookie(event, 'user_id', { path: '/' });
    deleteCookie(event, 'user_name', { path: '/' });
  }

  // 3. 프론트엔드에 socialType을 전달하여 리다이렉트 여부를 결정하게 함
  return {
    success: true,
    socialType: socialType,
    kakaoApiKey: config.kakaoRestApiKey
  };
});