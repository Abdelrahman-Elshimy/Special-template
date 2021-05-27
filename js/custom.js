//Check If there's a local storage color option
let mainColor = localStorage.getItem("color_option");
if (mainColor != null) {
    // set color
    document.documentElement.style.setProperty("--main--color", mainColor);
}



// Start Slider
// Select Landing page element
var landingPage = document.querySelector(".landing-page");
// get array of images
var images = [];
for(let x = 0; x < 5; x++) {
    this.images.push("slide"+ x);
}
landingPage.style.backgroundImage = "url('images/slide0.jpg')";

// random bckground option
let backgroundOption = true;
let backgroundInterval;

function randomBackground() {
    if(backgroundOption) {
       backgroundInterval = setInterval(function() {
            let randomNum = Math.floor(Math.random() * (this.images.length - 1));
            this.landingPage.style.backgroundImage = 'url("images/'+ images[randomNum] +'.jpg")';
        }, 5000);
    }
}
randomBackground();

// End slider

// Toggle Settings 
var gearIcon = document.querySelector(".settings-box .fa-gear");

function doToggle() {
    var settingBox = document.querySelector(".settings-box");
    settingBox.classList.toggle('opened');
    document.querySelector(".settings-box .fa-gear").classList.toggle("fa-spin");
}

// switch colors
// get all colors
const colorsLi = document.querySelectorAll(".color-list li");
colorsLi.forEach(element => {
    // add event to element
    element.addEventListener("click", (e)=> {
        // remove all active class in another siblings
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        // add active class to element
        e.target.classList.add("active");
        // set color on root
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
        // set item into local storage
        localStorage.setItem("color_option", e.target.dataset.color);
    }); 
});

// switch random background option
const randomBackOption = document.querySelectorAll(".option-box .random-background span");
randomBackOption.forEach(span => {
    console.log(span);
    span.addEventListener("click", (e) => {
        console.log(e.target);
        e.target.parentElement.querySelectorAll(".active").forEach(e => {
            e.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.background === 'yes') {
            this.backgroundOption = true;
            randomBackground();
        }
        else {
            clearInterval(backgroundInterval);
            this.backgroundOption = false;
        }
    });
})
// End Toggle Settings