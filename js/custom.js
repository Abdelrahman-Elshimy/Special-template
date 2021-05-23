// Select Landing page element
var landingPage = document.querySelector(".landing-page");
// get array of images
var images = [];
for(let x = 0; x < 5; x++) {
    this.images.push("slide"+ x);
}
landingPage.style.backgroundImage = "url('images/slide0.jpg')";

setInterval(function() {
    let randomNum = Math.floor(Math.random() * (this.images.length - 1));
    this.landingPage.style.backgroundImage = 'url("images/'+ images[randomNum] +'.jpg")';
}, 10000);

var gearIcon = document.querySelector(".settings-box .fa-gear");

function doToggle() {
    var settingBox = document.querySelector(".settings-box");
    settingBox.classList.toggle('opened');
    document.querySelector(".settings-box .fa-gear").classList.toggle("fa-spin");
}