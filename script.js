const stopwatchDuration=document.getElementById("stopwatchDuration");
start=document.getElementById("start"); 
stop=document.getElementById("stop"); 
reset=document.getElementById("reset"); 
lap=document.getElementById("lap"); 
laps=document.getElementById("laps");
hrs=0, min=0, sec=0, ms=0, timeInterval=0;
start.onclick=()=> {
  timeInterval = setInterval(()=> {
    ms++;
    if(ms==100) {
      ms=0;
      sec++;
    }
    if(sec==60) {
      sec=0;
      min++;
    }
    if(min==60) {
      min=0;
      hrs++;
    }
    stopwatchDuration.innerHTML=`${hrs}:${min}:${sec}:${ms}`;
  },10)
  start.setAttribute("style", "display:none");
  stop.setAttribute("style", "display:block");
  reset.setAttribute("style", "display:none");
  lap.setAttribute("style", "display:block");
  lap.removeAttribute("disabled");
}
stop.onclick=()=> {
  clearInterval(timeInterval);
  lap.setAttribute("style", "display:none");
  reset.setAttribute("style", "display:block");
  start.setAttribute("style", "display:block");
  start.innerHTML= "Resume";
  stop.setAttribute("style", "display:none");
}
reset.onclick=()=> {
  clearInterval(timeInterval);
  laps.innerHTML = "";
  stopwatchDuration.innerHTML="00:00:00:00";
  hrs=min=sec=ms=0;
  count=0;
  start.innerHTML ="Start";
  reset.setAttribute("style", "display:none");
  lap.setAttribute("style", "display:block");
  lap.setAttribute("disabled", "true");
}
let count = 0;
lap.onclick=()=> {
  count ++;
  let li=document.createElement("li");
  li.innerHTML=`Lap ${count} : ${hrs}:${min}:${sec}:${ms}`;
  laps.appendChild(li);

  
}