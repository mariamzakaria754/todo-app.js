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

const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

const addTask = (e) => {
  e.preventDefault();
  const inputElement = document.querySelector(".TaskSearchBar__input");
  const taskValue = inputElement.value;
  if (!taskValue) return;
  const task = {
    value: taskValue,
    isCompleted: false,
  };
  const tasks = fetchData("tasks") || [];
  tasks.push(task);
  saveToDB("tasks", tasks);
  const taskListElement = document.querySelector(".TaskList__list");

  let taskList = [];

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
  localStorage.setItem(key, JSON.stringify(data));
};

taskSearchBarButton.addEventListener("click", addTask);
