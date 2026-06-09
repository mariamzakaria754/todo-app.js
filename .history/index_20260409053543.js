/*

-DarkTheme



*/
const DarkThemeToggleButton = document.querySelector(".DarkThemeToggle");
DarkThemeToggleButton.addEventListener("click", (button) => {
  console.log(button);

  button.classList.toggle("DarkThemeToggle__activate");
});
