//Scrollen ändert den Header        
window.onscroll = function() {
    var header = document.getElementById('header');
    var navAction1 = document.getElementById('navAction1');
    var navAction2 = document.getElementById('navAction2');
    if (window.scrollY > 5) {
        header.classList.remove("gradient");
        header.classList.add("bg-white");
        navAction1.classList.remove("hover:border-white");
        navAction1.classList.add("hover:border-black");
    } else {
        header.classList.remove("bg-white");
        header.classList.add("gradient");
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

 

//Glide - Reviews aus db.json als object erstellen

fetch("https://my-json-server.typicode.com/BananeBB/TestBrannnane/reviews/")
    .then((response) => response.json())
    .then((json) => generateReviews(json));

function generateReviews(reviews) {
    var i = 0;
    let reviewUl = document.getElementById("reviews");

    for (let review of reviews) {
        
        console.log(JSON.stringify(reviews));

        let reviewLi = document.createElement("li");
        reviewLi.setAttribute("class", "slider__frame glide__slide rounded-3xl border-2 border-gray-300 bg-gray-100 p-5");
        reviewLi.setAttribute("style", "width: 181.25px");

        let reviewID = document.createElement("p");
        reviewID.className = "";
        reviewID.innerHTML = review.id;
        reviewLi.appendChild(reviewID);

        let reviewUsername = document.createElement("p");
        reviewUsername.className = "text-lg font-bold";
        reviewUsername.innerHTML = review.username;
        reviewLi.appendChild(reviewUsername);

        let reviewDate = document.createElement("p");
        reviewDate.className = "";
        reviewDate.innerHTML = review.date;
        reviewLi.appendChild(reviewDate);

        let reviewRating = document.createElement("p");
        for (var x = 1; x <= 5; x++) {
            if (x <= review.rating) {
                let starChecked = document.createElement("span");
                starChecked.className = "fa fa-star checked";
                reviewRating.insertBefore(starChecked, reviewRating.children[x]);
            }
            else {
                let star = document.createElement("span");
                star.className = "fa fa-star";
                reviewRating.insertBefore(star, reviewRating.children[x]);
            }
        }
        reviewLi.appendChild(reviewRating);

        let reviewDescr = document.createElement("p");
        reviewDescr.className = "mt-3";
        reviewDescr.innerHTML = review.text;
        reviewLi.appendChild(reviewDescr);

        reviewUl.insertBefore(reviewLi, reviewUl.children[i]);
        i++;
    }
    //generateReviewsClones(reviews)
    generateBullets(reviews)

    mountGlide();  
}

/*
function generateReviewsClones(reviews) {
    var i = 0;
    let reviewUl = document.getElementById("reviews");

    for (let review of reviews) {

        let reviewLi = document.createElement("li");
        reviewLi.setAttribute("class", "slider__frame glide__slide glide__slide--clone rounded-3xl border-2 border-gray-300 bg-gray-100 p-5");
        reviewLi.setAttribute("style", "width: 181.25px");

        let reviewID = document.createElement("p");
        reviewID.className = "";
        reviewID.innerHTML = review.id;
        reviewLi.appendChild(reviewID);

        let reviewUsername = document.createElement("p");
        reviewUsername.className = "text-lg font-bold";
        reviewUsername.innerHTML = review.username;
        reviewLi.appendChild(reviewUsername);

        let reviewDate = document.createElement("p");
        reviewDate.className = "";
        reviewDate.innerHTML = review.date;
        reviewLi.appendChild(reviewDate);

        let reviewRating = document.createElement("p");
        for (var x = 1; x <= 5; x++) {
            if (x <= review.rating) {
                let starChecked = document.createElement("span");
                starChecked.className = "fa fa-star checked";
                reviewRating.insertBefore(starChecked, reviewRating.children[x]);
            }
            else {
                let star = document.createElement("span");
                star.className = "fa fa-star";
                reviewRating.insertBefore(star, reviewRating.children[x]);
            }
        }
        reviewLi.appendChild(reviewRating);

        let reviewDescr = document.createElement("p");
        reviewDescr.className = "mt-3";
        reviewDescr.innerHTML = review.text;
        reviewLi.appendChild(reviewDescr);

        reviewUl.insertBefore(reviewLi, reviewUl.children[i]);
        i++;
    }
}*/

function generateBullets(reviews) {
    var countBullet = 0
    let reviewBullets = document.getElementById("bullets")
    for (let review of reviews) {
        bulletNumber = "=" + countBullet
        let bullet = document.createElement("button")
        if (countBullet == 0) {
            bullet.setAttribute("class", "slider__bullet glide__bullet glide__bullet--active")
            bullet.setAttribute("data-glide-dir", bulletNumber)
        }
        else {
            bullet.setAttribute("class", "slider__bullet glide__bullet")
            bullet.setAttribute("data-glide-dir", bulletNumber)
        }
        reviewBullets.insertBefore(bullet, reviewBullets.children[countBullet])
        countBullet++;
    }
}

function mountGlide() {

    var glide = new Glide("#intro", {
        type: "carousel",
        autoplay: 2000,
        hoverpause: true,
        perView: 3,
        focusAt: "center",
        gap: 30,
        breakpoints: {
            800: {
                perView: 2,
            },
            480: {
                perView: 1,
            },
        },
    });

    glide.mount();
}
        

// Ein neues Review hinzufügen
let newReview = [];
const addReview = (ev)=>{
    ev.preventDefault();
    let review = {
        username: document.getElementById("username").value,
        rating: document.getElementById("rating").value,
        text: document.getElementById("description").value
    }
    newReview.push(review);
    document.querySelector("form").reset();

    // zum Anzeigen in Konsole
    console.log(JSON.stringify(newReview));
    // lokal speichern

}
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("submit").addEventListener("click", addReview);
});
        
        