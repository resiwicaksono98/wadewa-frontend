/** @format */

import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: "/login",
      name: "login",
      component: () => import("./views/Auth/Login.vue"),
   },
   {
      path: "/register",
      name: "register",
      component: () => import("./views/Auth/Register.vue"),
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
   },
   {
      path: "/complaint/:id",
      name: "complaint.detail",
      component: () => import("./views/Dashboard/Detail.vue"),
   },
   //  service
   {
      path: "/service",
      name: "service.index",
      component: () => import("./views/Service/Index.vue"),
   },
   {
      path: "/service/:id",
      name: "service.success",
      component: () => import("./views/Service/Success.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
