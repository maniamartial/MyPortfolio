console.log("mania");
var details=document.getElementsByClassName("contactInformation");
var contlabel=document.getElementsByClassName("contacts");
contlabel.style.backgroundColor="#0000080";
contlabel.addEventListener(onclick, add);

function add(){
    console.log("I am okay");
}

var but2=document.getElementsByClassName("but_2");
but2.addEventListener('click', num);

function num(){
    alert("+254740743521\n Email: martialmania19@gmail.com")
}