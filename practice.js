setInterval(timing,1000)
function timing(){
var time = new Date();
hr = time.getHours();

var showtime=document.getElementById("showtime");
showtime.innerHTML = time.toLocaleTimeString();

}