if (window.location.search.indexOf('movie=') > -1) {
    var movie = window.location.pathname.split("=")[1];
    alert('movie' + movie);
} else {
    alert('movie not here');
}
