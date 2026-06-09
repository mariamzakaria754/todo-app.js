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

const addTask = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector(".TaskSearchBar__input");
  const taskValue = inputElement.value;
  if (!taskValue) return;
  const taskListElement = document.querySelector(".TaskList__list");
  taskListElement.innerHTML = `
  <li>
  <div>
  <img/></div>
  <div>
  <p></p>
  <img/>
  </div>
  </li>


  `;
};
