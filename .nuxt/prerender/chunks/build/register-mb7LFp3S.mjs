import { ref, mergeProps, unref, useSSRContext } from 'file://C:/my-app/nuxt-board/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'file://C:/my-app/nuxt-board/node_modules/vue/server-renderer/index.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register-container" }, _attrs))} data-v-71dbe998><div class="register-box" data-v-71dbe998><h1 data-v-71dbe998>\uD68C\uC6D0\uAC00\uC785</h1><form data-v-71dbe998><div class="form-group" data-v-71dbe998><label for="userid" data-v-71dbe998>\uC544\uC774\uB514 *</label><input type="text" id="userid"${ssrRenderAttr("value", unref(formData).userid)} placeholder="\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="name" data-v-71dbe998>\uC774\uB984 *</label><input type="text" id="name"${ssrRenderAttr("value", unref(formData).name)} placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="password" data-v-71dbe998>\uBE44\uBC00\uBC88\uD638 *</label><input type="password" id="password"${ssrRenderAttr("value", unref(formData).password)} placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="email" data-v-71dbe998>\uC774\uBA54\uC77C *</label><input type="email" id="email"${ssrRenderAttr("value", unref(formData).email)} placeholder="\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694" required data-v-71dbe998></div><div class="form-group" data-v-71dbe998><label for="job" data-v-71dbe998>\uC9C1\uC5C5</label><select id="job" data-v-71dbe998><option value="" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "") : ssrLooseEqual(unref(formData).job, "")) ? " selected" : ""}>\uC120\uD0DD\uD558\uC138\uC694</option><option value="\uD68C\uC0AC\uC6D0" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "\uD68C\uC0AC\uC6D0") : ssrLooseEqual(unref(formData).job, "\uD68C\uC0AC\uC6D0")) ? " selected" : ""}>\uD68C\uC0AC\uC6D0</option><option value="\uACF5\uBB34\uC6D0" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "\uACF5\uBB34\uC6D0") : ssrLooseEqual(unref(formData).job, "\uACF5\uBB34\uC6D0")) ? " selected" : ""}>\uACF5\uBB34\uC6D0</option><option value="\uC790\uC601\uC5C5" data-v-71dbe998${ssrIncludeBooleanAttr(Array.isArray(unref(formData).job) ? ssrLooseContain(unref(formData).job, "\uC790\uC601\uC5C5") : ssrLooseEqual(unref(formData).job, "\uC790\uC601\uC5C5")) ? " selected" : ""}>\uC790\uC601\uC5C5</option></select></div><div class="form-group" data-v-71dbe998><label data-v-71dbe998>\uCDE8\uBBF8</label><div class="checkbox-group" data-v-71dbe998><label class="checkbox-label" data-v-71dbe998><input type="checkbox" value="\uC601\uD654\uAC10\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).hobbies) ? ssrLooseContain(unref(formData).hobbies, "\uC601\uD654\uAC10\uC0C1") : unref(formData).hobbies) ? " checked" : ""} data-v-71dbe998> \uC601\uD654\uAC10\uC0C1 </label><label class="checkbox-label" data-v-71dbe998><input type="checkbox" value="\uC74C\uC545\uCCAD\uCDE8"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).hobbies) ? ssrLooseContain(unref(formData).hobbies, "\uC74C\uC545\uCCAD\uCDE8") : unref(formData).hobbies) ? " checked" : ""} data-v-71dbe998> \uC74C\uC545\uCCAD\uCDE8 </label><label class="checkbox-label" data-v-71dbe998><input type="checkbox" value="\uC2A4\uD3EC\uCE20"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).hobbies) ? ssrLooseContain(unref(formData).hobbies, "\uC2A4\uD3EC\uCE20") : unref(formData).hobbies) ? " checked" : ""} data-v-71dbe998> \uC2A4\uD3EC\uCE20 </label></div></div><div class="form-group" data-v-71dbe998><label data-v-71dbe998>\uC131\uBCC4</label><div class="radio-group" data-v-71dbe998><label class="radio-label" data-v-71dbe998><input type="radio" value="\uB0A8\uC131"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formData).gender, "\uB0A8\uC131")) ? " checked" : ""} data-v-71dbe998> \uB0A8\uC131 </label><label class="radio-label" data-v-71dbe998><input type="radio" value="\uC5EC\uC131"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formData).gender, "\uC5EC\uC131")) ? " checked" : ""} data-v-71dbe998> \uC5EC\uC131 </label></div></div>`);
      if (unref(errorMessage)) {
        _push(`<div class="error-message" data-v-71dbe998>${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="button-group" data-v-71dbe998><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} data-v-71dbe998>${ssrInterpolate(unref(isLoading) ? "\uAC00\uC785 \uC911..." : "\uAC00\uC785\uD558\uAE30")}</button><button type="button" class="cancel-btn" data-v-71dbe998> \uCDE8\uC18C </button></div></form></div></div>`);
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

export { register as default };
//# sourceMappingURL=register-mb7LFp3S.mjs.map
