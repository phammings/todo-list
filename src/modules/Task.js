class Task {
    constructor(title, desc, dueDate, createdAt, isComplete, priority, note) {
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._createdAt = createdAt;
        this._isComplete = isComplete;
        this._priority = priority;
        this._note = note;
    }
    // Getter and Setter for Title
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    // Getter and Setter for Description
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    // Getter and Setter for Due Date
    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    // Getter and Setter for Created At
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    // Getter and Setter for Is Complete
    get isComplete() {
        return this._isComplete;
    }
    set isComplete(value) {
        this._isComplete = value;
    }
    // Getter and Setter for Priority
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    // Getter and Setter for Note
    get note() {
        return this._note;
    }
    set note(value) {
        this._note = value;
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
