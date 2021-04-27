setInterval(alertFunc, 1000);
function alertFunc() {
  var date = new Date();
  var h = date.getHours() * 30;
  var m = date.getMinutes() * 6;
  var s = date.getSeconds() * 6;
  var hi = h + m / 12;

  document.getElementById("hour").style.transform = "rotate(" + hi + "deg)";
  document.getElementById("min").style.transform = "rotate(" + m + "deg)";
  document.getElementById("sec").style.transform = "rotate(" + s + "deg)";
}
