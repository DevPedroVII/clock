function showTime(){
    var date = new Date();
    var H = date.getHours();
    var M = date.getMinutes();
    var S = date.getSeconds();
    var session = "AM"

    if(H==0) {
         H=12;
    }
    if(H>12){
        H = H -12;
        session = "PM"
    }

    H = (H<10) ? "0" + H : H;
    M = (M<10) ? "0" + M : M;
    S = (S<10) ? "0" + S : S;

    const time = H + ":" + M + ":" + S + " " + session

    document.getElementById("yClockdisplay").innerHTML = time;
    document.getElementById("yClockdisplay").textContent = time;
    setTimeout(showTime,1000)
}

showTime();
