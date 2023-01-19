<!-- @format -->

<template>
   <NavbarVue />
   <div class="container my-5">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active"><img src="https://gallery.poskota.co.id/2021/02/9acc79f6ca6bf3687587f018574b8785-ai7u7l8owv.jpeg" class="d-block w-100" /></div>
            <div class="carousel-item">
               <img src="https://asset.kompas.com/crops/AKB8IFS24D_e_HTuAlARPKzN4T8=/0x19:786x542/750x500/data/photo/2020/04/29/5ea9821e834b6.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
               <img src="https://pesanggrahanbatu.files.wordpress.com/2011/08/cimg00001.jpg" class="d-block w-100" alt="..." />
            </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
         </button>
      </div>
   </div>
</template>

<script>
   import NavbarVue from "../../components/Navbar.vue";
   export default {
      components: {
         NavbarVue,
      },
   };
</script>
