import {
  TaskListLink,
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
  taskListElement,
  taskSearchBarButton,
} from "./elements";

import { addTask, deleteTask, toggleDarkMode, toggleTask } from "./utils";

export const initListeners = () => {
  darkThemeToggleElement.addEventListener("click", toggleDarkMode);
  taskSearchBarButton.addEventListener("click", addTask);

  TaskListLink.addEventListener("click", () => {
    taskListElement.classList.toggle("TaskList__list--hideCompleted");
    TaskListLink.classList.toggle("TaskList__link--isActive");
  });
};

// NOTE;

export const initTaskListeners = () => {
  // ** لما تضغط delete → يحذف
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e) => deleteTask(e, index));
  });

  getCheckboxElements().forEach((box, index) => {
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener(
      "keydown",
      (e) => e.key === "Enter" && toggleTask(e, index),
    );
  });
};
