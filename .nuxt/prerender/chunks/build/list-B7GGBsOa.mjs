import { computed, withAsyncContext, mergeProps, unref, useSSRContext } from 'file://C:/my-app/nuxt-board/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass } from 'file://C:/my-app/nuxt-board/node_modules/vue/server-renderer/index.mjs';
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
  __name: "list",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const userName = useCookie("user_name");
    const currentPage = computed(() => {
      return parseInt(route.query.page) || 1;
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/boards", {
      query: {
        page: currentPage,
        limit: 10
      },
      watch: [currentPage]
    }, "$_FlH-19PVU")), __temp = await __temp, __restore(), __temp);
    const visiblePages = computed(() => {
      if (!data.value || !data.value.pagination) return [];
      const totalPages = data.value.pagination.totalPages;
      const current = currentPage.value;
      const pages = [];
      let startPage = Math.max(1, current - 2);
      let endPage = Math.min(totalPages, current + 2);
      if (current <= 3) {
        endPage = Math.min(5, totalPages);
      }
      if (current >= totalPages - 2) {
        startPage = Math.max(1, totalPages - 4);
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    });
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-0b5b8e02><div class="header" data-v-0b5b8e02><h1 data-v-0b5b8e02>\uAC8C\uC2DC\uD310</h1><div class="user-info" data-v-0b5b8e02><span data-v-0b5b8e02>${ssrInterpolate(unref(userName))}\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4</span></div></div>`);
      if (unref(pending)) {
        _push(`<div class="loading" data-v-0b5b8e02> \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911... </div>`);
      } else if (unref(error)) {
        _push(`<div class="error" data-v-0b5b8e02> \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (unref(data) && unref(data).success) {
        _push(`<div data-v-0b5b8e02><div class="board-info" data-v-0b5b8e02> \uC804\uCCB4 \uAC8C\uC2DC\uAE00: ${ssrInterpolate(unref(data).pagination.totalCount)}\uAC1C (${ssrInterpolate(unref(data).pagination.currentPage)} / ${ssrInterpolate(unref(data).pagination.totalPages)} \uD398\uC774\uC9C0) </div><table class="board-table" data-v-0b5b8e02><thead data-v-0b5b8e02><tr data-v-0b5b8e02><th data-v-0b5b8e02>\uBC88\uD638</th><th data-v-0b5b8e02>\uC791\uC131\uC790</th><th data-v-0b5b8e02>\uC81C\uBAA9</th><th data-v-0b5b8e02>\uC870\uD68C\uC218</th><th data-v-0b5b8e02>\uB4F1\uB85D\uC77C</th></tr></thead><tbody data-v-0b5b8e02><!--[-->`);
        ssrRenderList(unref(data).data, (board) => {
          _push(`<tr data-v-0b5b8e02><td data-v-0b5b8e02>${ssrInterpolate(board.rownum)}</td><td data-v-0b5b8e02>${ssrInterpolate(board.writer)}</td><td class="title-cell" data-v-0b5b8e02><a class="title-link" data-v-0b5b8e02>${ssrInterpolate(board.title)}</a></td><td data-v-0b5b8e02>${ssrInterpolate(board.hitno)}</td><td data-v-0b5b8e02>${ssrInterpolate(formatDate(board.regDate))}</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        if (unref(data).data.length === 0) {
          _push(`<div class="no-data" data-v-0b5b8e02> \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. </div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(data).pagination.totalPages > 1) {
          _push(`<div class="pagination" data-v-0b5b8e02><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> \uCC98\uC74C </button><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> \uC774\uC804 </button><!--[-->`);
          ssrRenderList(unref(visiblePages), (pageNum) => {
            _push(`<button class="${ssrRenderClass(["page-btn", { active: pageNum === unref(currentPage) }])}" data-v-0b5b8e02>${ssrInterpolate(pageNum)}</button>`);
          });
          _push(`<!--]--><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(data).pagination.totalPages) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> \uB2E4\uC74C </button><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(data).pagination.totalPages) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> \uB9C8\uC9C0\uB9C9 </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bottom-buttons" data-v-0b5b8e02><button class="write-btn" data-v-0b5b8e02> \uAC8C\uC2DC\uBB3C \uB4F1\uB85D </button><button class="logout-btn" data-v-0b5b8e02> \uB85C\uADF8\uC544\uC6C3 </button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/board/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b5b8e02"]]);

export { list as default };
//# sourceMappingURL=list-B7GGBsOa.mjs.map
