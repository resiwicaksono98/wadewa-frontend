<!-- @format -->

<template>
   <Navbar />

   <div class="container my-5">
      <h3>Dashboard</h3>
      <div class="row">
         <div class="col">
            <div v-for="(complaint, i) in complaintRes" :key="i">
               <router-link :to="{ name: 'complaint.detail', params: { id: complaint.complaintResultId } }" class="text-decoration-none">
                  <div class="card hover-gray mb-3">
                     <div class="card-body">
                        {{ moment(complaint.createdAt).format("D MMMM YYYY") }}, {{ complaint.letter.title }}, status : <span class="badge text-bg-primary">{{ complaint.status }}</span>
                     </div>
                  </div>
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
   import Navbar from "../../components/Navbar.vue";
   import { ref, onBeforeMount } from "vue";
   import { httpRequest } from "../../utils/axiosInstance";
   import moment from "moment";

   const complaintRes = ref([]);

   onBeforeMount(() => {
      const getComplaintRes = async () => {
         await httpRequest
            .get(`/complaintResult`)
            .then((res) => {
               complaintRes.value = res.data.data;
            })
            .catch((err) => console.log(err));
      };
      getComplaintRes();
   });
</script>
