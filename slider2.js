let slider_img = document.querySelector(".slider_img");
let arr_img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let i = 0;

let stoptime;
function change() {
    slider_img.setAttribute("src", "SlideShow/" + arr_img[i]);
    if (i < arr_img.length - 1) {
        i++;

    } else {
        i = 0;
    }
    stoptime = setTimeout("change()", 1000);
}

function stopshow() {
    clearTimeout(stoptime)
}
function prev() {
    if (i <= 0)
        i = arr_img.length;
    i--;
    return setimg();
}
function next() {
    if (i >= arr_img.length - 1)
        i = -1;
    i++
    return setimg();
}
function setimg() {
    return slider_img.setAttribute("src", "SlideShow/" + arr_img[i]);
}

