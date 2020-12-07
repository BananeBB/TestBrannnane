//Scrollen ändert den Header        
window.onscroll = function() {
    var header = document.getElementById('header');
    var navTextDiv1 = document.getElementById('navTextDiv1');
    var navTextDiv2 = document.getElementById('navTextDiv2');
    var navTextDiv3 = document.getElementById('navTextDiv3');
    var navHoverDiv1 = document.getElementById('navHoverDiv1');
    var navHoverDiv2 = document.getElementById('navHoverDiv2');
    var navHoverDiv3 = document.getElementById('navHoverDiv3');
    var burgerButton = document.getElementById('burgerButton');
    var languageBtn = document.getElementById('languageBtn');
    if (window.scrollY > 5) {
        header.classList.remove("gradient");
        header.classList.add("bg-blue-100");

        navTextDiv1.classList.remove("text-white");
        navTextDiv1.classList.add("text-gray-800");
        navTextDiv2.classList.remove("text-white");
        navTextDiv2.classList.add("text-gray-800");
        navTextDiv3.classList.remove("text-white");
        navTextDiv3.classList.add("text-gray-800");
        if (navHoverDiv1.classList.contains("border-white")) {
            navHoverDiv1.classList.remove("border-white")
            navHoverDiv1.classList.add("border-gray-800")
        }
        if (navHoverDiv2.classList.contains("border-white")) {
            navHoverDiv2.classList.remove("border-white")
            navHoverDiv2.classList.add("border-gray-800")
        }
        if (navHoverDiv3.classList.contains("border-white")) {
            navHoverDiv3.classList.remove("border-white")
            navHoverDiv3.classList.add("border-gray-800")
        }
        burgerButton.classList.remove("text-white")
        burgerButton.classList.add("text-gray-800")

        languageBtn.classList.remove("text-white");
        languageBtn.classList.add("text-gray-800");
    } else {
        header.classList.remove("bg-blue-100");
        header.classList.add("gradient");

        navTextDiv1.classList.remove("text-gray-800");
        navTextDiv1.classList.add("text-white");
        navTextDiv2.classList.remove("text-gray-800");
        navTextDiv2.classList.add("text-white");
        navTextDiv3.classList.remove("text-gray-800");
        navTextDiv3.classList.add("text-white");

        if (navHoverDiv1.classList.contains("border-gray-800")) {
            navHoverDiv1.classList.remove("border-gray-800")
            navHoverDiv1.classList.add("border-white")
        }
        if (navHoverDiv2.classList.contains("border-gray-800")) {
            navHoverDiv2.classList.remove("border-gray-800")
            navHoverDiv2.classList.add("border-white")
        }
        if (navHoverDiv3.classList.contains("border-gray-800")) {
            navHoverDiv3.classList.remove("border-gray-800")
            navHoverDiv3.classList.add("border-white")
        }

        burgerButton.classList.remove("text-gray-800")
        burgerButton.classList.add("textwhite")

        languageBtn.classList.remove("text-gray-800");
        languageBtn.classList.add("text-white");
    }
}


//Matomo

var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
    var u = "https://brannnane.matomo.cloud/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "3"]);
    var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.src = "//cdn.matomo.cloud/brannnane.matomo.cloud/matomo.js";
    s.parentNode.insertBefore(g, s);
})();

 




// Sprachauswahl
const openLanguageMenu = (ev)=>{
    ev.preventDefault();

    var languageDropdown = document.getElementById("languageDropdown")
    var navMenuDiv = document.getElementById("navDivFlex");
    if (languageDropdown.classList.contains("hidden")) {
        languageDropdown.classList.remove("hidden")
        navMenuDiv.class.classList.add("hidden")
    }
    else {
        languageDropdown.classList.add("hidden")
    }

    // zum Anzeigen in Konsole
    console.log(JSON.stringify(newReview));
    // lokal speichern

}
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("languageBtn").addEventListener("click", openLanguageMenu);
});
        
        