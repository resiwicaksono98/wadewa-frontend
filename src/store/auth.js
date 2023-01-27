/** @format */

import { defineStore } from "pinia";
import { httpRequest } from "../utils/axiosInstance";

export const useAuthStore = defineStore({
   id: "auth",
   state: () => ({
      user: null,
      isLoading: false,
      isSuccess: false,
      isError: null,
      message: "",
   }),
   getters: {},
   actions: {
      async login(user) {
         await httpRequest
            .post(`/auth/login`, {
               email: user.email,
               password: user.password,
            })
            .then((res) => {
               this.user = res.data.data;
               this.isError = null;
               this.message = "";
            })
            .catch((err) => {
               this.isError = err.response.data;
               this.message = err.response.data.msg;
            });
      },
      async me() {
         await httpRequest
            .get(`/auth/me`)
            .then((res) => {
               this.user = res.data;
            })
            .catch((err) => {
               (this.user = null), (this.isError = true);
            });
      },
   },
});
