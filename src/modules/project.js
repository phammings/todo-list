import { Task, createTasks } from "./Task";
import { saveTasks, loadTasks } from "./Storage";
function displayTasks(projectName) {
    const list = document.querySelector("#list");
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-title");
    const tasks = loadTasks(projectName);
    tasks.forEach(task => {
        addListItem(task);
    });
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
        e.preventDefault();
        if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
            return;
        const newTask = new Task(input.value, "Description", new Date(), new Date(), false, "Priority", "Notes");
        tasks.push(newTask);
        saveTasks(tasks, projectName);
        addListItem(newTask);
        input.value = "";
    });
    function addListItem(task) {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.addEventListener("change", () => {
            task.isComplete = checkbox.checked;
            saveTasks(tasks, projectName);
        });
        checkbox.type = "checkbox";
        checkbox.checked = task.isComplete;
        label.append(checkbox, task.title);
        item.append(label);
        list === null || list === void 0 ? void 0 : list.append(item);
    }
}
function createProject(projectName) {
    const content = document.querySelector("#content");
    const tasks = document.querySelector("#tasks");
    const dummyDiv = document.createElement("div");
    if (tasks !== null) {
        tasks.textContent = "";
    }
    createTasks(projectName);
    dummyDiv.classList.add("invisible");
    content === null || content === void 0 ? void 0 : content.appendChild(dummyDiv);
    displayTasks(projectName);
}
export default createProject;
