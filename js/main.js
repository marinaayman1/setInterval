var watch=setInterval(myTimer,2000);
function myTimer(){
    var d =new Date();
document.querySelector("#demo").innerHTML=d.toLocaleTimeString();
}