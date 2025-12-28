function updateClock(){
    const time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let ampm=hours>=12 ? 'PM' : 'AM';       

    if(hours>12){
        hours=hours-12;
    }
    if(hours==0){
        hours=12;
    }   
    hours=hours<10 ? '0'+hours : hours;
    minutes=minutes<10 ? '0'+minutes : minutes;
    seconds=seconds<10 ? '0'+seconds : seconds;

    const strTime=`${hours}:${minutes}:${seconds}`;
    document.getElementById('timer').innerText=strTime;
    document.getElementById('sp').innerText=ampm;
}
setInterval(updateClock,1000);
updateClock();

