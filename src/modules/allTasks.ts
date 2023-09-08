import Task from "./Task";
import {saveTasks, loadTasks} from "./Storage";

function createAllTasks() {
  const tasks = document.getElementById("tasks") as HTMLDivElement;
  const taskHeading = document.createElement("h1") as HTMLHeadingElement;
  const taskContainer = document.createElement("div") as HTMLDivElement;
  const taskList = document.createElement("ul") as HTMLUListElement;
  const form = document.createElement("form") as HTMLFormElement;
  const inputBox = document.createElement("input") as HTMLInputElement;
  const submitButton = document.createElement("button") as HTMLButtonElement;

  taskHeading.classList.add("text-lg", "font-bold", "self-center");
  taskContainer.classList.add("mt-5");
  inputBox.classList.add("border");
  submitButton.classList.add("mt-5");

  taskHeading.textContent = "All Tasks";
  submitButton.textContent = "Add";

  taskList.setAttribute("id", "list");
  form.setAttribute("id", "new-task-form");
  inputBox.setAttribute("id", "new-task-title");

  inputBox.setAttribute("type", "text");
  submitButton.setAttribute("type", "submit");

  form.appendChild(inputBox);
  form.appendChild(submitButton);
  taskContainer.appendChild(taskList);
  taskContainer.appendChild(form);
  tasks.appendChild(taskHeading);
  tasks.appendChild(taskContainer);

  return tasks;
}

function loadAllTasks() {
  const content = document.querySelector<HTMLBodyElement>("#content");
  const tasks = document.querySelector("#tasks") as HTMLDivElement;
  const dummyDiv = document.createElement("div") as HTMLDivElement;

  if (tasks !== null) {
    tasks.textContent = "";
  }
  createAllTasks();

  dummyDiv.classList.add("invisible");
  content?.appendChild(dummyDiv);

  displayAllTasks();
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

export default loadAllTasks;