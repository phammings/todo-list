import {Task} from "src/modules/task";

function saveTasks(tasks: Task[], projectName: string) {
    localStorage.setItem(projectName, JSON.stringify(tasks));
}
  
function loadTasks(projectName: string): Task[] {
    if (projectName == "Today's Tasks") {
        return loadTodaysTasks();
    }
    else if (projectName == "This Week's Tasks") {
        return loadWeeksTasks();
    }
    const taskJSON = localStorage.getItem(projectName);
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
}

function deleteTask(projectName: string, taskName: Task) {
    const allProjectNames = getAllProjectNames();
    allProjectNames.forEach(project => {
        let tasks: Task[] = loadTasks(project);
        tasks = tasks.filter((task) => task.title !== taskName.title);
        saveTasks(tasks, project);
    });
    
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

function loadTodaysTasks(): Task[] {
    const projectName = "All Tasks";
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const todayTasks: Task[] = [];

    const taskJSON = localStorage.getItem(projectName);

    if (taskJSON != null) {
        const tasks = JSON.parse(taskJSON) as Task[];
        const tasksToday = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setUTCHours(0, 0, 0, 0);
            return taskDueDate.getTime() === today.getTime();
        });

        todayTasks.push(...tasksToday);
    }

    return todayTasks;
}


function loadWeeksTasks(): Task[] {
    const projectName = "All Tasks";
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay()));

    const thisWeekTasks: Task[] = [];

    const taskJSON = localStorage.getItem(projectName);

    if (taskJSON != null) {
        const tasks = JSON.parse(taskJSON) as Task[];
        const tasksThisWeek = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setUTCHours(0, 0, 0, 0);
            return taskDueDate >= today && taskDueDate <= endOfWeek;
        });

        thisWeekTasks.push(...tasksThisWeek);
    }

    return thisWeekTasks;
}


function getAllProjectNames(): string[] {
    const allProjectNames = Object.keys(localStorage);
    return allProjectNames;
}

export {saveTasks, loadTasks, saveProject, loadProjects, deleteProject, deleteTask};
