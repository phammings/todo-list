import {Task, createTasks} from "./Task";
import {saveTasks, loadTasks} from "./Storage";

function createAllTasks() {
  
}

function displayAllTasks() {
  const list = document.querySelector<HTMLUListElement>("#list");
  const form = document.querySelector<HTMLFormElement>("#new-task-form");
  const input = document.querySelector<HTMLInputElement>("#new-task-title");
  const tasks: Task[] = loadTasks();
  tasks.forEach(addListItem);
  
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
    saveTasks(tasks);
  
    addListItem(newTask);
    input.value = "";
  })

  function addListItem(task: Task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", () => {
      task.isComplete = checkbox.checked;
      saveTasks(tasks);
    })
    checkbox.type = "checkbox";
    checkbox.checked = task.isComplete;
    label.append(checkbox, task.title);
    item.append(label);
    list?.append(item);
  }
}

function loadAllTasks() {
  const content = document.querySelector<HTMLBodyElement>("#content");
  const tasks = document.querySelector("#tasks") as HTMLDivElement;
  const dummyDiv = document.createElement("div") as HTMLDivElement;

  if (tasks !== null) {
    tasks.textContent = "";
  }
  createTasks("All Tasks");

  dummyDiv.classList.add("invisible");
  content?.appendChild(dummyDiv);

  displayAllTasks();
}

export default loadAllTasks;