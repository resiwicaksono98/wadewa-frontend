<!-- @format -->

<template>
   <Navbar />
   <div class="container my-5">
      <div class="row">
         <div class="col">
            <div class="text-center my-2">
               <h3>{{ news.title }}</h3>
               <img :src="imgURL + news.image_news" class="img-fluid rounded-top mt-4" alt="" />
               <h5 class="mt-4">{{ news.description }}</h5>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
   import { onBeforeMount } from "vue";
   import { useRoute } from "vue-router";
   import { ref } from "vue";
   import Navbar from "../../components/Navbar.vue";
   import { httpRequest } from "../../utils/axiosInstance";

   const route = useRoute();
   const imgURL = import.meta.env.VITE_IMAGE_URL;

   const news = ref([]);

   onBeforeMount(async () => {
      await httpRequest
         .get(`/newst/${route.params.id}`)
         .then((res) => {
            news.value = res.data.data;
         })
         .catch((err) => console.log(err));
   });
</script>
