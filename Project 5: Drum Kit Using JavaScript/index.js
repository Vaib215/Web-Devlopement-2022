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
            break;
        case 's':
            n=2
            break;
        case 'd':
            n=3
            break;
        case 'j':
            n=4
            break;
        case 'k':
            n=5
            break;
        case 'l':
            n=6
            break;
        default:
            break;
    }
    let audio = new Audio('sounds/'+n+'.mp3')
    audio.play()
}
