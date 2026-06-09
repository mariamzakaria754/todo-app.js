/*

-DarkTheme
[×] toggleDarkMode

-Tasks

[×] toggleDarkMode
[×] saveToDB
[×] initDataOnStartup
[×] renderTaskList
[×] addTask
[×] deleteTask
[×] toggleTask
[×] toggleCompletedTaskde



*/
const darkThemeToggleElement = document.querySelector(".DarkThemeToggle");
const appElement = document.querySelector(".App");
darkThemeToggleElement.addEventListener("click", () => {
  appElement.classList.add("App--isDark");
});
