
var countDownDate = new Date("October 28 2023 11:30:00 EDT").getTime();
var myfunc = setInterval(function () {


    var now = new Date().getTime();

    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeleft / (1000 * 60 * 60) % 24);
    var minutes = Math.floor(timeleft / (1000 * 60) % 60);
    var seconds = Math.floor(timeleft / 1000 % 60);

    if (days < 0) {
        document.getElementById("d").innerHTML = "00:";
        document.getElementById("h").innerHTML = "00:";
        document.getElementById("m").innerHTML = "00:";
        document.getElementById("s").innerHTML = "00";
    } else {
        document.getElementById("d").innerHTML = pad(days, 2);
        document.getElementById("h").innerHTML = pad(hours, 2);
        document.getElementById("m").innerHTML = pad(minutes, 2);
        document.getElementById("s").innerHTML = pad(seconds, 2);
    }
}, 1000);

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
