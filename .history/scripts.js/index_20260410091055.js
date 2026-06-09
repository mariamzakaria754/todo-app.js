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
  getDeleteIcons,
} from "./elements";

const taskSearchBarButton = document.querySelector(".TaskSearchBar__button");
const toggleDarkMode = () => {
  appElement.classList.toggle("App--isDark");
  saveToDB("DarkModeFlag", appElement.classList.contains("App--isDark"));
};
darkThemeToggleElement.addEventListener("click", toggleDarkMode);
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

const deleteTask = (e, index) => {
  const answer = confirm("هل أنت متأكد من حذف هذه المهمة ؟");
  if (answer === false) return;
  const tasks = fetchData("tasks");
  tasks.splice(index, 1);
  saveToDB("tasks", tasks);
  renderTaskList(tasks);
};

const initTaskListeners = () => {
  console.log({ getDeleteIcons: getDeleteIcons() });

  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e, index) => deleteTask(e, index));
  });
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
  initTaskListeners();
};

const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const initDataOnStartup = () => {
  fetchData("DarkModeFlag" && toggleDarkMode());
};

taskSearchBarButton.addEventListener("click", addTask);
