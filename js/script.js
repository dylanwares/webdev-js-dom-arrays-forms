(function(){
//start


//colour picker
var colourButtons = document.querySelectorAll(".colPicker");
for (var i = 0; i < colourButtons.length; i++){
    colourButtons[i].addEventListener("click", chgColour)
}

function chgColour(ev){
    console.dir(ev.target.classList[0]);
    var colourPicked = ev.target.classList[0] + "Back";
    document.querySelector("body").setAttribute("class", colourPicked)            
}



//image rotator
var imageAr = [
    "images/view1.jpg",
    "images/view2.jpg",
    "images/view3.jpg",
    "images/view4.jpg",
    "images/view5.jpg",
    "images/view6.jpg"
]


setInterval(chgImage, 1000);
var imgCounter = 0;

function chgImage(){
    document.getElementById("myImages").setAttribute("src" , imageAr[imgCounter]);
    imgCounter++;
    if (imgCounter == imageAr.length)
    {
        imgCounter = 0;
    }
}
chgImage();

})();

