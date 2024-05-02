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
        "Section_3_Title" : "Contact us"
    },

    { //Polski
        "Section_1_Title" : "Zdjęcia",
        "Section_2_Title" : "Bio",
        "Section_3_Title" : "Skontaktuj się z nami"
    }
]


if (localStorage.getItem("lang") == "" || localStorage.getItem("lang") == undefined) {
    localStorage.setItem("lang", 0);
}

console.log("język: "  + localStorage.getItem("lang"));
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
    console.log("lang: " + lang)
    location.reload();
}

function translate() {
    let langPack = pageText[localStorage.getItem("lang")];
    for (const [k, v] of Object.entries(langPack)) {
        console.log(k + ": " + v);
        let elms = document.getElementsByClassName(k);
        for (let i = 0; i < elms.length; i++) {
            elms[i].innerHTML = v;
        }
    }
}

translate()

