<script setup>

    import EventHandler from '@/assets/EventHandler';

</script>

<template>

</template>

<script>


if (pageText == null) {
    var pageText = [];
}

pageText = [
    { //English
        "Section_1_Title" : "Photos",
        "Section_2_Title" : "Bio",
        "Section_3_Title" : "Contact us",
        "Section_4_Title" : "Links",
        "Section_5_Title" : "Discography",
        "view_more" : "View more",
        "send_message" : "Send a message",
        "input_name" : "Name",
        "input_message" : "Message",
        "bio_1" : "We are Marshalls of Victory, a young band from Krakow, Poland that was formed at the beginning of March 2024. We play many genres of music, such as blues rock, hardrock, punkrock & metal.",
        "bio_2" : "Band members: <br> - Patryk Sławiński - Lead guitar <br> - Jan Krawczyk - Bass guitar and vocals <br> - Alex Nemertsalov - Rhythm guitar <br> - Antek Otwinowski - drums",
        "footer_location_label" : "Location",
        "footer_location" : "Kraków, Poland",
        "close_window" : "Close window",
        //
        "Photo_1_title" : "",
        "Photo_2_title" : "",
        "Photo_3_title" : "",
        "Photo_desc" : "Follow for more content: "
    },

    { //Polski
        "Section_1_Title" : "Zdjęcia",
        "Section_2_Title" : "Bio",
        "Section_3_Title" : "Skontaktuj się z nami",
        "Section_4_Title" : "Linki",
        "Section_5_Title" : "Dyskografia",
        "view_more" : "Zobacz więcej",
        "send_message" : "Wyślij",
        "input_name" : "Imię i nazwisko",
        "input_message" : "Wiadomość",
        "bio_1" : "Nazywamy się Marshalls of Victory, jesteśmy młodym zespołem z Krakowa, który powstał na początku marca 2024 roku. Gramy wiele gatunków muzyki, takich jak blues rock, hardrock, punkrock i metal.",
        "bio_2" : "Skład zespołu: <br> - Patryk Sławiński - Gitara prowadząca <br> - Jan Krawczyk - Gitara basowa oraz wokal <br> - Alex Nemertsalov - Gitara rytmiczna oraz wokal wspierający <br> - Antek Otwinowski - perkusja",
        "footer_location_label" : "Lokalizacja",
        "footer_location" : "Kraków, Polska",
        "close_window" : "Zamknij okno",
        //
        "Photo_1_title" : "",
        "Photo_2_title" : "",
        "Photo_3_title" : "",
        "Photo_desc" : "Obserwuj po więcej: "
    }
]


if (localStorage.getItem("lang") == "" || localStorage.getItem("lang") == undefined) {
    localStorage.setItem("lang", 0);
}

function refreshFlags() {
    for (let i = 0; i < 2; i++) {
        if (localStorage.getItem("lang") == i) {
            document.getElementById("lang-"+i).style.borderWidth = "3px";
        } else {
            document.getElementById("lang-"+i).style.borderWidth = "0px";
        }

    }
}


function langClicked(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

function translate() {
    console.log("TRANSLATING");
    let langPack = pageText[localStorage.getItem("lang")];
    for (const [k, v] of Object.entries(langPack)) {
        let elms = document.getElementsByClassName(k);
        for (let i = 0; i < elms.length; i++) {
            elms[i].innerHTML = v;

        }
        elms = [...document.getElementsByTagName("input"), ...document.getElementsByTagName("textarea")];
        for (let i = 0; i < elms.length; i++) {
            //console.log(elms[i].getAttribute("placeholder"));
            if (elms[i].getAttribute("placeholder") == k) {
                //console.log("found");
                elms[i].setAttribute("placeholder", v);
            }
        }
    }
}

let allowedAttributes = [
    "en", // - lang = 0
    "pl", // - lang = 1
]

// ############ TRANSLATOR PATCH 2.0 ############
function translate2() {
    let lang = Number(localStorage.getItem("lang"))

    let elms = document.getElementsByTagName("span");
    for (let elm of elms) {
        if (allowedAttributes[lang]) {
            if (typeof(lang) == "number") {
                let attribute = elm.getAttribute(allowedAttributes[lang])
                if (attribute) {
                    elm.innerHTML = attribute;
                    if (elm.getAttribute("placeholder"))
                    elm.setAttribute("placeholder", attribute)
                }
            }

        }

    }
}

// ############ TRANSLATOR PATCH 2.0 ############



export default {
    mounted() {
        console.log("Translator: starting...")
        EventHandler.on('refreshTranslator', () => {
            this.$nextTick(() => {
                translate();
                translate2();
            });
        });
    },
    unmounted() {
        EventHandler.off('refreshTranslator'); // Clean up the listener
    },
    watch: {
        // Watch for changes to the $route object
        '$route'(to, from) {
        // Code to execute when the route changes
        this.onRouteChange(to, from);
        },
    },
    methods: {
        onRouteChange(to, from) {
        console.log('Route changed from', from.path, 'to', to.path);
        // Add your logic here, e.g., fetching data based on the new route
        console.log("Route changed, reloading the translator...")
        // translate();
        
        // setTimeout(translate, 1000)

        this.$nextTick(() => {
            translate();
            translate2();
        });
        },
    },
};
</script>