//THIS SCRIPT REQUIRES `translator_v1.0.js` FOR LANGUAGE SWITCHING TO WORK

let allowedAttributes = [
    "en", // - lang = 0
    "pl", // - lang = 1
]

export function translate_2() {
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

translate_2()
