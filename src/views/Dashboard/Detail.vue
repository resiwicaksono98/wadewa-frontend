<!-- @format -->

<template>
   <NavbarVue />
   <div class="container my-5">
      <h3>Detail Your Complaint</h3>
      <div class="my-5 border p-3">
         <h5 class="mb-3">Disetujui Oleh : {{ complaintRes.admin?.name }}</h5>
         <h5 class="mb-3">Kepala Desa : {{ complaintRes.letter?.village_head }}</h5>
         <h5 class="mb-3">Pengajuan : {{ complaintRes.letter?.title }}</h5>
         <h5 class="mb-3">Nama : {{ complaintRes.citizen?.name }}</h5>
         <h5 class="mb-3">NIK : {{ complaintRes.citizen?.nik }}</h5>
         <h5 class="mb-3">
            Status Keluhan : <span class="badge text-bg-primary">{{ complaintRes.status }}</span>
         </h5>
         <h5 class="mb-3 d-flex gap-2">
            Files :
            <div v-if="complaintRes.status === 'success'">
               <a :href="fileURL + complaintRes.files" target="_blank">Klik disini</a>
            </div>
            <div v-else>Belum Dibuat Admin</div>
         </h5>
      </div>
   </div>
</template>

<script setup>
   import NavbarVue from "../../components/Navbar.vue";
   import { ref, onBeforeMount } from "vue";
   import { httpRequest } from "../../utils/axiosInstance";
   import { useRoute } from "vue-router";

   const complaintRes = ref([]);
   const route = useRoute();
   const fileURL = import.meta.env.VITE_IMAGE_URL;

   onBeforeMount(() => {
      const getComplaintRes = async () => {
         await httpRequest
            .get(`/complaintResult/${route.params.id}`)
            .then((res) => {
               complaintRes.value = res.data.data;
            })
            .catch((err) => {
               console.log(err);
            });
      };
      getComplaintRes();
   });
</script>
