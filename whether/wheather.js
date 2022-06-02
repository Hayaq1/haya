function remove(){
    var x=document.querySelector(".alert");
    x.remove();
   
}
function ert (elemnt){
    alert("loading wheather report");
}  


function ConvTemp() {
if (document.getElementById("temperature").value == "F") {
    foh();
    foh1();
    foh2();
    foh3();
    foh4();
    foh5();
    foh6();
    foh7();
} else if (document.getElementById("temperature").value == "C") {
    cel();
    cel1();
    cel2();
    cel3();
    cel4();
    cel5();
    cel6();
    cel7();
}}
/* Cold to F*/
function foh(valNum) {
    let cold = document.querySelector("#cold");
    cold = parseInt(cold.innerText)* 9 / 5 + 32;
    var cold1 = Math.round(cold);
    document.querySelector("#cold").innerText=cold1+"°";  
}
function foh1(valNum) {
    let cold = document.querySelector("#cold1");
    cold = parseInt(cold.innerText)* 9 / 5 + 32;
    var cold1 = Math.round(cold);
    document.querySelector("#cold1").innerText=cold1+"°";  
}
function foh2(valNum) {
    let cold = document.querySelector("#cold2");
    cold = parseInt(cold.innerText)* 9 / 5 + 32;
    var cold1 = Math.round(cold);
    document.querySelector("#cold2").innerText=cold1+"°";  
}
function foh3(valNum) {
    let cold = document.querySelector("#cold3");
    cold = parseInt(cold.innerText)* 9 / 5 + 32;
    var cold1 = Math.round(cold);
    document.querySelector("#cold3").innerText=cold1+"°";  
}
/* Hot to F*/
function foh4(valNum) {
    let hot = document.querySelector("#hot");
    hot = parseInt(hot.innerText) * 9 / 5 + 32;
    var hot1 = Math.round(hot);
    document.querySelector("#hot").innerText=hot1+"°";   
}
function foh5(valNum) {
    let hot = document.querySelector("#hot1");
    hot = parseInt(hot.innerText) * 9 / 5 + 32;
    var hot1 = Math.round(hot);
    document.querySelector("#hot1").innerText=hot1+"°";   
}
function foh6(valNum) {
    let hot = document.querySelector("#hot2");
    hot = parseInt(hot.innerText) * 9 / 5 + 32;
    var hot1 = Math.round(hot);
    document.querySelector("#hot2").innerText=hot1+"°";   
}
function foh7(valNum) {
    let hot = document.querySelector("#hot3");
    hot = parseInt(hot.innerText) * 9 / 5 + 32;
    var hot1 = Math.round(hot);
    document.querySelector("#hot3").innerText=hot1+"°";  
}
/* Return it to C */
/* cold to C */
function cel(val) {
    let cold = document.querySelector("#cold");
    cold = (parseInt(cold.innerText) -32 )* 5/9;
    var cold1 = Math.round(cold);
    document.querySelector("#cold").innerText=cold1+"°";  
}
function cel1(val) {
    let cold = document.querySelector("#cold1");
    cold = (parseInt(cold.innerText) -32 )* 5/9;
    var cold1 = Math.round(cold);
    document.querySelector("#cold1").innerText=cold1+"°";  
}
function cel2(val) {
    let cold = document.querySelector("#cold2");
    cold = (parseInt(cold.innerText) -32 )* 5/9;
    var cold1 = Math.round(cold);
    document.querySelector("#cold2").innerText=cold1+"°";  
}
function cel3(val) {
    let cold = document.querySelector("#cold3");
    cold = (parseInt(cold.innerText) -32 )* 5/9;
    var cold1 = Math.round(cold);
    document.querySelector("#cold3").innerText=cold1+"°";  
}
/* hot to C */
function cel4(valNum) {
    let hot = document.querySelector("#hot");
    hot = (parseInt(hot.innerText) -32 )* 5/9;
    var hot1 = Math.round(hot);
    document.querySelector("#hot").innerText=hot1+"°";   
}
function cel5(valNum) {
    let hot = document.querySelector("#hot1");
    hot = (parseInt(hot.innerText) -32 )* 5/9;
    var hot1 = Math.round(hot);
    document.querySelector("#hot1").innerText=hot1+"°";    
}
function cel6(valNum) {
    let hot = document.querySelector("#hot2");
    hot = (parseInt(hot.innerText) -32 )* 5/9;
    var hot1 = Math.round(hot);
    document.querySelector("#hot2").innerText=hot1+"°";  
}
function cel7(valNum) {
    let hot = document.querySelector("#hot3");
    hot = (parseInt(hot.innerText) -32 )* 5/9;
    var hot1 = Math.round(hot);
    document.querySelector("#hot3").innerText=hot1+"°";  
}