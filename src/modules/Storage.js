function saveTasks(tasks, projectName) {
    localStorage.setItem(projectName, JSON.stringify(tasks));
}
function loadTasks(projectName) {
    const taskJSON = localStorage.getItem(projectName);
    if (taskJSON == null)
        return [];
    return JSON.parse(taskJSON);
}
export { saveTasks, loadTasks };
