<!-- @format -->

<template>
   <Navbar />

   <div class="container my-5">
      <h3>Dashboard</h3>
      <div class="row">
         <div class="col">
            <router-link :to="{ name: 'complaint.detail', params: { id: 23 } }" class="text-decoration-none">
               <div class="card hover-gray mb-3">
                  <div class="card-body">Tanggal 10 Januari, Surat Pembuatan KTP, status : <span class="badge text-bg-primary">Pending</span></div>
               </div>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script setup>
   import Navbar from "../../components/Navbar.vue";
   import { ref, onBeforeMount } from "vue";
   import axios from "axios";
   import { httpRequest } from "../../utils/axiosInstance";

   const complaintRes = ref([]);

   onBeforeMount(() => {
      const getComplaintRes = async () => {
         await httpRequest
            .get(`/complaintResult`)
            .then((res) => {
               console.log(res.data.data);
            })
            .catch((err) => console.log(err));
      };
      getComplaintRes();
   });
</script>
