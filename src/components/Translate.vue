<script setup>
// import { getStore } from '@/assets/store.js'

import { getStore } from '@/assets/store.js'
const store = getStore()
// store.$patch({ releasesHTML: "" })
// import EventHandler from '@/assets/EventHandler';
</script>

<template>     
  {{ store.lang == 0 ? en : pl }}
</template>
<script>
export default {

  data() {
    return {
      
    };
  },


  created() {
    
  },

  props: {
    pl: {
        type: String,
        default: ""
    },
    en: {
        type: String,
        default: ""
    },
  }

}

</script>