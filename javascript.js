//slider js code
var imagecount = 1;
var total = 9; //total number of images

//function for slider
function slide(x) {
    var image = document.getElementById('img');
    imagecount = imagecount + x;
    if (imagecount > total) {
        imagecount = 1;
    }
    if (imagecount < 1) {
        imagecount = total;
    }
    image.src = "images/image" + imagecount + ".jpg"; //image source
}

//js code for zoom in/out
window.onload = function () {
    zoom(1)
}

function zoom(zm) {
    img = document.getElementById("img")
    wid = img.width
    ht = img.height
    img.style.width = (wid * zm) + "px"//increase or decrease height and width in px unit
    img.style.height = (ht * zm) + "px"

}


//image hover jquery code
$(function () {
    $('#img_cont').hover(
        function () {
            $('#tlbar').slideDown(200);
            $('#nav').slideDown(200);
        },
        function () {
            $('#tlbar').slideUp(200);
            $('#nav').slideUp(200);
        }
    );
    $('#tlbar,#nav').hover(
        function () {
            $(this).removeClass('transparent');
        },
        function () {
            $(this).addClass('transparent');
        }
    );
});