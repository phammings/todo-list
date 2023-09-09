class Task {
    constructor(title, desc, dueDate, createdAt, isComplete, priority, note) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.createdAt = createdAt;
        this.isComplete = isComplete;
        this.priority = priority;
        this.note = note;
    }
}
function createTasks(taskName) {
    const tasks = document.getElementById("tasks");
    const taskHeading = document.createElement("h1");
    const taskContainer = document.createElement("div");
    const taskList = document.createElement("ul");
    const form = document.createElement("form");
    const inputBox = document.createElement("input");
    const submitButton = document.createElement("button");
    taskHeading.classList.add("text-lg", "font-bold", "self-center");
    taskContainer.classList.add("mt-5");
    inputBox.classList.add("border");
    submitButton.classList.add("mt-5");
    taskHeading.textContent = taskName;
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
export { Task, createTasks };
