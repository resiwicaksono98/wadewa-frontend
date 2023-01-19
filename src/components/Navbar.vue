<!-- @format -->

<template>
   <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container container-fluid gap-4">
         <a class="navbar-brand" href="#">Wadewa</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
               <li class="nav-item">
                  <routerLink class="nav-link active" aria-current="page" :to="{ name: 'home.index' }">Beranda</routerLink>
               </li>
               <li class="nav-item">
                  <routerLink class="nav-link" :to="{ name: 'news.index' }">Berita</routerLink>
               </li>
               <li class="nav-item">
                  <routerLink class="nav-link" :to="{ name: 'profile.index' }">Profil</routerLink>
               </li>

               <li class="nav-item">
                  <routerLink class="nav-link" :to="{ name: 'service.index' }">Pelayanan</routerLink>
               </li>
            </ul>
            <div class="d-flex align-items-center gap-3">
               <div class="bg-success py-2 px-2 rounded">
                  <routerLink class="text-white text-decoration-none" :to="{ name: 'dashboard.index' }">Dashboard</routerLink>
               </div>
               <button class="btn btn-primary">Logout</button>
            </div>
         </div>
      </div>
   </nav>
</template>

<script>
   export default {};
</script>
