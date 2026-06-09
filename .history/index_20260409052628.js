/*

-DarkTheme



*/
const DarkThemeToggleButton = document.querySelector(".DarkThemeToggle");
DarkThemeToggleButton.addEventListener("click", (button) => {
  console.log(button);

  if (true) {
    button.classList.add("DarkThemeToggle__activate");
  }
});
