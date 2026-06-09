import {
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
  taskListElement,
  TaskListLink,
  taskSearchBarButton,
} from "./elements";

darkThemeToggleElement.addEventListener("click", toggleDarkMode);

const initTaskListeners = () => {
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

taskSearchBarButton.addEventListener("click", addTask);

TaskListLink.addEventListener("click", () => {
  taskListElement.classList.toggle("TaskList__list--hideCompleted");
  TaskListLink.classList.toggle("TaskList__link--isActive");
});
