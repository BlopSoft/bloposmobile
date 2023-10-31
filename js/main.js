document.cookie = "start=1";

var cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)start\s*\=\s*([^;]*).*$)|^.*$/,
    "$1",
);

if(cookieValue == 0){
    location.replace("welcome.html"); 
} else if(cookieValue == 1){
    location.replace("desktop.html");
}