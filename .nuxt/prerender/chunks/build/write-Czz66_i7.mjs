import { ref, mergeProps, unref, useSSRContext } from 'file://C:/my-app/nuxt-board/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/my-app/nuxt-board/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
import { u as useCookie } from './cookie-BDlHwirV.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/destr/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/hookable/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/unstorage/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/my-app/nuxt-board/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/my-app/nuxt-board/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/ohash/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/klona/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/defu/dist/defu.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/scule/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/my-app/nuxt-board/node_modules/pathe/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/jsonwebtoken/index.js';
import 'file://C:/my-app/nuxt-board/node_modules/unhead/dist/server.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/devalue/index.js';
import 'file://C:/my-app/nuxt-board/node_modules/unhead/dist/utils.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/unctx/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/cookie-es/dist/index.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-af71ebd8><h1 data-v-af71ebd8>\uAC8C\uC2DC\uBB3C \uC791\uC131</h1><form class="write-form" data-v-af71ebd8><div class="form-group" data-v-af71ebd8><label for="writer" data-v-af71ebd8>\uC791\uC131\uC790 *</label><input type="text" id="writer"${ssrRenderAttr("value", unref(writerName))} disabled class="disabled-input" data-v-af71ebd8></div><div class="form-group" data-v-af71ebd8><label for="title" data-v-af71ebd8>\uC81C\uBAA9 *</label><input type="text" id="title"${ssrRenderAttr("value", unref(formData).title)} placeholder="\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694" required data-v-af71ebd8></div><div class="form-group" data-v-af71ebd8><label for="content" data-v-af71ebd8>\uB0B4\uC6A9 *</label><textarea id="content" placeholder="\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694" rows="15" required data-v-af71ebd8>${ssrInterpolate(unref(formData).content)}</textarea></div>`);
      if (unref(errorMessage)) {
        _push(`<div class="error-message" data-v-af71ebd8>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="button-group" data-v-af71ebd8><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-af71ebd8>${ssrInterpolate(unref(isSubmitting) ? "\uB4F1\uB85D \uC911..." : "\uB4F1\uB85D")}</button><button type="button" class="cancel-btn" data-v-af71ebd8> \uCDE8\uC18C </button></div></form></div>`);
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

export { write as default };
//# sourceMappingURL=write-Czz66_i7.mjs.map
