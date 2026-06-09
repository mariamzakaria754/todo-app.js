import {
  darkThemeToggleElement,
  TaskListLink,
  taskListElement,
  taskSearchBarButton,
  getDeleteIcons,
  getCheckboxElements,
  searchInputElement,
} from "./elements";

import {
  addTask,
  deleteTask,
  toggleDarkMode,
  toggleTaskوsearchTasks,
} from "./utils";

import { searchTasks } from "./utils";

searchInputElement.addEventListener("input", (e) => {
  searchTasks(e.target.value);
});

// NOTE;

export const initTaskListeners = () => {
  // ** لما تضغط delete → يحذف
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e) => deleteTask(e, index));
  });
  // **لما تضغط checkbox → يكمل المهمة
  getCheckboxElements().forEach((box, index) => {
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener(
      "keydown",
      (e) => e.key === "Enter" && toggleTask(e, index),
    );
  });
};
// NOTE
export const initListeners = () => {
  darkThemeToggleElement.addEventListener("click", toggleDarkMode);
  taskSearchBarButton.addEventListener("click", addTask);
  TaskListLink.addEventListener("click", () => {
    taskListElement.classList.toggle("TaskList__list--hideCompleted");
    TaskListLink.classList.toggle("TaskList__link--isActive");
  });
};
