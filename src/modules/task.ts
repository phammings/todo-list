class Task {
    title: string;
    desc: string;
    dueDate: Date;
    createdAt: Date;
    isComplete: boolean;
    priority: string;
    note: string;

    constructor(
        title: string,
        desc: string,
        dueDate: Date,
        createdAt: Date,
        isComplete: boolean,
        priority: string,
        note: string
    ) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.createdAt = createdAt;
        this.isComplete = isComplete;
        this.priority = priority;
        this.note = note;
    }
}

function createTasks(taskName: string) {
    const tasks = document.getElementById("tasks") as HTMLDivElement;
    const taskHeading = document.createElement("h1") as HTMLHeadingElement;
    const taskContainer = document.createElement("div") as HTMLDivElement;
    const taskList = document.createElement("ul") as HTMLUListElement;
    const form = document.createElement("form") as HTMLFormElement;
    const inputBox = document.createElement("input") as HTMLInputElement;
    const submitButton = document.createElement("button") as HTMLButtonElement;

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

function createCheckBox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("mr-4");
    return checkbox;
}

function createEditIcon() {
    const editIcon = document.createElement("button");
    editIcon.textContent = "...";
    editIcon.classList.add("ml-auto");
    return editIcon;
}

function createDeleteIcon() {
    const deleteIcon = document.createElement("button");
    deleteIcon.textContent = "X";
    deleteIcon.classList.add("ml-4");
    return deleteIcon;
}

function createListItem(task: Task, checkbox: HTMLInputElement, editIcon: HTMLButtonElement, deleteIcon: HTMLButtonElement) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    
    checkbox.checked = task.isComplete;
    item.classList.add("flex", "sm:w-96");
    
    label.append(checkbox, task.title);
    item.append(label, editIcon, deleteIcon);

    return item;
}

function createEditTaskPopup(task: Task) {
    const body = document.querySelector("#content") as HTMLBodyElement;
    const popupContainer = document.createElement("div") as HTMLDivElement;
    const popup = document.createElement("div") as HTMLDivElement;
    const closeBtn = document.createElement("button") as HTMLButtonElement;
    const editTitleBtn = document.createElement("button") as HTMLButtonElement;
    const doneBtn = document.createElement("button") as HTMLButtonElement;
    const descBox = document.createElement("input") as HTMLInputElement;
    const dueDate = document.createElement("input") as HTMLInputElement;
    const priorityInput1 = document.createElement("input") as HTMLInputElement;
    const priorityInput2 = document.createElement("input") as HTMLInputElement;
    const priorityInput3 = document.createElement("input") as HTMLInputElement;
    const titleHeading = document.createElement("h1") as HTMLHeadingElement;
    const descHeading = document.createElement("h2") as HTMLHeadingElement;
    const dueDateHeading = document.createElement("h2") as HTMLHeadingElement;
    const priorityHeading = document.createElement("h2") as HTMLHeadingElement;
    const titleContainer = document.createElement("div") as HTMLDivE