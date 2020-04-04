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
  __set("dy", days, ":");
  __set("hr", hours, ":");
  __set("mn", minutes, ":");
  __set("sc", seconds, "");
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

function __set(selector, value, text) {
  //fixing
  value = value < 10 ? "0" + value : value;
  //seperator
  if (text) value += text;

  //showing, notice the #, i'm using ids
  document.querySelector("#" + selector).innerHTML = value;
}
