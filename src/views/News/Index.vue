<!-- @format -->

<template>
   <NavbarVue />
   <div class="container my-5">
      <h3>Wadewa News</h3>
      <div class="row justify-content-center">
         <div class="col-6" v-for="(news, i) in newst">
            <div class="card mt-4" :key="i">
               <img :src="imageURL + news.image_news" class="card-img-top img-fluid" :alt="i" />
               <div class="card-body">
                  <h5 class="card-title">{{ news.title }}</h5>
                  <p class="card-text">{{ news.description }}</p>
                  <router-link :to="{ name: 'news.detail', params: { id: news.newsId } }" class="btn btn-primary">Selengkapnya</router-link>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
   import NavbarVue from "../../components/Navbar.vue";
   import { onBeforeMount, ref } from "vue";
   import { httpRequest } from "../../utils/axiosInstance";

   const imageURL = import.meta.env.VITE_IMAGE_URL;
   const newst = ref([]);

   onBeforeMount(async () => {
      await httpRequest
         .get(`/newst`)
         .then((res) => {
            newst.value = res.data.data;
         })
         .catch((err) => console.log(err));
   });
</script>
