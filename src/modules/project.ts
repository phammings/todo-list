import {Task, createTasks, createListItem, createCheckBox, createEditIcon, createDeleteIcon} from "./task";
import {saveTasks, loadTasks, deleteTask} from "./storage";

function displayTasks(projectName: string) {
  const list = document.querySelector<HTMLUListElement>("#list");
  const form = document.querySelector<HTMLFormElement>("#new-task-form");
  const input = document.querySelector<HTMLInputElement>("#new-task-title");
  const tasks: Task[] = loadTasks(projectName);
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
      "Priority",
      "Notes"
      );
    tasks.push(newTask);
    saveTasks(tasks, projectName);
  
    addListItem(newTask);
    input.value = "";
  })

  function addListItem(task: Task) {
    const checkbox = createCheckBox();
    const editIcon = createEditIcon();
    const deleteIcon = createDeleteIcon();

    checkbox.addEventListener("change", () => {
      task.isComplete = checkbox.checked;
      saveTasks(tasks, projectName);
    });

    editIcon.addEventListener("click", () => {
      //  Open popup
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