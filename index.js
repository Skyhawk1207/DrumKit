// Event listeners

var n;
for (n = 0; n < 7; n++) {
  document.querySelectorAll(".drum")[n].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimate(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimate(event.key);
});

// FUNCTIONS FOR SOUND



function makeSound(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    case "k":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    case "l":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    default:
      console.log(key);

  }
}

// FUNCTION TO ANIMATE

function buttonAnimate(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}