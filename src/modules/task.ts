import createProject from "./project";
import { loadTasks, saveTasks } from "./storage";

class Task {
    title: string;
    desc: string;
    dueDate: Date;
    createdAt: Date;
    isComplete: boolean;
    priority: string;

    constructor(
        title: string,
        desc: string,
        dueDate: Date,
        createdAt: Date,
        isComplete: boolean,
        priority: string,
    ) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.createdAt = createdAt;
        this.isComplete = isComplete;
        this.priority = priority;
    }
}

function createTasks(projectName: string) {
    const tasks = document.getElementById("tasks") as HTMLDivElement;
    const projectHeading = document.createElement("h1") as HTMLHeadingElement;
    const taskContainer = document.createElement("div") as HTMLDivElement;
    const taskList = document.createElement("ul") as HTMLUListElement;
    const form = document.createElement("form") as HTMLFormElement;
    const inputBox = document.createElement("input") as HTMLInputElement;
    const submitButton = document.createElement("button") as HTMLButtonElement;

    projectHeading.classList.add("text-lg", "font-bold", "self-center");
    taskContainer.classList.add("mt-5");
    form.classList.add("flex", "sm:w-96", "mt-5");
    inputBox.classList.add("border", "mr-5", "mt-5");
    submitButton.classList.add("ml-auto", "mt-5");

    projectHeading.textContent = projectName;
    submitButton.textContent = "Add";

    projectHeading.setAttribute("id", "project-name");
    taskList.setAttribute("id", "list");
    form.setAttribute("id", "new-task-form");
    inputBox.setAttribute("id", "new-task-title");

    inputBox.setAttribute("type", "text");
    submitButton.setAttribute("type", "submit");

    form.appendChild(inputBox);
    form.appendChild(submitButton);
    taskContainer.appendChild(taskList);
    taskContainer.appendChild(form);
    tasks.appendChild(projectHeading);
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

function isDueToday(date: Date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

function createListItem(task: Task, checkbox: HTMLInputElement, editIcon: HTMLButtonElement, deleteIcon: HTMLButtonElement) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    
    if (isDueToday(task.dueDate)) {
        item.classList.add("bg-red-500");
    }

    checkbox.checked = task.isComplete;
    item.classList.add("flex", "sm:w-96");
    
    label.append(checkbox, task.title + task.priority);
    item.append(label, editIcon, deleteIcon);

    return item;
}

function createEditTaskPopup(task: Task) {
    const body = document.querySelector("#content") as HTMLBodyElement;
    const popupContainer = document.createElement("div") as HTMLDivElement;
    const popup = document.createElement("div") as HTMLDivElement;
    const closeBtn = document.createElement("button") as HTMLButtonElement;
    const editTitleHeading = document.createElement("p") as HTMLParagraphElement;
    const doneBtn = document.createElement("button") as HTMLButtonElement;
    const descBox = document.createElement("input") as HTMLInputElement;
    const dueDate = document.createElement("input") as HTMLInputElement;
    const priorityInput1 = document.createElement("input") as HTMLInputElement;
    const priorityInput2 = document.createElement("input") as HTMLInputElement;
    const priorityInput3 = document.createElement("input") as HTMLInputElement;
    const label1 = document.createElement("p") as HTMLParagraphElement;
    const label2 = document.createElement("p") as HTMLParagraphElement;
    const label3 = document.createElement("p") as HTMLParagraphElement;
    const titleHeading = document.createElement("h1") as HTMLHeadingElement;
    const descHeading = document.createElement("h2") as HTMLHeadingElement;
    const dueDateHeading = document.createElement("h2") as HTMLHeadingElement;
    const priorityHeading = document.createElement("h2") as HTMLHeadingElement;
    const titleContainer = document.createElement("div") as HTMLDivElement;
    const descContainer = document.createElement("div") as HTMLDivElement;
    const dueDateContainer = document.createElement("div") as HTMLDivElement;
    const priorityContainer = document.createElement("div") as HTMLDivElement;
    const priorityLevel: string = task.priority;

    titleHeading.textContent = task.title;
    descHeading.textContent = "Description";
    descBox.value = task.desc;
    dueDateHeading.textContent = "Due Date";
    priorityHeading.textContent = "Priority:";
    editTitleHeading.textContent = "(click name to edit)";
    closeBtn.textContent = "X";
    doneBtn.textContent = "Done";
    priorityInput1.textContent = "!";
    priorityInput2.textContent = "!!";
    priorityInput3.textContent = "!!!";
    label1.textContent = "!";
    label2.textContent = "!!";
    label3.textContent = "!!!";
    if (priorityLevel == "!") {
        priorityInput1.checked = true;
        priorityInput2.checked = false;
        priorityInput3.checked = false;
    }
    if (priorityLevel == "!!") {
        priorityInput1.checked = false;
        priorityInput2.checked = true;
        priorityInput3.checked = false;
    }
    if (priorityLevel == "!!!") {
        priorityInput1.checked = false;
        priorityInput2.checked = false;
        priorityInput3.checked = true;
    }

    const dateSaved = new Date(task.dueDate);
    dueDate.value = `${dateSaved.getUTCFullYear()}-${(dateSaved.getUTCMonth() + 1).toString().padStart(2, '0')}-${dateSaved.getUTCDate().toString().padStart(2, '0')}`;


    descBox.setAttribute("type", "text");
    dueDate.setAttribute("type", "date");
    priorityInput1.setAttribute("type", "radio");
    priorityInput2.setAttribute("type", "radio");
    priorityInput3.setAttribute("type", "radio");
    priorityInput1.setAttribute("name", "buttonGroup");
    priorityInput2.setAttribute("name", "buttonGroup");
    priorityInput3.setAttribute("name", "buttonGroup");

    popupContainer.classList.add("fixed", "inset-0", "bg-black", "opacity-80");
    popup.classList.add("flex", "flex-col", "items-center", "absolute", "w-1/2", "h-3/4", "bg-white", "inset-0", "m-auto");
    titleContainer.classList.add("flex", "flex-col", "mx-auto", "mb-8");
    descContainer.classList.add("flex", "flex-col", "mx-auto", "mb-4");
    dueDateContainer.classList.add("flex", "flex-col", "mx-auto", "mb-6");
    priorityContainer.classList.add("flex", "flex-row", "mx-auto", "mb-auto");
    doneBtn.classList.add("flex", "flex-col", "mb-5", "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-0.5", "px-4", "border", "border-blue-700", "rounded");  
    closeBtn.classList.add("ml-auto", "mt-4", "mr-4");
    titleHeading.classList.add("text-xl");
    editTitleHeading.classList.add("mx-auto", "text-xs");
    priorityInput1.classList.add("priorityBtn", "mx-1");
    priorityInput2.classList.add("priorityBtn", "mx-1");
    priorityInput3.classList.add("priorityBtn", "mx-1");
    titleHeading.classList.add("self-center");
    descHeading.classList.add("mx-auto", "mb-2");
    dueDateHeading.classList.add("mx-auto", "mb-2");
    descBox.classList.add("ml-0", "appearance-none", "block", "w-full", "bg-gray-200", "text-gray-700", "border", "border-gray-200", "rounded", "py-2", "px-4", "mb-3", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-gray-500");
    dueDate.classList.add("ml-0");
    priorityInput1.classList.add("ml-4");
    label1.classList.add("mr-4");
    label2.classList.add("mr-4");
    
    titleContainer.append(titleHeading, editTitleHeading);
    descContainer.append(descHeading, descBox);
    dueDateContainer.append(dueDateHeading, dueDate);
    priorityContainer.append(priorityHeading, priorityInput1, label1, priorityInput2, label2, priorityInput3, label3);

    popup.append(closeBtn, titleContainer, descContainer, dueDateContainer, priorityContainer, doneBtn);
    body.appendChild(popupContainer);
    body.appendChild(popup);

    const projectName = document.querySelector("#project-name") as HTMLHeadingElement;
    const tasks: Task[] = loadTasks(projectName.textContent ?? "");
    const buttons = document.querySelectorAll(".priorityBtn");

    popupContainer.addEventListener("click", () => {
        body.removeChild(popupContainer);
        body.removeChild(popup);
        createProject(projectName.textContent ?? "");
    });

    closeBtn.addEventListener("click", () => {
        body.removeChild(popupContainer);
        body.removeChild(popup);
        createProject(projectName.textContent ?? "");
    });

    descBox.addEventListener("click", () => {
        descBox.focus();
        descBox.select();
        
        descBox.addEventListener("blur", () => {
            const foundTask = tasks.find(task => task.title === titleHeading.textContent);
            if (foundTask) {
                foundTask.desc = descBox.value ?? "";
                saveTasks(tasks, projectName.textContent ?? "");
            }
        });
    });

    dueDate.addEventListener("click", () => {
        dueDate.focus();
        dueDate.select();
        
        dueDate.addEventListener("blur", () => {
            const foundTask = tasks.find(task => task.title === titleHeading.textContent);
            if (foundTask && dueDate.valueAsDate != null) {
                const modifiedDueDate = new Date(dueDate.valueAsDate);
                foundTask.dueDate = modifiedDueDate;
                saveTasks(tasks, projectName.textContent ?? "");
            }
        });
    });

    titleHeading.addEventListener("click", () => {
        editTitleHeading.textContent = "(click outside to change name)";

        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.value = titleHeading.textContent ?? "";

        titleHeading.replaceWith(inputElement);

        inputElement.focus();
        inputElement.select();

        inputElement.addEventListener("blur", () => {
            const foundTask = tasks.find(task => task.title === titleHeading.textContent);
            if (foundTask) {
                foundTask.title = inputElement.value;
                saveTasks(tasks, projectName.textContent ?? "");
            }
            titleHeading.textContent = inputElement.value;
            inputElement.replaceWith(titleHeading);
            editTitleHeading.textContent = "(click name to edit)";

            
        });
    });

    buttons.forEach(button => {
        button.addEventListener("change", () => {
            const foundTask = tasks.find(task => task.title === titleHeading.textContent);
            if (foundTask) {
                foundTask.priority = button.textContent ?? "";
                saveTasks(tasks, projectName.textContent ?? "");
            }
        });
    });

    doneBtn.addEventListener("click", () => {
        body.removeChild(popupContainer);
        body.removeChild(popup);
        createProject(projectName.textContent ?? "");
    });
}
    
export {Task, createTasks, createListItem, createCheckBox, createEditIcon, createDeleteIcon, createEditTaskPopup};
    

    
    


