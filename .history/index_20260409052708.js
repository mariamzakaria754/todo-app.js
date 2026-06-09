/*

-DarkTheme



*/
const DarkThemeToggleButton = document.querySelector(".DarkThemeToggle");
DarkThemeToggleButton.addEventListener("click", (button) => {
  console.log(button);

  button.classList.add("DarkThemeToggle__activate");
});
