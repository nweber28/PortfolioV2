function checkScreenSize() {
  var element = document.getElementById("screenCont");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  if (screenWidth < screenHeight) {
    if (element.classList.contains("row")) {
      element.classList.remove("row");
    }
    element.classList.add("column");
  } else {
    if (element.classList.contains("column")) {
      element.classList.remove("column");
    }
    element.classList.add("row");
  }
}

// Initial check on page load
checkScreenSize();

// Listen for window resize events
window.addEventListener("resize", checkScreenSize);
