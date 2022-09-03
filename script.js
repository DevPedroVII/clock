function showTime(){
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();
    const session = "AM"

    if(H==0) {
         H=12;
    }
    if(H>12){
        H = H -12;
        session = "PM"
    }
}
