import Task from "./Task";
import {saveTasks, loadTasks} from "./Storage";

const initPage = () => {
    const list = document.querySelector<HTMLUListElement>("#list");
    const form = document.getElementById("new-task-form") as HTMLFormElement | null;
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

export default initPage;


