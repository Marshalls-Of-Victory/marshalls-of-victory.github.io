import { getStore } from '@/assets/store.js'

const store = getStore()



if (typeof Releases == "undefined") {
    var Releases = [];
}
Releases = [
    {title: "Around You", date: "16-10-2024", releaseType: `<span en = "Single" pl = "Singiel"></span>`, imagePath: "https://upload.wikimedia.org/wikipedia/en/b/b0/Lynyrdskynyrd.jpg", description: `
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

    {title: "Made In Vietnam", date: "30-10-2024", releaseType: `<span en = "Single" pl = "Singiel"></span>`,  imagePath: "/assets/images/madeinvietnam.jfif", description: "The second single of a young rock and roll band from Kraków, Poland - Marshalls of Victory.", spotifyLink: "#", youtubeLink: "#", credits:
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


function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


let id = findGetParameter("releaseID")
if (id) {
    let idBack = id;
    id = Number(id)
    if (id || idBack == "0") {
        id = Math.floor(id);
        if (id >= 0 && id < Releases.length) {
            console.log("Correct ID Provided: " + id)
            displayRelease(id)
        } else {
            console.log("ID out of bounds " + id)
        }
    } else {
        console.log("ID is not a number " + id)
    }
} else {
    console.log("ID not provided " + id)
}

function displayRelease(id) {
    document.getElementById("productParent").style.display = "block";
    let rel = Releases[id]
    document.getElementById("releaseDate").innerHTML = rel.date + " • " + rel.releaseType
    document.getElementById("releaseTitle").innerHTML = rel.title
    document.getElementById("releaseDescription").innerHTML = rel.description
    document.getElementById("releaseImage").setAttribute("src", rel.imagePath)
    document.getElementById("releaseSpotify").setAttribute("href", rel.spotifyLink)
    document.getElementById("releaseYoutube").setAttribute("href", rel.youtubeLink)

    let content = ""
    for (const [k, v] of Object.entries(rel.credits)) {
        content += (k != "" ? "<b>" + k + "</b>: " : "") + v + "<br>"
    }
    document.getElementById("releaseCredits").innerHTML = content;

}


function displayAllReleasesSection() {
    for (let i = 0; i < Releases.length; i++) {
        let rel = Releases[i]
        let path = window.location.pathname;
        let page = path.split("/").pop();
        let link = page + "?releaseID=" + i;

        store.$patch({ releasesHTML: store.releasesHTML + `


        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="`+rel.imagePath+`" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">` + rel.title + `</h5>
                        <!-- Product reviews-->
                        <div class="d-flex justify-content-center small mb-2">
                            ` + (rel.date.split('-')[2])+ " • " + rel.releaseType + `
                        </div>
                        <!-- Product price-->
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><RouterLink class="btn btn-outline-dark mt-auto" to="/"><span en = 'Show more' pl = 'Pokaż więcej'></span></RouterLink></div>
                </div>
            </div>
        </div>

`});

    
    }
}

displayAllReleasesSection()
console.log("ReleasesHTML: " + store.releasesHTML);