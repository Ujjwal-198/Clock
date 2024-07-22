function showTime() {
  const date = new Date();
  document.getElementById(
    "main"
  ).innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// Execute the greet function every 2 seconds (2000 milliseconds)
let intervalId = setInterval(showTime, 1);

// To stop the interval, you can use clearInterval
// clearInterval(intervalId);
