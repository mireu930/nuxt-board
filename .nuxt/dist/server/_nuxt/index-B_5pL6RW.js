import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "C:/my-app/nuxt-board/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, u as useRouter } from "../server.mjs";
import "C:/my-app/nuxt-board/node_modules/klona/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/my-app/nuxt-board/node_modules/unctx/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/my-app/nuxt-board/node_modules/radix3/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/defu/dist/defu.mjs";
import "C:/my-app/nuxt-board/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const formData = ref({
      userid: "",
      password: ""
    });
    const isLoading = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-9dd58a31><div class="login-box" data-v-9dd58a31><h1 data-v-9dd58a31>로그인</h1><form data-v-9dd58a31><div class="form-group" data-v-9dd58a31><label for="userid" data-v-9dd58a31>아이디</label><input type="text" id="userid"${ssrRenderAttr("value", unref(formData).userid)} placeholder="아이디를 입력하세요" required data-v-9dd58a31></div><div class="form-group" data-v-9dd58a31><label for="password" data-v-9dd58a31>비밀번호</label><input type="password" id="password"${ssrRenderAttr("value", unref(formData).password)} placeholder="비밀번호를 입력하세요" required data-v-9dd58a31></div>`);
      if (unref(errorMessage)) {
        _push(`<div class="error-message" data-v-9dd58a31>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="login-btn"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} data-v-9dd58a31>${ssrInterpolate(unref(isLoading) ? "로그인 중..." : "로그인")}</button></form><div class="social-login" data-v-9dd58a31><div class="divider" data-v-9dd58a31><span data-v-9dd58a31>또는</span></div><button class="google-btn" data-v-9dd58a31><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" data-v-9dd58a31> Google 계정으로 로그인 </button><button class="kakao-btn-only" data-v-9dd58a31><img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="Kakao 로그인" data-v-9dd58a31></button></div><div class="register-link" data-v-9dd58a31><p data-v-9dd58a31>아직 회원이 아니신가요?</p><button class="register-btn" data-v-9dd58a31> 회원가입 </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dd58a31"]]);
export {
  index as default
};
//# sourceMappingURL=index-B_5pL6RW.js.map
