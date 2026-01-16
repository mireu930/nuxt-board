import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc, u as useRouter } from "../server.mjs";
import { u as useCookie } from "./cookie-BDlHwirV.js";
import "C:/my-app/nuxt-board/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/my-app/nuxt-board/node_modules/hookable/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/unctx/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/my-app/nuxt-board/node_modules/radix3/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/defu/dist/defu.mjs";
import "C:/my-app/nuxt-board/node_modules/ufo/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/cookie-es/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/destr/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/ohash/dist/index.mjs";
import "C:/my-app/nuxt-board/node_modules/klona/dist/index.mjs";
const _sfc_main = {
  __name: "write",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const userName = useCookie("user_name");
    const writerName = ref(userName.value || "");
    const formData = ref({
      title: "",
      content: ""
    });
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-af71ebd8><h1 data-v-af71ebd8>게시물 작성</h1><form class="write-form" data-v-af71ebd8><div class="form-group" data-v-af71ebd8><label for="writer" data-v-af71ebd8>작성자 *</label><input type="text" id="writer"${ssrRenderAttr("value", unref(writerName))} disabled class="disabled-input" data-v-af71ebd8></div><div class="form-group" data-v-af71ebd8><label for="title" data-v-af71ebd8>제목 *</label><input type="text" id="title"${ssrRenderAttr("value", unref(formData).title)} placeholder="제목을 입력하세요" required data-v-af71ebd8></div><div class="form-group" data-v-af71ebd8><label for="content" data-v-af71ebd8>내용 *</label><textarea id="content" placeholder="내용을 입력하세요" rows="15" required data-v-af71ebd8>${ssrInterpolate(unref(formData).content)}</textarea></div>`);
      if (unref(errorMessage)) {
        _push(`<div class="error-message" data-v-af71ebd8>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="button-group" data-v-af71ebd8><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-af71ebd8>${ssrInterpolate(unref(isSubmitting) ? "등록 중..." : "등록")}</button><button type="button" class="cancel-btn" data-v-af71ebd8> 취소 </button></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/board/write.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const write = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af71ebd8"]]);
export {
  write as default
};
//# sourceMappingURL=write-Czz66_i7.js.map
