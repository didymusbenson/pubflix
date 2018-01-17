if (window.location.search.indexOf('movie=') > -1) {
    var movie = window.location.toString.split("=")[1];
    alert('movie' + movie);
} else {
    alert('movie not here');
}
