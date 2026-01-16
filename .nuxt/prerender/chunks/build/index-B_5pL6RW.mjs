import { ref, mergeProps, unref, useSSRContext } from 'file://C:/my-app/nuxt-board/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/my-app/nuxt-board/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-9dd58a31><div class="login-box" data-v-9dd58a31><h1 data-v-9dd58a31>\uB85C\uADF8\uC778</h1><form data-v-9dd58a31><div class="form-group" data-v-9dd58a31><label for="userid" data-v-9dd58a31>\uC544\uC774\uB514</label><input type="text" id="userid"${ssrRenderAttr("value", unref(formData).userid)} placeholder="\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694" required data-v-9dd58a31></div><div class="form-group" data-v-9dd58a31><label for="password" data-v-9dd58a31>\uBE44\uBC00\uBC88\uD638</label><input type="password" id="password"${ssrRenderAttr("value", unref(formData).password)} placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694" required data-v-9dd58a31></div>`);
      if (unref(errorMessage)) {
        _push(`<div class="error-message" data-v-9dd58a31>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="login-btn"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} data-v-9dd58a31>${ssrInterpolate(unref(isLoading) ? "\uB85C\uADF8\uC778 \uC911..." : "\uB85C\uADF8\uC778")}</button></form><div class="social-login" data-v-9dd58a31><div class="divider" data-v-9dd58a31><span data-v-9dd58a31>\uB610\uB294</span></div><button class="google-btn" data-v-9dd58a31><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" data-v-9dd58a31> Google \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778 </button><button class="kakao-btn-only" data-v-9dd58a31><img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="Kakao \uB85C\uADF8\uC778" data-v-9dd58a31></button></div><div class="register-link" data-v-9dd58a31><p data-v-9dd58a31>\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?</p><button class="register-btn" data-v-9dd58a31> \uD68C\uC6D0\uAC00\uC785 </button></div></div></div>`);
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

export { index as default };
//# sourceMappingURL=index-B_5pL6RW.mjs.map
