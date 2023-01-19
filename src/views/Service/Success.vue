<!-- @format -->

<template>
   <div class="container my-5">
      <h3 class="text-center">Pengajuan Kamu Success</h3>
      <div class="d-flex justify-content-center">
         <img src="../../assets/success.png" class="img-fluid rounded-top w-50" alt="" />
      </div>
      <h5 class="d-flex justify-content-center my-4">
         <router-link :to="{ name: 'news.index' }" class="text-decoration-none">Cek Dashboard</router-link>
      </h5>
   </div>
</template>

<script>
   export default {};
</script>
