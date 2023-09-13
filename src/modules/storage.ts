import {Task} from "src/modules/task";

function saveTasks(tasks: Task[], projectName: string) {
    localStorage.setItem(projectName, JSON.stringify(tasks));
}
  
function loadTasks(projectName: string): Task[] {
    const taskJSON = localStorage.getItem(projectName);
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
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
    const index = projects.indexOf(projectName);
    projects = projects.splice(index, 1);
    saveProject(projects);
}

export {saveTasks, loadTasks, saveProject, loadProjects, deleteProject};
