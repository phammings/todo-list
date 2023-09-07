import Task from "./Task";
import { saveTasks, loadTasks } from "./Storage";
const initPage = () => {
    const list = document.querySelector("#list");
    const form = document.getElementById("new-task-form");
    const input = document.querySelector("#new-task-title");
    const tasks = loadTasks();
    tasks.forEach(addListItem);
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
        e.preventDefault();
        if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
            return;
        const newTask = new Task(input.value, "Description", new Date(), new Date(), false, "Priority", "Notes");
        tasks.push(newTask);
        saveTasks(tasks);
        addListItem(newTask);
        input.value = "";
    });
    function addListItem(task) {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.addEventListener("change", () => {
            task.isComplete = checkbox.checked;
            saveTasks(tasks);
        });
        checkbox.type = "checkbox";
        checkbox.checked = task.isComplete;
        label.append(checkbox, task.title);
        item.append(label);
        list === null || list === void 0 ? void 0 : list.append(item);
    }
};
export default initPage;
