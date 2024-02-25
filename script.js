// Set the date we're counting down to
const countDownDate = new Date("March 6, 2024 11:30:00").getTime();

// Update the countdown every 1 second
setInterval(function() {
  // Get the time remaining until the countdown date
  const distance = countDownDate - new Date().getTime();

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Add leading zeros if the value is less than 10
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedDays = days < 10 ? "0" + days : days;

  // Update the HTML elements with the countdown values
  document.getElementById("day").textContent = formattedDays;
  document.getElementById("hours").textContent = formattedHours;
  document.getElementById("minutes").textContent = formattedMinutes;
  document.getElementById("seconds").textContent = formattedSeconds;

  if (distance < 0) {
    clearInterval();
    // Update the HTML elements to show 0 if the countdown is over
    document.getElementById("day").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  }
}, 1000);

