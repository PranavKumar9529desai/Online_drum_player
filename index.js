
var i=0;
var Nu_of_buttons=document.querySelectorAll(".drum").length;
while ( i< Nu_of_buttons){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
i++;
}

// creting handleclick function
function handleClick(){

//  checking which element triggerred the click Event
var buttonInnerHTML=this.innerHTML;
 
switch (buttonInnerHTML) {
    case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash .play();
        break;
    case "a":
        var kick_bass = new Audio('sounds/kick-bass.mp3');
        kick_bass.play();
        break;
    case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;


    case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

    default:
        console.log(this);
        
}
}
// function to know which keyboard-key gets pressed
document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "a":
        var kick_bass = new Audio('sounds/kick-bass.mp3');
        kick_bass.play();
        break;
      case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    }
  });;




