<script setup>
import { getStore } from '@/assets/store.js'
const store = getStore()
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
console.log("lang: " + store.lang);

function langClicked(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

</script>



<template>
              <div id = "languageSelector">
                  <span id = "lang-0" @click="langClicked(0)" :style="{ borderWidth: store.lang == 0 ? '3px' : '0px' }">
                      <i class="fi fi-gb"></i>
                  </span>
                  <span id = "lang-1" @click="langClicked(1)" :style="{ borderWidth: store.lang == 1 ? '3px' : '0px' }">
                      <i class="fi fi-pl"></i>
                  </span>                                        
              </div>
</template>