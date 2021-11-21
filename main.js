let txt = document.querySelector(".text");

// Red Text
let red = document.querySelector(".red");
function redText(){
    txt.style.color="red";
}
red.onclick = redText;


// Green text
let green = document.querySelector(".green");
function greenText(){
    txt.style.color="green";
}
green.onclick = greenText;


// Blue Text
let blue = document.querySelector(".blue");
function blueText(){
    txt.style.color="blue";
}
blue.onclick = blueText;

// font size 10px
let fsize10 = document.querySelector(".fsize10");
function f10(){
    txt.style.fontSize = "10px";
}
fsize10.onclick = f10;


// font size 20px
let fsize20 = document.querySelector(".fsize20");
function f20(){
    txt.style.fontSize = "20px";
}
fsize20.onclick = f20;



//font size 30px
let fsize30 = document.querySelector(".fsize30");
function f30(){
    txt.style.fontSize = "30px";
    // txt.style.fontFamily = "Calibri";
}
fsize30.onclick = f30;


// font 1
let font1 = document.querySelector(".font-1");
function f1(){
    txt.style.fontFamily = "Calibri";
}
font1.onclick = f1;

// font 2
let font2 = document.querySelector(".font-2");
function f2(){
    txt.style.fontFamily = "Arial";
}
font2.onclick = f2;

// font 3
let font3 = document.querySelector(".font-3");
function f3(){
    txt.style.fontFamily = "Verdana";
}
font3.onclick = f3;