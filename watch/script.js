if (window.location.search.indexOf('movie=') > -1) {
    var movie = window.location.pathname;
    alert('movie: ' + movie);
} else {
    alert('movie not here');
}
