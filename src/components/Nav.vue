<script setup>
import { getStore } from '@/assets/store.js'
import TranslatorLangSelector from './TranslatorLangSelector.vue'
const store = getStore()
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
console.log("lang: " + store.lang);
</script>



<template>
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
          <!-- Navbar logo for large screens -->
          <a class="navbar-brand d-flex justify-content-start d-none d-lg-flex" href="/index.html#page-top">
              <img src="@/assets/img/mov-text-logo-white.png" alt="Marshalls of Victory - White Text Logo" style="width: 15vw; height: auto;">
          </a>
          <!-- Navbar logo for small screens -->
          <a class="navbar-brand d-flex justify-content-start d-block d-lg-none" href="#page-top">
              <img src="@/assets/img/mov-text-logo-white-short.png" alt="Marshalls of Victory - White Text Logo" style="width: 15vw; height: auto;">
          </a>

          <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item mx-0 mx-lg-1">
                    <RouterLink class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" to="/#about"><span class = "Section_2_Title"></span></RouterLink></li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <RouterLink class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" to="/#portfolio"><span class = "Section_1_Title"></span></RouterLink></li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <RouterLink class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" to="/#contact"><span class = "Section_3_Title"></span></RouterLink></li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <RouterLink class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" to="/links/"><span class = "Section_4_Title"></span></RouterLink></li>

                  <li class="nav-item mx-0 mx-lg-1" style="display: none;"><a class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" href="/releases/index.html"><span class = "Section_5_Title"></span></a></li>
              </ul>

              <TranslatorLangSelector />
          </div>
      </div>
  </nav>
  <div @route-changed="gotit" />
</template>

<script>

export default {
  methods: {
    gotit() {
      console.log('Navbar: przeladowano strone');
    },
  },
};
</script>

<!-- <style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
