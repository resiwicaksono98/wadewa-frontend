/** @format */

import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./store/auth";

const routes = [
   {
      path: "/login",
      name: "login",
      component: () => import("./views/Auth/Login.vue"),
      meta: { noAuth: true },
   },
   {
      path: "/register",
      name: "register",
      component: () => import("./views/Auth/Register.vue"),
      meta: { noAuth: true },
   },
   {
      path: "/",
      name: "home.index",
      component: () => import("./views/Home/Index.vue"),
   },
   //  News
   {
      path: "/news",
      name: "news.index",
      component: () => import("./views/News/Index.vue"),
   },
   {
      path: "/news/:id",
      name: "news.detail",
      component: () => import("./views/News/Detail.vue"),
   },
   {
      path: "/profile",
      name: "profile.index",
      component: () => import("./views/Profile/Index.vue"),
   },
   //  Dashboard
   {
      path: "/dashboard",
      name: "dashboard.index",
      component: () => import("./views/Dashboard/Index.vue"),
      meta: { requiresAuth: true },
   },
   {
      path: "/complaint/:id",
      name: "complaint.detail",
      component: () => import("./views/Dashboard/Detail.vue"),
      meta: { requiresAuth: true },
   },
   //  service
   {
      path: "/service",
      name: "service.index",
      component: () => import("./views/Service/Index.vue"),
      meta: { requiresAuth: true },
   },
   {
      path: "/service/:id",
      name: "service.success",
      component: () => import("./views/Service/Success.vue"),
      meta: { requiresAuth: true },
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach(async (to, from, next) => {
   const authStore = useAuthStore();
   await authStore.me();
   if (to.meta.requiresAuth) {
      if (!authStore.user) {
         alert("Harus Login Terlebih Dahulu Gess");
         return next({ name: "login" });
      }
   }
   if (to.meta.noAuth) {
      if (authStore.user) {
         return next({ name: "home.index" });
      }
   }
   return next();
});

export default router;
