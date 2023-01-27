<!-- @format -->

<template>
   <Navbar />
   <div class="container my-5">
      <h2 class="text-center">Formulir Pelayanan</h2>
      <form @submit.prevent="store()">
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Jenis Keluhan</label>
            <select class="form-select" aria-label="Default select example">
               <option selected>Open this select menu</option>
               <option value="1">Surat Pembuatan KTP</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div class="mb-3">
            <label for="formFile" class="form-label">Surat Dari RT/RW Setempat</label>
            <input class="form-control" type="file" id="formFile" />
         </div>
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>
         <button type="submit" class="btn btn-primary">Kirim Formulir</button>
      </form>
   </div>
</template>

<script setup>
   import { useRouter } from "vue-router";
   import Navbar from "../../components/Navbar.vue";

   const router = useRouter();

   async function store() {
      router.push({ name: "service.success", params: { id: 222 } });
   }
</script>
