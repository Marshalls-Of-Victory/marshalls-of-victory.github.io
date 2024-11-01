<script setup>
import "@/assets/releases_scripts.js"
import { getStore } from '@/assets/store.js'


// store.$patch({ releasesHTML: "" })

</script>

<template>     
    <section class="py-5" id = "productParent" style = "display: none;">
        <br>
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" id = "releaseImage" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." style = "aspect-ratio: 1/1;" /></div>
                <div class="col-md-6">
                    <div class="small mb-1" id = "releaseDate">0000</div>
                    <h1 class="display-5 fw-bolder" id = "releaseTitle"></h1>
                    <div class="fs-5 mb-5" style = "display: none;">
                        <span class="text-decoration-line-through">$45.00</span>
                        <span>$40.00</span>
                    </div>
                    <p class="lead" id = "releaseDescription"></p>
                    <div class="d-flex">

                        <a class="btn btn-outline-danger btn-social mx-1" href="https://www.youtube.com/@MarshallsOfVictory" id = "releaseYoutube"><i class="fab fa-fw fa fa-brands fa-youtube"></i></a>
                        <a class="btn btn-outline-success btn-social mx-1" href="https://www.youtube.com/@MarshallsOfVictory" id = "releaseSpotify"><i class="fab fa-fw fa fa-brands fa-spotify"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
    <div class="container px-4 px-lg-5 my-5" id = "releaseCredits">


    </div>
    </section>

    <!-- Related items section-->
    <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
            <h2 class="fw-bolder mb-4"><br><span en = 'All Releases' pl = 'Wszystkie wydania'></span></h2>
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left" id = "allReleases" v-html = "html">
                
            </div>
        </div>

    </section>
    <!-- Core theme JS-->
    

</template>
<script>
export default {

  data() {
    return {
      html: ""
    };
  },

  created() {
    
    var store = getStore()
    this.html = store.releasesHTML;
  }
}

</script>