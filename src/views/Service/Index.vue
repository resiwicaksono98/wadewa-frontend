<!-- @format -->

<template>
   <Navbar />
   <div class="container my-5">
      <h2 class="text-center">Formulir Pelayanan</h2>
      <Form @submit="onSubmit" :validation-schema="schema">
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Jenis Keluhan</label>
            <Field class="form-select" name="complaint_type" as="select">
               <option selected value="">Open this select menu</option>
               <option v-for="(letter, i) in letters" :value="letter.letterId" :key="i">{{ letter.title }}</option>
            </Field>
            <ErrorMessage name="complaint_type" class="text-danger" />
         </div>
         <div class="mb-3">
            <label for="formFile" class="form-label">Surat Dari RT/RW Setempat</label>
            <Field class="form-control" type="file" id="formFile" name="image_url" />
            <ErrorMessage name="image_url" class="text-danger" />
         </div>
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
            <Field class="form-control" rows="3" name="description" as="textarea"> </Field>
            <ErrorMessage name="description" class="text-danger" />
         </div>
         <button class="btn btn-primary">Kirim Formulir</button>
      </Form>
   </div>
</template>

<script setup>
   import { ref, onBeforeMount } from "vue";
   import { useRouter } from "vue-router";
   import Navbar from "../../components/Navbar.vue";
   import { Form, Field, ErrorMessage } from "vee-validate";
   import * as yup from "yup";
   import { httpRequest } from "../../utils/axiosInstance";

   const router = useRouter();
   const letters = ref([]);
   const complaintStatus = ref([]);

   onBeforeMount(() => {
      // Get Letters
      const getLetters = async () => {
         await httpRequest
            .get(`/letters`)
            .then((res) => {
               letters.value = res.data.data;
            })
            .catch((err) => console.log(err));
      };
      // Get Complaint
      const getComplaintRes = async () => {
         await httpRequest
            .get("/complaintResult")
            .then((res) => {
               if (res.status == 200) {
                  complaintStatus.value = res.data.data;
               }
            })
            .catch((err) => console.log(err));
      };
      getLetters();
      getComplaintRes();
   });

   const schema = yup.object({
      complaint_type: yup.string().required(),
      image_url: yup.string().required(),
   });

   async function onSubmit(values) {
      const status = complaintStatus.value.filter((complaint) => complaint.status === "pending");
      console.log(status.length);
      if (status.length > 0) {
         alert("Ada Pengajuan Yang Belum Terselesaikan");
         return false;
      } else {
         await httpRequest
            .post("/complaints", values, {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            })
            .then((res) => {
               if (res.status === 200) {
                  alert("Pengajuan Berhasil");
                  router.push({ name: "service.success", params: { id: res.data.data.complaintId } });
               }
            })
            .catch((err) => {
               alert("Pengajuan gagal");
               console.log(err);
            });
      }
   }
</script>
