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
    return document.createElement("input");
}

function createListItem(task: Task, checkbox: HTMLInputElement) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const editIcon = document.createElement("label");
    const deleteIcon = document.createElement("label");

    editIcon.textContent = "...";
    deleteIcon.textContent = "X";
    checkbox.type = "checkbox";
    checkbox.checked = task.isComplete;

    item.classList.add("flex", "sm:w-96");
    editIcon.classList.add("ml-auto");
    deleteIcon.classList.add("ml-4");

    label.append(checkbox, task.title);
    item.append(label, editIcon, deleteIcon);

    return item;
}
    
export {Task, createTasks, createListItem, createCheckBox};
    

    
    


