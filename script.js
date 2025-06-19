// Show a welcome message when the page loads

window.onload = function () {

  console.log("Website loaded successfully!");

  showGreeting();

};

// Show a greeting based on the time of day

function showGreeting() {

  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {

    greeting = "Good morning 🌞";

  } else if (hour < 18) {

    greeting = "Good afternoon ☀️";

  } else {

    greeting = "Good evening 🌙";

  }

  alert(`${greeting} — Welcome to my About Me page!`);

}

// Optional: Add dark mode toggle button functionality

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  document.getElementById("darkModeBtn").innerText = isDark ? "Light Mode" : "Dark Mode";

}