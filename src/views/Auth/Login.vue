<!-- @format -->

<template>
   <div class="container my-5">
      <h2 class="text-center">Login</h2>
      <div class="text-danger text-center my-3">{{ !auth.message ? "" : auth.message }}</div>
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

<script setup>
   import { reactive, ref, watchEffect } from "vue";
   import { useRouter } from "vue-router";
   import { useAuthStore } from "../../store/auth";

   const router = useRouter();
   const auth = useAuthStore();

   const dataUser = reactive({
      email: "",
      password: "",
   });
   watchEffect(() => {
      if (auth.user) {
         alert("success login");
         router.go();
      }
   });

   const login = async () => {
      auth.login(dataUser);
   };
</script>
