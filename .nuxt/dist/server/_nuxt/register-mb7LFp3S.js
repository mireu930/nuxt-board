import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import "C:/my-app/nuxt-board/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, u as useRouter } from "../server.mjs";
import "C:/my-app/nuxt-board/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/my-app/nuxt-board/node_modules/unctx/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/my-app/nuxt-board/node_modules/radix3/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/defu/dist/defu.mjs";
import "C:/my-app/nuxt-board/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const formData = ref({
      userid: "",
      name: "",
      password: "",
      email: "",
      job: "",
      hobbies: [],
      gender: ""
    });
    const isLoading = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register-container" }, _attrs))} data-v-71dbe998><div class="register-box" data-v-71dbe998><h1 data-v-71dbe998>회원가입</h1><form data-v-71dbe998><div class="form-group" data-v-71dbe998><label for="userid" data-v-71dbe998>아이디 *</label><input type="text" id="userid"${ssrRenderAttr("value", unref(formData).userid)} placeholder="아이디를 입력하세요" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="name" data-v-71dbe998>이름 *</label><input type="text" id="name"${ssrRenderAttr("value", unref(formData).name)} placeholder="이름을 입력하세요" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="password" data-v-71dbe998>비밀번호 *</label><input type="password" id="password"${ssrRenderAttr("value", unref(formData).password)} placeholder="비밀번호를 입력하세요" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="email" data-v-71dbe998>이메일 *</label><input type="email" id="email"${ssrRenderAttr("value", unref(formData).email)} placeholder="이메일을 입력하세요" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="job" data-v-71dbe998>직업</label><select id="job" data-v-71dbe998><option value="" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "") : ssrLooseEqual(unref(formData).job, "")) ? " selected" : ""}>선택하세요</option><option value="회사원" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "회사원") : ssrLooseEqual(unref(formData).job, "회사원")) ? " selected" : ""}>회사원</option><option value="공무원" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "공무원") : ssrLooseEqual(unref(formData).job, "공무원")) ? " selected" : ""}>공무원</option><option value="자영업" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "자영업") : ssrLooseEqual(unref(formData).job, "자영업")) ? " selected" : ""}>자영업</option></select></div><div class="form-group" data-v-71dbe998><label data-v-71dbe998>취미</label><div class="checkbox-group" data-v-71dbe998><label class="checkbox-label" data-v-71dbe998><input type="checkbox" value="영화감상"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).hobbies) ? ssrLooseContain(unref(formData).hobbies, "영화감상") : unref(formData).hobbies) ? " checked" : ""} data-v-71dbe998> 영화감상 </label><label class="checkbox-label" data-v-71dbe998><input type="checkbox" value="음악청취"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).hobbies) ? ssrLooseContain(unref(formData).hobbies, "음악청취") : unref(formData).hobbies) ? " checked" : ""} data-v-71dbe998> 음악청취 </label><label class="checkbox-label" data-v-71dbe998><input type="checkbox" value="스포츠"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).hobbies) ? ssrLooseContain(unref(formData).hobbies, "스포츠") : unref(formData).hobbies) ? " checked" : ""} data-v-71dbe998> 스포츠 </label></div></div><div class="form-group" data-v-71dbe998><label data-v-71dbe998>성별</label><div class="radio-group" data-v-71dbe998><label class="radio-label" data-v-71dbe998><input type="radio" value="남성"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formData).gender, "남성")) ? " checked" : ""} data-v-71dbe998> 남성 </label><label class="radio-label" data-v-71dbe998><input type="radio" value="여성"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formData).gender, "여성")) ? " checked" : ""} data-v-71dbe998> 여성 </label></div></div>`);
      if (unref(errorMessage)) {
        _push(`<div class="error-message" data-v-71dbe998>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="button-group" data-v-71dbe998><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} data-v-71dbe998>${ssrInterpolate(unref(isLoading) ? "가입 중..." : "가입하기")}</button><button type="button" class="cancel-btn" data-v-71dbe998> 취소 </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71dbe998"]]);
export {
  register as default
};
//# sourceMappingURL=register-mb7LFp3S.js.map
