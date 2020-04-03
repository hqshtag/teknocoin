let END = new Date("28-Apr-2020 14:00");

// Update the count down every 700 ms
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = END - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  __set("dy", days, "d");
  __set("hr", hours, "h");
  __set("mn", minutes, "m");
  __set("sc", seconds, "s");
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 700);

function __set(selector, value, text) {
  if (text) value += text;
  document.querySelector("#" + selector).innerHTML = value;
}
