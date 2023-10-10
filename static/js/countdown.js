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
      document.getElementById("days").innerText = ""
      document.getElementById("hours").innerText = "" 
      document.getElementById("mins").innerText = ""
      document.getElementById("secs").innerText = ""
      document.getElementById("end").innerText = "00:00:00";
  } else {
      document.getElementById("days").innerText = days
      document.getElementById("hours").innerText = hours
      document.getElementById("mins").innerText = minutes
      document.getElementById("secs").innerText = seconds
  }
}, 1000);

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
