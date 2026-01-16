import { defineEventHandler, deleteCookie, sendRedirect } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';

const logoutCallback_get = defineEventHandler((event) => {
  deleteCookie(event, "auth_token", { path: "/" });
  deleteCookie(event, "user_id", { path: "/" });
  deleteCookie(event, "user_name", { path: "/" });
  return sendRedirect(event, "/");
});

export { logoutCallback_get as default };
//# sourceMappingURL=logout-callback.get.mjs.map
