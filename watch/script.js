if (window.location.search.indexOf('movie=') > -1) {
    // Build movie objects
    var movies = make_movies();
    // Pull movie from URL
    var current_movie = window.location.href.split("=")[1];
    // Find the right movie object
    movies.forEach(function (movie) {
        console.log(movie.values);
        // Horray for Object.values!
        if (Object.values(movie).includes(current_movie)) {
            var theatre = document.querySelector(".player");
            theatre.innerHTML = "<video width=\"100%\" height=\"100%\" controls autoplay type=\"video/mp4\"  data-movie=\"" + movie.name + "\" src=\"" + movie.video + "\"> Your browser does not support the video tag.  </video>";
        }
    });

} else {
    /* If something doesn't work, go back to main page. */
    alert("something went wrong");
    window.location.replace("https://didymusbenson.github.io/pubflix/");
}
