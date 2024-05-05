window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


pageText = [
    { //English
        "Section_1_Title" : "Photos",
        "Section_2_Title" : "Bio",
        "Section_3_Title" : "Contact us",
        "view_more" : "View more",
        "send_message" : "Send a message",
        "input_name" : "Name",
        "input_message" : "Message",
        "bio_1" : "We are Marshalls of Victory, a young band from Krakow, Poland that was formed at the beginning of March 2024. We play many genres of music, such as blues rock, hardrock, punk, punkrock, metal.",
        "bio_2" : "Band members: <br> - Patryk Sławiński - Lead guitar <br> - Jan Krawczyk - Bass guitar and vocals <br> - Alex Nemertsalov - Rhythm guitar <br> - Antek Otwinowski - drums",
        "footer_location_label" : "Location",
        "footer_location" : "Krakow, Poland",
        //
        "Photo_1_title" : "Tearing the scene 🤘",
        "Photo_2_title" : "A walk in the park.. 👀",
        "Photo_3_title" : "Elvis Presley’s rock in Krakow 🇵🇱",
        "Photo_desc" : "Follow for more content: "
    },

    { //Polski
        "Section_1_Title" : "Zdjęcia",
        "Section_2_Title" : "Bio",
        "Section_3_Title" : "Skontaktuj się z nami",
        "view_more" : "Zobacz więcej",
        "send_message" : "Wyślij",
        "input_name" : "Imię i nazwisko",
        "input_message" : "Wiadomość",
        "bio_1" : "Nazywamy się Marshalls of Victory, jesteśmy młodym zespołem z Krakowa, który powstał na początku marca 2024 roku. Gramy wiele gatunków muzyki, takich jak od blues rock, hardrock, punk, punkrock, metal.",
        "bio_2" : "Skład zespołu: <br> - Patryk Sławiński - Gitara prowadząca <br> - Jan Krawczyk - Gitara basowa oraz wokal <br> - Alex Nemertsalov - Gitara rytmiczna oraz wokal wspierający <br> - Antek Otwinowski - perkusja",
        "footer_location_label" : "Lokalizacja",
        "footer_location" : "Kraków, Polska",
        //
        "Photo_1_title" : "Rozdzierając scenę 🤟",
        "Photo_2_title" : "Zwyczajny spacer.. 👀",
        "Photo_3_title" : "Kamień Elvisa Presleya w Krakowie 🇵🇱",
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

refreshFlags();


function langClicked(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

function translate() {
    let langPack = pageText[localStorage.getItem("lang")];
    for (const [k, v] of Object.entries(langPack)) {
        let elms = document.getElementsByClassName(k);
        for (let i = 0; i < elms.length; i++) {
            elms[i].innerHTML = v;

        }
        elms = [...document.getElementsByTagName("input"), ...document.getElementsByTagName("textarea")];
        for (let i = 0; i < elms.length; i++) {
            console.log(elms[i].getAttribute("placeholder"));
            if (elms[i].getAttribute("placeholder") == k) {
                console.log("found");
                elms[i].setAttribute("placeholder", v);
            }
        }
    }
}

translate()

