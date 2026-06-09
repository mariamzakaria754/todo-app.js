/*

-DarkTheme



*/
const DarkThemeToggleButton = document.querySelector(".DarkThemeToggle");
DarkThemeToggleButton.addEventListener("click", (button) => {
  if (true) {
    button.classList.add("DarkThemeToggle__activate");
  } else {
    button.classList.add("DarkThemeToggle__deactivate");
  }
});
