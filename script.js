function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
}

// Check local storage for dark mode preference
const darkModePreference = localStorage.getItem("dark-mode");
if (darkModePreference === "enabled") {
  toggleDarkMode();
} else {
  console.log("dark mode disabled");
}
