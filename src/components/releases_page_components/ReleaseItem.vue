<script setup>
// import { getStore } from '@/assets/store.js'


// store.$patch({ releasesHTML: "" })
// import EventHandler from '@/assets/EventHandler';
</script>

<template>     
        <div class="col mb-5" style = "height: 100%;">
            <div class="card" id = "productcard">
                <!-- Product image-->
                <span v-if = "upcoming">
                  <span class="badge m-1 bg-danger" style = "position: absolute; z-index: 999;" pl = "Premiera wkrótce" en = "Upcoming release"></span>
                </span>
                
                <img class="card-img-top" :src="imageSrc" alt="..." :style = "'filter: brightness('+ (upcoming ? 50 : 100) +'%);'"/>
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">{{ title }}</h5>
                        <!-- Product reviews-->
                        <div class="d-flex justify-content-center small mb-2">
                            {{ releaseDate.split('-')[2]+ " • "}} 
                            <span v-html = "type" style = "margin-left: 3px;"></span>
                        </div>
                        <!-- Product price-->
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><RouterLink
                        class="btn btn-outline-dark mt-auto"
                        :to = "`/releases?releaseID=${releaseID}#productParent`"
                    
                    
                        ><span en = 'Show more' pl = 'Pokaż więcej'></span></RouterLink></div>
                </div>
            </div>
        </div>
</template>
<script>
export default {

  data() {
    return {
      html: "<span en = 'Show more' pl = 'Pokaż więcej'></span>"
    };
  },
  computed: {
    link() {
      return `/releases?releaseID=`+this.releaseID
    }
  },

  created() {
    
    // var store = getStore()
    // this.html = store.releasesHTML;
    console.log("Creating release: " + this.title);
  },

  props: {
    releaseID: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: "Example title"
    },
    imageSrc: {
        type: String,
        default: "https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
    },
    type: {
        type: String,
        default: "Single"
    },
    releaseDate: {
        type: String,
        default: "22-11-2024"
    },
    upcoming: {
      type: Boolean,
      default: false
    }
  }

}

</script>

<style>

#productcard{
  min-height: 100%;
}

</style>