import { withAsyncContext, computed, ref, mergeProps, unref, useSSRContext } from 'file://C:/my-app/nuxt-board/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file://C:/my-app/nuxt-board/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, d as useRoute, u as useRouter } from './server.mjs';
import { u as useCookie } from './cookie-BDlHwirV.mjs';
import { u as useFetch } from './fetch-CM17_2Sf.mjs';
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
import 'file://C:/my-app/nuxt-board/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file://C:/my-app/nuxt-board/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const userId = useCookie("user_id");
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/board/${route.params.id}`, "$ILpk7GLwbK")), __temp = await __temp, __restore(), __temp);
    const isOwner = computed(() => {
      if (!data.value || !data.value.data) return false;
      return data.value.data.userid === userId.value;
    });
    const isEditMode = ref(false);
    const showDeleteModal = ref(false);
    const isSubmitting = ref(false);
    const errorMessage = ref("");
    const editData = ref({
      title: "",
      content: ""
    });
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };
    const formatContent = (content) => {
      if (!content) return "";
      return content.replace(/\n/g, "<br>");
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-8bdb74f6>`);
      if (unref(pending)) {
        _push(`<div class="loading" data-v-8bdb74f6> \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911... </div>`);
      } else if (unref(error)) {
        _push(`<div class="error" data-v-8bdb74f6> \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (!unref(isEditMode) && unref(data) && unref(data).success) {
        _push(`<div data-v-8bdb74f6><div class="view-container" data-v-8bdb74f6><h1 data-v-8bdb74f6>${ssrInterpolate(unref(data).data.title)}</h1><div class="post-info" data-v-8bdb74f6><div class="info-item" data-v-8bdb74f6><span class="label" data-v-8bdb74f6>\uC791\uC131\uC790:</span><span data-v-8bdb74f6>${ssrInterpolate(unref(data).data.writer)}</span></div><div class="info-item" data-v-8bdb74f6><span class="label" data-v-8bdb74f6>\uC791\uC131\uC77C:</span><span data-v-8bdb74f6>${ssrInterpolate(formatDate(unref(data).data.regDate))}</span></div><div class="info-item" data-v-8bdb74f6><span class="label" data-v-8bdb74f6>\uC870\uD68C\uC218:</span><span data-v-8bdb74f6>${ssrInterpolate(unref(data).data.hitno)}</span></div></div><div class="content-box" data-v-8bdb74f6><div class="content" data-v-8bdb74f6>${(_a = formatContent(unref(data).data.content)) != null ? _a : ""}</div></div><div class="button-group" data-v-8bdb74f6>`);
        if (unref(data).prev) {
          _push(`<button class="nav-btn" data-v-8bdb74f6> \u2190 \uC774\uC804 \uAC8C\uC2DC\uBB3C </button>`);
        } else {
          _push(`<button class="nav-btn" disabled data-v-8bdb74f6>\u2190 \uC774\uC804 \uAC8C\uC2DC\uBB3C</button>`);
        }
        _push(`<button class="list-btn" data-v-8bdb74f6> \uBAA9\uB85D </button>`);
        if (unref(data).next) {
          _push(`<button class="nav-btn" data-v-8bdb74f6> \uB2E4\uC74C \uAC8C\uC2DC\uBB3C \u2192 </button>`);
        } else {
          _push(`<button class="nav-btn" disabled data-v-8bdb74f6>\uB2E4\uC74C \uAC8C\uC2DC\uBB3C \u2192</button>`);
        }
        _push(`</div>`);
        if (unref(isOwner)) {
          _push(`<div class="action-buttons" data-v-8bdb74f6><button class="edit-btn" data-v-8bdb74f6> \uC218\uC815 </button><button class="delete-btn" data-v-8bdb74f6> \uC0AD\uC81C </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else if (unref(isEditMode)) {
        _push(`<div class="edit-container" data-v-8bdb74f6><h1 data-v-8bdb74f6>\uAC8C\uC2DC\uBB3C \uC218\uC815</h1><form class="edit-form" data-v-8bdb74f6><div class="form-group" data-v-8bdb74f6><label for="title" data-v-8bdb74f6>\uC81C\uBAA9 *</label><input type="text" id="title"${ssrRenderAttr("value", unref(editData).title)} required data-v-8bdb74f6></div><div class="form-group" data-v-8bdb74f6><label for="content" data-v-8bdb74f6>\uB0B4\uC6A9 *</label><textarea id="content" rows="15" required data-v-8bdb74f6>${ssrInterpolate(unref(editData).content)}</textarea></div>`);
        if (unref(errorMessage)) {
          _push(`<div class="error-message" data-v-8bdb74f6>${ssrInterpolate(unref(errorMessage))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="button-group" data-v-8bdb74f6><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-8bdb74f6>${ssrInterpolate(unref(isSubmitting) ? "\uC218\uC815 \uC911..." : "\uC218\uC815")}</button><button type="button" class="cancel-btn" data-v-8bdb74f6> \uCDE8\uC18C </button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showDeleteModal)) {
        _push(`<div class="modal-overlay" data-v-8bdb74f6><div class="modal-content" data-v-8bdb74f6><h2 data-v-8bdb74f6>\uAC8C\uC2DC\uBB3C \uC0AD\uC81C</h2><p data-v-8bdb74f6>\uC815\uB9D0\uB85C \uC774 \uAC8C\uC2DC\uBB3C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</p><div class="modal-buttons" data-v-8bdb74f6><button class="confirm-btn" data-v-8bdb74f6> \uD655\uC778 </button><button class="cancel-btn" data-v-8bdb74f6> \uCDE8\uC18C </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/board/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bdb74f6"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CbTa5eSG.mjs.map
