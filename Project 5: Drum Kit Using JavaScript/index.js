let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let key = this.innerHTML;
        sound(key)
    });
}

document.addEventListener("keypress", function(event){
    sound(event.key)
})

function animate(key){
    let btn = document.querySelector("."+key)
    btn.classList.toggle("pressed")
    setTimeout(function() {
        btn.classList.remove("pressed")
    }, 100);
}
function sound(key){
    animate(key)
    let n;
    switch (key) {
        case 'w':
            n=0
            break;
        case 'a':
            n=1
        case 's':
            n=2
        case 'd':
            n=3
        case 'j':
            n=4
        case 'k':
            n=5
        case 'l':
            n=6
        default:
            break;
    }
    let audio = new Audio('sounds/'+n+'.mp3')
    audio.play()
}