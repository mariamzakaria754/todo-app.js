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
import {
  darkThemeToggleElement,
  appElement,
  inputElement,
  taskListElement,
} from "./elements";

darkThemeToggleElement.addEventListener("click", () => {
  appElement.classList.toggle("App--isDark");
});
const taskSearchBarButton = document.querySelector(".TaskSearchBar__button");

const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

const renderTaskList = (tasks) => {
  let taskList = "";
  tasks.forEach((task) => {
    taskList += `
  <li class="TaskList__taskContent${task.isCompleted ? " TaskList__taskContent--isActive" : ""}">
  <div class='TaskList__checkbox' tabindex="0" role="button">
  <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" /></div>
  <div class='TaskList__valueContent'>
  <p class='TaskList__value'>${task.value}</p>
  <img src="./assets/icon-basket.svg"
             class='TaskList__deleteIcon'
             alt="basket-icon"/>
  </div>
  </li>


  `;
  });

  taskListElement.innerHTML = taskList;
  inputElement.value = "";
};

const addTask = (e) => {
  e.preventDefault();

  const taskValue = inputElement.value;
  if (!taskValue) return;
  const task = {
    value: taskValue,
    isCompleted: false,
  };
  const tasks = fetchData("tasks") || [];
  tasks.push(task);
  saveToDB("tasks", tasks);

  renderTaskList(tasks);
};

const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const deleteTask=()=>s{

}

taskSearchBarButton.addEventListener("click", addTask);
