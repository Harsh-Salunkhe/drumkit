var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);




});

}

    
document.addEventListener("keydown",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
 
function makeSound(key){
    switch (key) {
        case "w":
            var top1=new Audio("sounds/tom-1.mp3");
            top1.play();
    break;
    
            case "a":
            var top2=new Audio("sounds/tom-2.mp3");
            top2.play();
            
            break;
            case "s":
            var top3=new Audio("sounds/tom-3.mp3");
            top3.play();
            
            break;
            case "d":
            var top4=new Audio("sounds/tom-4.mp3");
            top4.play();
            
            break;
            case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
            case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            
            break;
            case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
            
    
        default:console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
 
setTimeout(function()  {
    activeButton.classList.remove("pressed");
}, 100);
}
