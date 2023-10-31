var cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)start\s*\=\s*([^;]*).*$)|^.*$/,
    "$1",
);

function start() {
    document.cookie = "start=1";
    document.cookie = "wall=1";
    document.cookie = 'cookiesAccepted=true';
    location.replace("desktop.html");
};