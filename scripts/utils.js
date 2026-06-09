import { appElement, taskListElement, inputElement } from "./elements";
import { initTaskListeners } from "./eventListeners";

// ✅ الصور (Vite safe imports)
import emptyIcon from "../assets/icon-empty.svg";
import checkmark from "../assets/icon-checkmark.svg";
import basketIcon from "../assets/icon-basket.svg";

export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

export const toggleDarkMode = () => {
  appElement.classList.toggle("App--isDark");
  saveToDB("DarkModeFlag", appElement?.classList.contains("App--isDark"));
};

export const renderTaskList = (tasks) => {
  let taskList = "";

  tasks.forEach((task) => {
    taskList += `
      <li class="TaskList__taskContent${task.isCompleted ? " TaskList__taskContent--isActive" : ""}">
        <div class="TaskList__checkbox" tabindex="0" role="button">
          <img class="TaskList__checkboxImage" src="${checkmark}" alt="checkmark" />
        </div>

        <div class="TaskList__valueContent">
          <p class="TaskList__value">
            ${task.value}
          </p>

          <img
            src="${basketIcon}"
            class="TaskList__deleteIcon"
            alt="basket-icon"
          />
        </div>
      </li>
    `;
  });

  taskListElement.innerHTML = taskList;
  inputElement.value = "";
};

export const deleteTask = (e, index) => {
  const answer = confirm("هل أنت متأكد من حذف هذه المهمة ؟");
  if (answer === false) return;
  const tasks = fetchData("tasks") || [];
  tasks.splice(index, 1);
  saveToDB("tasks", tasks);
  initTaskList(tasks);
};

export const addTask = (e) => {
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

export const saveToDB = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

// NOTE Startup initialization;
export const initDataOnStartup = () => {
  if (fetchData("DarkModeFlag")) {
    toggleDarkMode();
  }
  initTaskList(fetchData("tasks"));
};

export const renderEmptyState = () => {
  taskListElement.innerHTML = `
    <li class="EmptyList">
      <img class="EmptyList__img" src="${emptyIcon}" alt="list is empty" />
      <p>قائمة المهام فارغة</p>
    </li>
  `;
};

// NOTE Decision Maker;
export const initTaskList = (tasks) => {
  if (tasks?.length) {
    // ** ترسم الواجهة (UI)
    renderTaskList(tasks);
    // ** تربط الأحداث (Events) بالعناصر
    initTaskListeners();
  } else {
    // **
    renderEmptyState();
  }
};

export const toggleTask = (e, index) => {
  const tasks = fetchData("tasks") || [];

  if (!tasks[index]) return;
  e.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive",
  );
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveToDB("tasks", tasks);
};
