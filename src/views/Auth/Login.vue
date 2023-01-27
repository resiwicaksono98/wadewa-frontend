<!-- @format -->

<template>
   <div class="container my-5">
      <h2 class="text-center">Login</h2>
      <div class="text-danger text-center my-3">{{ !validation ? "" : validation }}</div>
      <form @submit.prevent="login()">
         <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="dataUser.email" />
         </div>
         <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="dataUser.password" />
         </div>
         <div class="my-4">Belum punya akun? <routerLink :to="{ name: 'register' }">Register</routerLink></div>
         <button type="submit" class="btn btn-primary">Login</button>
      </form>
   </div>
</template>

<script>
   import { reactive, ref } from "vue";
   import { useRouter } from "vue-router";
   import { httpRequest } from "../../utils/axiosInstance";

   export default {
      setup() {
         const router = useRouter();

         const validation = ref();

         const dataUser = reactive({
            email: "",
            password: "",
         });

         const login = async () => {
            try {
               const response = await httpRequest.post(`/auth/login`, dataUser);
               if (response.status === 200) {
                  router.push({ name: "home.index" });
                  localStorage.setItem("user", {
                     name: response.data.data.name,
                     nik: response.data.data.nik,
                     email: response.data.data.email,
                  });
               }
            } catch (error) {
               //  if (error.response) {
               //     validation.value = error.response.data.msg;
               //  }
            }
         };
         return { validation, dataUser, login };
      },
   };
</script>
