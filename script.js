const button=document.getElementById('Stop-btn');

function showTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
   document.getElementById("time").innerText=time;
}
let interval=setInterval(showTime,1000);
button.addEventListener('click',() => {
    clearInterval(interval);
});
