var ran1=Math.floor(Math.random()*6)+1;
var num="./images/dice"+ran1+".png";
document.querySelector(".img1").setAttribute("src",num);

var ran2=Math.floor(Math.random()*6)+1;
var num2="./images/dice"+ran2+".png";
document.querySelector(".img2").setAttribute("src",num2);
if(ran1>ran2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(ran2>ran1){
    document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

