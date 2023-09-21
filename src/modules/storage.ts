import {Task} from "src/modules/task";

function saveTasks(tasks: Task[], projectName: string) {
    localStorage.setItem(projectName, JSON.stringify(tasks));
}
  
function loadTasks(projectName: string): Task[] {
    const taskJSON = localStorage.getItem(projectName);
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
}

function deleteTask(projectName: string, taskName: Task) {
    let tasks: Task[] = loadTasks(projectName);
    const taskIndex = tasks.findIndex((task) => task.title === taskName.title);
    tasks.splice(taskIndex, 1);
    saveTasks(tasks, projectName);
}

function saveProject(projects: string[]) {
    localStorage.setItem("Projects", JSON.stringify(projects))
}

function loadProjects(): string[] {
    const taskJSON = localStorage.getItem("Projects");
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
}

function deleteProject(projectName: string) {
    let projects = loadProjects();
    projects = projects.filter(project => project !== projectName);
    saveProject(projects);
}

export {saveTasks, loadTasks, saveProject, loadProjects, deleteProject, deleteTask};
