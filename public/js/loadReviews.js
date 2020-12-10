//Glide - Reviews aus db.json als object erstellen
window.onload = function(){
    fetch("http://localhost:4000/reviews/")
        .then((response) => response.json())
        .then((json) => generateReviews(json));

    function generateReviews(reviews) {
        var i = 0;
        let reviewUl = document.getElementById("reviews");

        for (let review of reviews) {
            
            //console.log(JSON.stringify(reviews));

            let reviewLi = document.createElement("li");
            reviewLi.setAttribute("class", "slider__frame glide__slide rounded-2xl border border-gray-500 backgroundReviews p-5");
            reviewLi.setAttribute("style", "width: 181.25px");

            let reviewUsername = document.createElement("p");
            reviewUsername.className = "text-xl font-bold";
            reviewUsername.innerHTML = review.username;
            reviewLi.appendChild(reviewUsername);

            let reviewDate = document.createElement("p");
            reviewDate.innerHTML = review.date;
            reviewLi.appendChild(reviewDate);

            let reviewRating = document.createElement("p");
            reviewRating.className = "mt-1";
            for (var x = 1; x <= 5; x++) {
                if (x <= review.rating) {
                    let starChecked = document.createElement("span");
                    starChecked.className = "fa fa-star checked mr-1";
                    reviewRating.insertBefore(starChecked, reviewRating.children[x]);
                }
                else {
                    let star = document.createElement("span");
                    star.className = "fa fa-star mr-1";
                    reviewRating.insertBefore(star, reviewRating.children[x]);
                }
            }
            reviewLi.appendChild(reviewRating);

            let reviewDescr = document.createElement("p");
            reviewDescr.className = "break-words mt-2 h-32 sm:h-48 md:h-40 lg:h-40 text-justify";
            reviewDescr.innerHTML = review.description;
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

        for (let i = 1; i <= reviews.length; i++) {
            bulletNumber = "=" + countBullet;
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
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        });

        glide.mount();
    }
            



};

// Ein neues Review hinzufügen
let newReview = [];
const addReview = (ev)=>{
    ev.preventDefault();
 
    let inputUsername = document.getElementById("username").value;
    let inputDesription = document.getElementById("description").value;

    if (inputUsername == "" && inputDesription == "") {
        document.getElementById("username").classList.remove("border-blue-300");
        document.getElementById("username").classList.add("border-red-400");
        document.getElementById("description").classList.remove("border-blue-300");
        document.getElementById("description").classList.add("border-red-400");
        alert("Bitte geben Sie einen Username und eine Beschreibung ein.");
        document.getElementById("username").classList.remove("border-red-400");
        document.getElementById("username").classList.add("border-blue-300");
        document.getElementById("username").classList.add("border-red-400");
        document.getElementById("description").classList.remove("border-red-400");
        document.getElementById("description").classList.add("border-blue-300");
        }
    else {
        if (inputUsername == "" || inputDesription == "") {
            if (inputUsername == "") {
                document.getElementById("username").classList.remove("border-blue-300");
                document.getElementById("username").classList.add("border-red-400");
                alert("Bitte geben Sie einen Username ein.");
                document.getElementById("username").classList.remove("border-red-400");
                document.getElementById("username").classList.add("border-blue-300");
            }
            if (inputDesription == "") {
                document.getElementById("description").classList.remove("border-blue-300");
                document.getElementById("description").classList.add("border-red-400");
                alert("Bitte geben Sie eine Beschreibung ein.");
                document.getElementById("description").classList.remove("border-red-400");
                document.getElementById("description").classList.add("border-blue-300");
            }
        }
        else {
            const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
            const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
            const dateObj = new Date();
            const month = monthNames[dateObj.getMonth()];
            const weekday = weekdays[dateObj.getDay()];
            const day = String(dateObj.getDate()).padStart(2, '0');
            const year = dateObj.getFullYear();
            const hours = dateObj.getHours();
            const minutes = dateObj.getMinutes()<10?'0':'' + dateObj.getMinutes();
            const outputDate = weekday + ', ' + day + '. ' + month + ' ' + year + ', ' + hours + ":" + minutes + " Uhr";
            console.log(outputDate)
            
            let rateElements = document.getElementsByName("rate");
            let rateScore = 1;       
                for(i = 0; i < rateElements.length; i++) { 
                    if(rateElements[i].checked) 
                        rateScore = rateElements[i].value;                
                }

            let review = {
                username: document.getElementById("username").value,
                date: outputDate,
                rating: rateScore,
                description: document.getElementById("description").value
            }
            newReview.push(review);
            // zum Anzeigen in Konsole
            console.log("Review: " + JSON.stringify(review)); 

            // http-request durchführen --> zum server schicken
            var request = new XMLHttpRequest();
            request.open("POST","http://localhost:4000/reviews/add");
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify(review));

            // Seite neu laden
            window.onbeforeunload = null;
            window.location.reload();

            //Form zurücksetzen
            document.querySelector("form").reset();
        }
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("submit").addEventListener("click", addReview);
});