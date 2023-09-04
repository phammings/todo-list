import Task from "src/modules/Task";

function saveTasks(tasks: Task[]) {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }
  
function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS");
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
}

export {saveTasks, loadTasks};
