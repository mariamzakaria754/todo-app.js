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
const taskSearchBarButton = document.querySelector(".TaskSearchBar__button");

const fetchData = () => {};

const addTask = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector(".TaskSearchBar__input");
  const taskValue = inputElement.value;
  if (!taskValue) return;
  const taskListElement = document.querySelector(".TaskList__list");
  taskListElement.innerHTML = `
  <li class="TaskList__taskContent">
  <div class='TaskList__checkbox' tabindex="0" role="button">
  <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" /></div>
  <div class='TaskList__valueContent'>
  <p class='TaskList__value'>${taskValue}</p>
  <img src="./assets/icon-basket.svg"
             class='TaskList__deleteIcon'
             alt="basket-icon"/>
  </div>
  </li>


  `;
};

const saveToDB = (key, data) => {
  localStorage.getItem;
};

taskSearchBarButton.addEventListener("click", addTask);
