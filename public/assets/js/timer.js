const END = new Date("08-Jul-2020 00:00");

let timer = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

let timeFun = setInterval(() => {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = END - now;

  // Time calculations for days, hours, minutes and seconds
  timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  timer.hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  timer.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  timer.seconds = Math.floor((distance % (1000 * 60)) / 1000);

  /**DATA OUTPUT */

  //localStorage.setObject("timer", timer);
  //fillInThe("#timer32");
  __set("#dy", timer.days);
  __set("#hr", timer.hours);
  __set("#mn", timer.minutes);
  __set("#sc", timer.seconds);

  // If the count down is finished
  if (distance < 0) {
    clearInterval(timeFun);
  }
}, 1000);

function fillInThe(selector) {
  document.querySelector(selector).data = timer;
}

function __set(selector, value, text) {
  //fixing
  value = value < 10 ? "0" + value : value;
  //seperator
  if (text) value += text;

  //showing, notice the #, i'm using ids
  document.querySelector(selector).innerHTML = value;
}
