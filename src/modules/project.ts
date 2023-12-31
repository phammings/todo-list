import {Task, createTasks, createListItem, createCheckBox, createEditIcon, createDeleteIcon, createEditTaskPopup} from "./task";
import {saveTasks, loadTasks, deleteTask} from "./storage";

function displayTasks(projectName: string) {
  const list = document.querySelector<HTMLUListElement>("#list");
  const form = document.querySelector<HTMLFormElement>("#new-task-form");
  const input = document.querySelector<HTMLInputElement>("#new-task-title");
  const tasks: Task[] = loadTasks(projectName);
  const allTasks: Task[] = loadTasks("All Tasks");
  tasks.forEach(task => {
    addListItem(task);
  });
  
  form?.addEventListener("submit", e => {
    e.preventDefault();
  
    if (input?.value == "" || input?.value == null) return;
  
    const newTask = new Task(
      input.value,
      "Description",
      new Date(),
      new Date(),
      false,
      "!"
      );
    tasks.push(newTask);
    saveTasks(tasks, projectName);
    if (projectName !== "All Tasks") {
      allTasks.push(newTask);
      saveTasks(allTasks, "All Tasks");
    }
  
    addListItem(newTask);
    input.value = "";
  });

  function isTodayOrPast(date: Date) {
    const today = new Date();
    const dateString = (new Date(date)).toISOString().slice(0, 10);
    const todayString = (new Date(today)).toISOString().slice(0, 10);
  
    return dateString <= todayString;
}

  function addListItem(task: Task) {
    const checkbox = createCheckBox();
    const editIcon = createEditIcon();
    const deleteIcon = createDeleteIcon();

    checkbox.addEventListener("change", () => {
      task.isComplete = checkbox.checked;
      if (isTodayOrPast(task.dueDate) && !task.isComplete) {
        item.classList.add("bg-red-300");
      }
      else if (isTodayOrPast(task.dueDate) && task.isComplete) {
        item.classList.remove("bg-red-300");
      }
      else {
        item.classList.remove("bg-red-300");
      }
      saveTasks(tasks, projectName);
    });

    editIcon.addEventListener("click", () => {
      createEditTaskPopup(task);
    });

    deleteIcon.addEventListener("click", () => {
      deleteTask(projectName, task);
      const taskContainer = deleteIcon.parentNode as HTMLLIElement;
      taskContainer.innerHTML = "";
    });

    const item = createListItem(task, checkbox, editIcon, deleteIcon);

    list?.append(item);
  }
}

function createProject(projectName: string) {
  const tasks = document.querySelector("#tasks") as HTMLDivElement;
  
  if (tasks !== null) {
    tasks.textContent = "";
  }
  createTasks(projectName);
  displayTasks(projectName);
}

export default createProject;