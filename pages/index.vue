<template>
  <div class="login-container">
    <div class="login-box">
      <h1>로그인</h1>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="userid">아이디</label>
          <input 
            type="text" 
            id="userid" 
            v-model="formData.userid"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input 
            type="password" 
            id="password" 
            v-model="formData.password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        
        <button type="submit" class="login-btn" :disabled="isLoading">
          {{ isLoading ? '로그인 중...' : '로그인' }}
        </button>
      </form>

      <div class="social-login">
      <div class="divider">
        <span>또는</span>
      </div>
      
      <button class="google-btn" @click="loginWithGoogle">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
        Google 계정으로 로그인
      </button>

      <button class="kakao-btn-only" @click="loginWithKakao">
        <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="Kakao 로그인" />
      </button>
      </div>
      
      <div class="register-link">
        <p>아직 회원이 아니신가요?</p>
        <button @click="goToRegister" class="register-btn">
          회원가입
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

const loginWithGoogle = () => {
  window.location.href = '/api/auth/google';
};

const loginWithKakao = () => {
  window.location.href = '/api/auth/kakao';
};

definePageMeta({
  layout: false,
  //middleware: 'auth'  // 미들웨어 적용
});


const router = useRouter();

// 이미 로그인되어 있으면 게시판으로 리다이렉트
onMounted(() => {
  const token = useCookie('auth_token');
  if (token.value) {
    router.push('/board/list');
  }
});

const formData = ref({
  userid: '',
  password: ''
});

const isLoading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  if (isLoading.value) return;
  
  isLoading.value = true;
  errorMessage.value = '';
  
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: formData.value
    });
    
    if (response.success) {
      router.push('/board/list');
    } else {
      errorMessage.value = response.error;
    }
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = '로그인 중 오류가 발생했습니다.';
  } finally {
    isLoading.value = false;
  }
};

const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: bold;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.error-message {
  padding: 12px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover:not(:disabled) {
  background-color: #5568d3;
}

.login-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.register-link {
  margin-top: 30px;
  text-align: center;
}

.register-link p {
  color: #666;
  margin-bottom: 10px;
  font-size: 14px;
}

.register-btn {
  padding: 10px 20px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.register-btn:hover {
  background-color: #e0e0e0;
}

.social-login {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 구분선 */
.divider {
  display: flex;
  align-items: center;
  color: #999;
  font-size: 12px;
  margin-bottom: 10px;
}
.divider::before, .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.divider span {
  padding: 0 10px;
}

/* 공통 버튼 */
.google-btn, .kakao-btn {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px; /* 요즘 스타일인 둥근 사각형 */
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: filter 0.2s;
}

.google-btn img, .kakao-btn img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

/* 구글 버튼: 화이트 테두리 스타일 */
.google-btn {
  background-color: #ffffff;
  color: #1f1f1f;
  border: 1px solid #dcdcdc;
}

.google-btn:hover {
  background-color: #f7f8f8;
}

.kakao-btn-only {
  width: 100%;       /* 부모 너비에 맞춤 */
  height: 48px;     /* 버튼 높이 설정 */
  padding: 0;        /* 안쪽 여백 제거 (중요) */
  border: none;
  border-radius: 6px;
  overflow: hidden;  /* 이미지가 모서리를 넘어가지 않게 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FEE500; /* 혹시 이미지가 로딩 안될 때를 위한 카카오색 */
}

.kakao-btn-only img {
  width: 50%;       /* 버튼 너비에 꽉 채움 */
  height: 100%;      /* 버튼 높이에 꽉 채움 */
  object-fit: cover; /* 비율을 유지하면서 버튼 공간을 가득 채움 */
  transition: transform 0.2s;
}

.kakao-btn-only:hover {
  filter: brightness(0.9); /* 마우스 올렸을 때 살짝 어둡게 효과 */
}
</style>