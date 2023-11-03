var cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)start\s*\=\s*([^;]*).*$)|^.*$/,
    "$1",
);

function start() {
    document.cookie = "start=1";
    document.cookie = "wall=1";
    document.cookie = 'cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    location.replace("desktop.html");
};
