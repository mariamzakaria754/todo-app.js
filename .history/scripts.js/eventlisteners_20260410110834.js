import {
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
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
