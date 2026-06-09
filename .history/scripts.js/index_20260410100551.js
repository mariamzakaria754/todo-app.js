/*

-DarkTheme
[×] toggleDarkMode

-Tasks
[×] saveToDB
[×] initDataOnStartup
[×] renderTaskList
[×] initTaskList
[×] addTask
[×] deleteTask
[ ] toggleTask
[ ] toggleCompletedTaskde
[ ] Empty State



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
  initTaskList(tasks);
};

const initTaskListeners = () => {
  // console.log({ getDeleteIcons: getDeleteIcons() });

  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e, index) => deleteTask(e, index));
  });
  getCheckboxElements().fotEach((box, index) => {
    box.addEventListener("click", (box, index) => toggleTask());
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

  initTaskList(tasks);
};

const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
taskSearchBarButton.addEventListener("click", addTask);
const initDataOnStartup = () => {
  fetchData("DarkModeFlag" && toggleDarkMode());
  initTaskList(fetchData("tasks"));
};
const renderEmptyState = () => {
  taskListElement.innerHTML = `
  <li class="EmptyList">
<img
    class="EmptyList__img"
    src="./assets/icon-empty.svg"
    alt="list is empty"
  />
  <p> قائمة المهام الفارغة </p>
  </li>`;
};

const initTaskList = (tasks) => {
  if (tasks?.length) {
    renderTaskList(tasks);
    initTaskListeners();
  } else {
    renderEmptyState();
  }
};
initDataOnStartup();
