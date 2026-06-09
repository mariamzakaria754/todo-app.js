/*

-DarkTheme
[×] toggleDarkMode

-Tasks
[ ] saveToDB
[ ] initDataOnStartup
[ ] renderTaskList
[ ] addTask
[ ] deleteTask
[ ] toggleTask
[ ] toggleCompletedTaskde



*/
import { darkThemeToggleElement, appElement } from "./elements";
darkThemeToggleElement.addEventListener("click", () => {
  appElement.classList.toggle("App--isDark");
});

// const addTask = document.querySelector(".TaskSearchBar__input");

const addTask = (e) => {
  e.preventDefault();
};
