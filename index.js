var drumKit = document.querySelectorAll(".drum");

//button click
for(let index = 0; index < drumKit.length; index++){
    drumKit[index].addEventListener("click", function () {
        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml); //the sounds are triggered by the event listener when user clicks on button
        animateButton(buttonHtml);
    });
};

//keyboard press
document.addEventListener("keydown", function(e) { //the sounds are triggered by the event listener when user press on keyboard.
    makeSound(e.key); //key is the read-only data from keyboard press.
    animateButton(e.key);
})

function makeSound(key) {//makeSound is to map the inputs to trigger the sound.
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(buttonHtml);
            break;
    }
}

function animateButton (pressedKey){
    var onKey = document.querySelector("." + pressedKey);

    onKey.classList.add("pressed");

    setTimeout(function () {
        onKey.classList.remove("pressed");
    }, 100);
}