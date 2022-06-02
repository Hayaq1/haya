console.log("page loaded...");

function changeName(){
    var a = document.querySelector("#haya");
    a.innerText ="haya Alqahtani";
}


function removeUser(){
    var x=document.querySelector(".card-list-item");
    x.remove();
   
}

var i=500;
var countElement=document.querySelector("#hh");

function add(){
    i++;
    countElement.innerText=i;
    console.log(i)
}

var count=2;
var countElement1=document.querySelector("#hoho");

function sub1(){
  count--;
    countElement1.innerText=count;
    console.log(count)
}