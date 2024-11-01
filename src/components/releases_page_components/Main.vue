<script setup>
// import "@/assets/releases_scripts.js"
import { getStore } from '@/assets/store.js'
import axios from 'axios';

import ReleaseItem from './ReleaseItem.vue'
import ReleaseInfo from './ReleaseInfo.vue'
import Nav from '../Nav.vue'
import Footer from '../Footer.vue'

var store = getStore()

if (store.data.releases == undefined) store.$patch({ data: { releases: [] } });
// store.$patch({ releasesHTML: "" })
</script>

<!-- :style="{ borderWidth: store.lang == 0 ? '3px' : '0px' }" -->

<template>     
    <Nav />
    <ReleaseInfo />
    <!-- <section class="py-5" id = "productParent" style = "display: none;">
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
    </section> -->

    <!-- Related items section-->
    <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
            <h2 class="fw-bolder mb-4"><br><span en = 'All Releases' pl = 'Wszystkie wydania'></span></h2>
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left" id = "allReleases" v-if = "pageLoaded">
                <span v-for = "release in store.data.releases">
                    <ReleaseItem
                        :releaseID="release.releaseID"
                        :title="release.title"
                        :imageSrc="release.imagePath"
                        :type="release.releaseType"
                        :releaseDate="release.date"
                    />

                </span>
                
            </div>
        </div>

    </section>
    <!-- Core theme JS-->
    
    <Footer />
</template>
<script>
export default {

  data() {
    return {
        html: "",
        pageLoaded: false,
        releases: [],
        message: ""
      
    };
  },

  methods: {
    async getReleases() {
      try {
        const response = await axios.post('/assets/php/releases/getReleases.php', {
          message: this.message
        });

        console.log(response.data);
        console.log(this.message)
      } catch (error) {
        console.error(error);
      }
    }
  },

  created() {
    var store = getStore()

    this.getReleases();
    

    store.data.releases = [
        {releaseID : "around-you", title: "Around You", date: "16-10-2024", releaseType: `<span en = "Single" pl = "Singiel"></span>`, imagePath: "https://upload.wikimedia.org/wikipedia/en/b/b0/Lynyrdskynyrd.jpg", description: `
            <span en = "The first single of a young rock and roll band from Kraków, Poland - Marshalls of Victory. " pl = "Pierwszy singiel rock and rollowego zespołu z Krakowa - Marshalls of Victory."></span>
            `, spotifyLink: "#", youtubeLink: "#", credits: 
            {
                "<span en = 'Guitars' pl = 'Gitary'></span>": "Patryk Sławiński, Alex Nemertsalov",
                "<span en = 'Vocals' pl = 'Wokale'></span>": "Jan Krawczyk, Alex Nemertsalov",
                "<span en = 'Bass guitar' pl = 'Gitara basowa'></span>": "Jan Krawczyk",
                "<span en = 'Drums' pl = 'Perkusja'></span>": "Antoni Otwinowski",
                "": "",
                "<span en = 'Composer' pl = 'Kompozytor'></span>": "Patryk Sławiński",
                "<span en = 'Lyrics' pl = 'Tekst'></span>": "Jan Krawczyk",
                "<span en = 'Produced by' pl = 'Wyprodukowane przez'></span>": "Sebastian Ciotti",
                "<span en = 'Co-producer' pl = 'Współproducent'></span>": "Patryk Sławiński",
            }
        },

        {releaseID : "made-in-vietnam", title: "Made In Vietnam", date: "30-10-2024", releaseType: `<span en = "Single" pl = "Singiel"></span>`,  imagePath: "/assets/images/madeinvietnam.jfif", description: "The second single of a young rock and roll band from Kraków, Poland - Marshalls of Victory.", spotifyLink: "#", youtubeLink: "#", credits:
        {
            "Guitars": "Patryk Sławiński, Alex Nemertsalov",
            "Vocals": "Jan Krawczyk, Alex Nemertsalov",
            "Bass guitar": "Jan Krawczyk",
            "Drums": "Antoni Otwinowski",
            "": "",
            "Composer": "Patryk Sławiński",
            "Lyrics": "Jan Krawczyk, Alex Nemertsalov",
            "Produced by": "Sebastian Ciotti",
            "Co-producers": "Patryk Sławiński",
        }}

        
    ]
    this.pageLoaded = true;

  }
}



</script>