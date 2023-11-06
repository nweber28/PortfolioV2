function checkScreenSize() {
  var element = document.getElementById("screenCont");
  var elemID = document.getElementById("sectionContainer");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  if (screenWidth < screenHeight) {
    // phone
    if (element.classList.contains("row")) {
      element.classList.remove("row");
    }
    element.classList.add("column");
    elemID.style.overflowY = "hidden"; //hide scroll bar
  } else {
    if (element.classList.contains("column")) {
      element.classList.remove("column");
    }
    element.classList.add("row");
    elemID.style.overflowY = "auto";
  }
}

// Initial check on page load
checkScreenSize();

// Listen for window resize events
window.addEventListener("resize", checkScreenSize);
