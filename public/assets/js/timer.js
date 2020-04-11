const END = new Date("28-Apr-2020 14:00");

let timer = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
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
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timeFun);
  }
}, 1000);
