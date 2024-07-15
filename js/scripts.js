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

    pageText = [
        { //English
            "Section_1_Title" : "Photos",
            "Section_2_Title" : "Bio",
            "Section_3_Title" : "Contact us",
            "Section_4_Title" : "Latest release",
            "Section_5_Title" : "Upcoming shows",
            //
            "latest_release_title" : "Test release",
            "latest_release_desc" : "Single · 2024",
            "bio_1" : "We are Marshalls of Victory, a young band from Krakow, Poland that was formed at the beginning of March 2024. We play many genres of music, such as blues rock, hardrock, punk, punkrock, metal.",
            "bio_2" : "Band members: <br> - Patryk Sławiński - Lead guitar <br> - Jan Krawczyk - Bass guitar and vocals <br> - Alex Nemertsalov - Rhythm guitar <br> - Antek Otwinowski - drums",
            //
            "view_more" : "View more",
            "send_message" : "Send a message",
            "input_name" : "Name",
            "input_message" : "Message",
            "footer_location_label" : "Location",
            "footer_location" : "Krakow, Poland",
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
            "Section_4_Title" : "Ostatnie wydanie",
            "Section_5_Title" : "Nadchodzące koncerty",
            //
            "latest_release_title" : "Test release",
            "latest_release_desc" : "Singiel · 2024",
            "bio_1" : "Nazywamy się Marshalls of Victory, jesteśmy młodym zespołem z Krakowa, który powstał na początku marca 2024 roku. Gramy wiele gatunków muzyki, takich jak od blues rock, hardrock, punk, punkrock, metal.",
            "bio_2" : "Skład zespołu: <br> - Patryk Sławiński - Gitara prowadząca <br> - Jan Krawczyk - Gitara basowa oraz wokal <br> - Alex Nemertsalov - Gitara rytmiczna oraz wokal wspierający <br> - Antek Otwinowski - perkusja",
            //
            "view_more" : "Zobacz więcej",
            "send_message" : "Wyślij",
            "input_name" : "Imię i nazwisko",
            "input_message" : "Wiadomość",
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

    // Ensure localStorage lang value is set
    if (localStorage.getItem("lang") == "" || localStorage.getItem("lang") == undefined) {
        localStorage.setItem("lang", 0);
    }

    function refreshFlags() {
        for (let i = 0; i < 2; i++) {
            const flagElement = document.getElementById("lang-"+i);
            if (flagElement) {
                if (localStorage.getItem("lang") == i) {
                    flagElement.style.borderWidth = "3px";
                } else {
                    flagElement.style.borderWidth = "0px";
                }
            }
        }
    }

    window.langClicked = function(lang) {
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
                if (elms[i].getAttribute("placeholder") == k) {
                    elms[i].setAttribute("placeholder", v);
                }
            }
        }
    }

    refreshFlags();
    translate();
});
