<!-- @format -->

<template>
   <div class="container my-5">
      <h2 class="text-center">Register</h2>
      <form>
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">NIK</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>
         <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
         </div>
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Status Pernikahan</label>
            <select class="form-select" aria-label="Default select example">
               <option value="1">Lajang</option>
               <option value="2">Sudah Menikah</option>
            </select>
         </div>

         <div class="my-4">Sudah punya akun? <routerLink :to="{ name: 'login' }">Login</routerLink></div>
         <button type="submit" class="btn btn-primary">Register</button>
      </form>
   </div>
</template>

<script>
   export default {};
</script>
