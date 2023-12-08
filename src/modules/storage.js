function saveTasks(tasks, projectName) {
    if (projectName == "All Tasks" || projectName == "Today's Tasks" || projectName == "This Week's Tasks") {
        localStorage.setItem("All Tasks", JSON.stringify(tasks));
        updateProjectValues();
    }
    else {
        localStorage.setItem(projectName, JSON.stringify(tasks));
        updateTaskValues(projectName);
    }
}
function updateProjectValues() {
    const allTasks = loadTasks("All Tasks");
    const allProjectNames = getAllProjectNames();
    allProjectNames.forEach(project => {
        const tasks = loadTasks(project);
        tasks.forEach(projectTask => {
            allTasks.forEach(task => {
                if (projectTask.createdAt == task.createdAt) {
                    projectTask.desc = task.desc;
                    projectTask.dueDate = task.dueDate;
                    projectTask.isComplete = task.isComplete;
                    projectTask.title = task.title;
                    projectTask.priority = task.priority;
                }
            });
        });
        localStorage.setItem(project, JSON.stringify(tasks));
    });
}
function updateTaskValues(projectName) {
    const allTasks = loadTasks("All Tasks");
    const projectTasks = loadTasks(projectName);
    allTasks.forEach(task => {
        projectTasks.forEach(projectTask => {
            if (task.createdAt == projectTask.createdAt) {
                task.desc = projectTask.desc;
                task.dueDate = projectTask.dueDate;
                task.isComplete = projectTask.isComplete;
                task.title = projectTask.title;
                task.priority = projectTask.priority;
            }
        });
    });
    console.log(allTasks);
    localStorage.setItem("All Tasks", JSON.stringify(allTasks));
}
function loadTasks(projectName) {
    if (projectName == "Today's Tasks") {
        return loadTodaysTasks();
    }
    else if (projectName == "This Week's Tasks") {
        return loadWeeksTasks();
    }
    else {
        const taskJSON = localStorage.getItem(projectName);
        if (taskJSON == null)
            return [];
        return JSON.parse(taskJSON);
    }
}
function deleteTask(projectName, taskName) {
    const allProjectNames = getAllProjectNames();
    allProjectNames.forEach(project => {
        let tasks = loadTasks(project);
        tasks = tasks.filter((task) => task.title !== taskName.title);
        saveTasks(tasks, project);
    });
}
function saveProject(projects) {
    localStorage.setItem("Projects", JSON.stringify(projects));
}
function loadProjects() {
    const taskJSON = localStorage.getItem("Projects");
    if (taskJSON == null)
        return [];
    return JSON.parse(taskJSON);
}
function deleteProject(projectName) {
    let projects = loadProjects();
    projects = projects.filter(project => project !== projectName);
    let tasks = loadTasks(projectName);
    tasks.forEach(task => {
        deleteTask("All Tasks", task);
    });
    localStorage.removeItem(projectName);
    saveProject(projects);
}
function loadTodaysTasks() {
    const projectName = "All Tasks";
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const todayTasks = [];
    const taskJSON = localStorage.getItem(projectName);
    if (taskJSON != null) {
        const tasks = JSON.parse(taskJSON);
        const tasksToday = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setUTCHours(0, 0, 0, 0);
            return taskDueDate.getTime() === today.getTime();
        });
        todayTasks.push(...tasksToday);
    }
    return todayTasks;
}
function loadWeeksTasks() {
    const projectName = "All Tasks";
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
    const thisWeekTasks = [];
    const taskJSON = localStorage.getItem(projectName);
    if (taskJSON != null) {
        const tasks = JSON.parse(taskJSON);
        const tasksThisWeek = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setUTCHours(0, 0, 0, 0);
            return taskDueDate >= today && taskDueDate <= endOfWeek;
        });
        thisWeekTasks.push(...tasksThisWeek);
    }
    return thisWeekTasks;
}
function getAllProjectNames() {
    const allProjectNames = Object.keys(localStorage);
    return allProjectNames;
}
export { saveTasks, loadTasks, saveProject, loadProjects, deleteProject, deleteTask };
