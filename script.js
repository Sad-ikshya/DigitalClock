let clock=document.querySelector(".clock");
let dateToday=document.querySelector(".date");

setInterval(()=>{
    let today=new Date();
    let hour=today.getHours();
    let minutes= today.getMinutes();
    let second=today.getSeconds();
    let date=today.toDateString();

    clock.innerText = `${padding(hour)} : ${padding(minutes)} : ${padding(second)}`;
      dateToday.innerText=date;  
},1000);
function padding(n){
    return n.toString().padStart(2,"0");
}