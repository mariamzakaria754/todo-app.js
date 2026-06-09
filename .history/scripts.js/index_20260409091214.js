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
import { darkThemeToggleElement, appElement } from "./elements";
darkThemeToggleElement.addEventListener("click", () => {
  appElement.classList.add("App--isDark");
});
