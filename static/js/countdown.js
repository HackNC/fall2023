var countDownDate = new Date("October 27, 2023 00:00:00").getTime();
var myfunc = setInterval(function () {

    var now = new Date().getTime();
 
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeleft / (1000 * 60 * 60) % 24);
    var minutes = Math.floor(timeleft / (1000 * 60) % 60);
    var seconds = Math.floor(timeleft / 1000 % 60);

    if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = ""
      document.getElementById("hours").innerHTML = "" 
      document.getElementById("mins").innerHTML = ""
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "00:00:00";
  } else {
      document.getElementById("days").innerHTML = days
      document.getElementById("hours").innerHTML = hours
      document.getElementById("mins").innerHTML = minutes
      document.getElementById("secs").innerHTML = seconds
  }
}, 1000);

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
