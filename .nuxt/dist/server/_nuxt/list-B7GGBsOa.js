import { computed, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, d as useRoute, u as useRouter } from "../server.mjs";
import { u as useCookie } from "./cookie-BDlHwirV.js";
import { u as useFetch } from "./fetch-CM17_2Sf.js";
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
import "@vue/shared";
import "C:/my-app/nuxt-board/node_modules/perfect-debounce/dist/index.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-0b5b8e02><div class="header" data-v-0b5b8e02><h1 data-v-0b5b8e02>게시판</h1><div class="user-info" data-v-0b5b8e02><span data-v-0b5b8e02>${ssrInterpolate(unref(userName))}님 환영합니다</span></div></div>`);
      if (unref(pending)) {
        _push(`<div class="loading" data-v-0b5b8e02> 데이터를 불러오는 중... </div>`);
      } else if (unref(error)) {
        _push(`<div class="error" data-v-0b5b8e02> 오류가 발생했습니다: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (unref(data) && unref(data).success) {
        _push(`<div data-v-0b5b8e02><div class="board-info" data-v-0b5b8e02> 전체 게시글: ${ssrInterpolate(unref(data).pagination.totalCount)}개 (${ssrInterpolate(unref(data).pagination.currentPage)} / ${ssrInterpolate(unref(data).pagination.totalPages)} 페이지) </div><table class="board-table" data-v-0b5b8e02><thead data-v-0b5b8e02><tr data-v-0b5b8e02><th data-v-0b5b8e02>번호</th><th data-v-0b5b8e02>작성자</th><th data-v-0b5b8e02>제목</th><th data-v-0b5b8e02>조회수</th><th data-v-0b5b8e02>등록일</th></tr></thead><tbody data-v-0b5b8e02><!--[-->`);
        ssrRenderList(unref(data).data, (board) => {
          _push(`<tr data-v-0b5b8e02><td data-v-0b5b8e02>${ssrInterpolate(board.rownum)}</td><td data-v-0b5b8e02>${ssrInterpolate(board.writer)}</td><td class="title-cell" data-v-0b5b8e02><a class="title-link" data-v-0b5b8e02>${ssrInterpolate(board.title)}</a></td><td data-v-0b5b8e02>${ssrInterpolate(board.hitno)}</td><td data-v-0b5b8e02>${ssrInterpolate(formatDate(board.regDate))}</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        if (unref(data).data.length === 0) {
          _push(`<div class="no-data" data-v-0b5b8e02> 등록된 게시글이 없습니다. </div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(data).pagination.totalPages > 1) {
          _push(`<div class="pagination" data-v-0b5b8e02><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> 처음 </button><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> 이전 </button><!--[-->`);
          ssrRenderList(unref(visiblePages), (pageNum) => {
            _push(`<button class="${ssrRenderClass(["page-btn", { active: pageNum === unref(currentPage) }])}" data-v-0b5b8e02>${ssrInterpolate(pageNum)}</button>`);
          });
          _push(`<!--]--><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(data).pagination.totalPages) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> 다음 </button><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(data).pagination.totalPages) ? " disabled" : ""} class="page-btn" data-v-0b5b8e02> 마지막 </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bottom-buttons" data-v-0b5b8e02><button class="write-btn" data-v-0b5b8e02> 게시물 등록 </button><button class="logout-btn" data-v-0b5b8e02> 로그아웃 </button></div></div>`);
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
export {
  list as default
};
//# sourceMappingURL=list-B7GGBsOa.js.map
