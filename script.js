// Add the movies to the page for browsing
function make_ui(movies) {
    // Add a card for every movie
    movies.forEach(function (movie) {
        var stringified_movie = JSON.stringify(movie).replace(/\"/g, "'");
        console.log(stringified_movie);
        console.log(movie.genre);
        var cards = document.querySelector("." + movie.genre);
        cards.innerHTML += "<div class='card'><div class='card-img' ><img  src='" + movie.poster + "'></div><div class='card-title' data-movie=\"" + stringified_movie + "\" data-action='watch'><h3 >" + movie.title + "</h3></div><div class='card-display'><p data-movie='" + movie.id + "' data-action='learn'><a href='#popup'>?</a></p><p data-movie=\"" + stringified_movie + "\" data-action='watch'>▶</p><p data-action='favorite' data-movie='" + movie.id + "' data-favorited='false'>☆</p></div></div>";
    });
    // MAYBE: add tabs for genres and a tab for favorites.
    // MAYBE: add sorting (if not tabs) and a way to quickly grab favorites
    make_listeners();
}

function move_right(e) {
    var style = window.getComputedStyle(e);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    e.style.transform = "translateX(calc(" + matrix.m41 + " - 1px) )"
}

// Create click listeners for the "watch", "learn", and "play" buttons.
function make_listeners() {
    // get buttons
    var genre_tabs = document.querySelectorAll(".film_nav h3");
    console.log(genre_tabs);
    var learnbuttons = document.querySelectorAll("[data-action='learn']");
    var watchbuttons = document.querySelectorAll("[data-action='watch']");
    var favoritebuttons = document.querySelectorAll("[data-action='favorite']");



    //set up genre tabs


    //set up learn buttons
    for (var i = 0; i < learnbuttons.length; i++) {
        if (!learnbuttons[i].dataset.listener) {
            learnbuttons[i].addEventListener('click', function (event) {
                learn(this.dataset.movie);
            }, false);
            learnbuttons[i].dataset.listener = true;
        }
    }
    //set up watch buttons
    for (var i = 0; i < watchbuttons.length; i++) {
        if (!watchbuttons[i].dataset.listener) {
            watchbuttons[i].addEventListener('click', function (event) {
                play_movie(this.dataset.movie); //stringified movie object
            }, false);
            watchbuttons[i].dataset.listener = true;
        }
    }
    //set up favorite buttons (tricky logic)
    for (var i = 0; i < favoritebuttons.length; i++) {
        var moviename = favoritebuttons[i].dataset.movie;
        if (localStorage.getItem(moviename) && typeof (Storage !== "undefined")) {
            console.log(localStorage.getItem(moviename))
            favoritebuttons[i].dataset.favorited = localStorage.getItem(moviename);
            if (favoritebuttons[i].dataset.favorited === "true") {
                favoritebuttons[i].innerHTML = "★";
            } else {
                favoritebuttons[i].innerHTML = "☆";
            }
        }

        if (!favoritebuttons[i].dataset.listener) {
            favoritebuttons[i].addEventListener('click', function (event) {
                favorite(this);
            }, false);
            favoritebuttons[i].dataset.listener = true;
        }
    }
}

// Let users mark a film as a "favorite"
function favorite(el) {
    if (typeof (Storage) !== "undefined") {
        console.log(localStorage.getItem(el.dataset.movie));
    }
    var movie = el.dataset.movie;
    if (localStorage.getItem(el.dataset.movie) === "true") {
        console.log("it is true, turning to false");
        el.innerHTML = "☆";
        el.dataset.favorited = false;
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(el.dataset.movie, false);
        }
    } else {
        el.innerHTML = "★";
        el.dataset.favorited = true;
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(el.dataset.movie, true);
        }
    }
    // make or edit the cookie to mark that this movie is a favorite.
    //    console.log("favorite", movie);
}

// Change the tab on the genre selection area
function changeTabs(genre) {
    var tabs = document.querySelectorAll(".film_nav h3");
    var tab_contents = document.querySelectorAll(".cards");
    tabs.forEach(function (tab) {
        console.log(tab, genre);
        if (tab.classList.contains("active_tab")) {
            tab.classList.remove("active_tab");
        }
        if (tab.dataset.target == genre) {
            tab.classList.add("active_tab");
        }
    })
    tab_contents.forEach(function (tab) {
        if (!tab.classList.contains("hidden")) {
            tab.classList.add("hidden");
        }
        if (tab.classList.contains(genre)) {
            tab.classList.remove("hidden");
        }
    })
}

// MAke an API call to get details about a movie - show a popup with those details
function learn(movie) {
    // Reset the popup and tell user to be patient.
    var popup = document.querySelector("#popup");
    // Consider adding a loading animation?
    popup.querySelector("h2").innerHTML = "LOADING . . . ";
    popup.querySelector("#desc").innerHTML = "";
    popup.querySelector("#starring").innerHTML = "";

    // troubleshoot this?
    var moviedata = "https://www.theimdbapi.org/api/movie?movie_id=" + movie;
    var movieclient = new XMLHttpRequest();
    movieclient.open('GET', moviedata);
    movieclient.onreadystatechange = function () {
        // Wait for the right state change.
        if (movieclient.readyState == 4 && movieclient.status == 200) {
            // Fill up the popup with movie info.
            var data = JSON.parse(movieclient.responseText);
            popup.querySelector("h2").innerHTML = data.title;
            popup.querySelector("#desc").innerHTML = "<em><strong>About: </em></strong>" + data.storyline;
            popup.querySelector("#starring").innerHTML = "<em><strong>Starring: </em></strong>" + data.stars;
        }
    }
    movieclient.send();
}


// Add a movie to the theater element to be watched.
function play_movie(movie) {
    var movie_obj = JSON.parse(movie.replace(/\'/g, '"'));

    if (window.location.href[window.location.href.length -1] != "/"){
        window.location = window.location + "/watch?movie=" + movie_obj.id;
    }
    else{
        window.location = window.location + "watch?movie=" + movie_obj.id;
    }

//
//    //clear the theater first
//    var movie_obj = JSON.parse(movie.replace(/\'/g, '"'));
//    var theatre = document.querySelector(".theatre");
//    theatre.innerHTML = "<video width=\"100%\" controls autoplay type=\"video/mp4\"  data-movie=\"" + movie_obj.name + "\" src=\"" + movie_obj.video + "\"> Your browser does not support the video tag.  </video>";
//    // Scroll to top of page to view movie.
//    //    window.scrollTo(0, 0);
//    document.querySelector(".theatre").scrollIntoView();
//    // Create video tag in theater
}


//Calls "Make Movies" from the other script"
var movies = make_movies();
make_ui(movies);
