//Glide - Reviews aus db.json als object erstellen
window.onload = function(){
    fetch("http://localhost:4000/reviews/")
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
        console.log(reviews.length)
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
            description: document.getElementById("description").value
        }
        newReview.push(review);
        // zum Anzeigen in Konsole
        console.log(JSON.stringify(newReview));

        // http-request durchführen --> zum server schicken
        var request = new XMLHttpRequest();
        request.open("POST","http://localhost:4000/reviews/add");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(review));
        console.log("Review: " + JSON.stringify(review));

    


        //Form zurücksetzen
        document.querySelector("form").reset();

        
        // lokal speichern

    }
    document.addEventListener("DOMContentLoaded", ()=>{
        document.getElementById("submit").addEventListener("click", addReview);
    });

};