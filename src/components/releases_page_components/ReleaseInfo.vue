<script setup>
import { getStore } from '@/assets/store.js'
import { LinkGetManager } from '@/assets/Utils.js';
import EventHandler from '@/assets/EventHandler';


// store.$patch({ releasesHTML: "" })

</script>

<template>
    <span v-if="display">
        <section class="py-5" id = "productParent">
        <br>
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" id = "releaseImage" :src="release.imagePath" alt="..." style = "aspect-ratio: 1/1;" /></div>
                <div class="col-md-6">
                    <div class="small mb-1" id = "releaseDate">{{ release.date + " • " }} <span v-html = "release.releaseType"></span></div>
                    <h1 class="display-5 fw-bolder" id = "releaseTitle">{{ release.title}}  </h1>
                    <!-- <div class="fs-5 mb-5" style = "display: none;">
                        <span class="text-decoration-line-through">$45.00</span>
                        <span>$40.00</span>
                    </div> -->
                    <p class="lead" id = "releaseDescription" v-html = "release.description"></p>
                    <div class="d-flex">

                        <a class="btn btn-outline-danger btn-social mx-1" href="https://www.youtube.com/@MarshallsOfVictory" id = "releaseYoutube"><i class="fab fa-fw fa fa-brands fa-youtube"></i></a>
                        <a class="btn btn-outline-success btn-social mx-1" href="https://www.youtube.com/@MarshallsOfVictory" id = "releaseSpotify"><i class="fab fa-fw fa fa-brands fa-spotify"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- (k != "" ? "<b>" + k + "</b>: " : "") + v + "<br>" -->
    <div class="container px-4 px-lg-5 my-5" id = "releaseCredits">
        {{ console.log("CREDITS KEYS") }}
        <span v-for = "[k, v] of Object.entries(release.credits)">
            {{ console.log(`${k}`) }}
            <span v-if = 'k != ""'>
                <b><span v-html = "k"></span>: </b>{{ v }}
            </span> 
            <span v-else>
                {{ v }}
            </span>
            <br>
                
        </span>
        {{ EventHandler.emit("refreshTranslator") }}

    </div>
    </section>
</span>

</template>
<script>
export default {

  data() {
    return {
        display: false,
        release: null
    };
  },

  methods: {
    checkValidation() {
        console.log("VALIDATION PROCESSSSSSSSSSSSSSSSSSSSS")
        let id = LinkGetManager.getParameter("releaseID")
        let store = getStore()
        console.log(store.data.releases)
        if (id != null && store.data.releases.find(x => x.releaseID == id) != undefined) {
            this.display = true;
            this.release = store.data.releases.find(x => x.releaseID == id)
            console.warn("DISPLAYING RELEASE INFO")
            
        } else {
            this.display = false;
            console.warn("WRONG ID PROVIDED")
        }
        
    }
  },
  created() {

    console.log("Creating release: " + this.title);

  },

  mounted() {
    EventHandler.on('response', (e) => {
        // EventHandler.off("response");
        if (e.success) {
            if (e.data[0].visible) {
                this.checkValidation()
            }
        }
    })
    
    
    EventHandler.on('routeChanged', () => {
        console.log("RECIEVED SIGNAL");
        this.checkValidation();
    });
  },
  unmounted() {
    EventHandler.off('routeChanged'); // Clean up the listener
    EventHandler.off("response");
  },

}

</script>