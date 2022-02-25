let randomN1 = Math.random();
randomN1*=6;
randomN1=Math.ceil(randomN1);
let images = document.getElementsByTagName("img");
images[0].setAttribute("src","images/dice"+randomN1+".png");
let randomN2=Math.random();
randomN2*=6;
randomN2=Math.ceil(randomN2);
images[1].setAttribute("src","images/dice"+randomN2+".png");
let head = document.querySelector("h1");
if(randomN1>randomN2){
    head.innerHTML="Player 1 wins";
}
else if(randomN1<randomN2){
    head.innerHTML="Player 2 wins";
}
else{
    head.innerHTML="Draw!";
}