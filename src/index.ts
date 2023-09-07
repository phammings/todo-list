import initPage from "./modules/allTasks";

function createHeader() {
  const header = document.createElement("header") as HTMLElement;
  const logo = document.createElement("div") as HTMLDivElement;
  const pageName = document.createElement("h1") as HTMLHeadingElement;
  const button = document.createElement("button") as HTMLButtonElement;
  const hamburgerIcon1 = document.createElement("div") as HTMLDivElement;
  const hamburgerIcon2 = document.createElement("div") as HTMLDivElement;
  const hamburgerIcon3 = document.createElement("div") as HTMLDivElement;

  pageName.textContent = "Todo List";

  header?.classList.add("flex", "flex-wrap", "justify-between", "p-3", "bg-blue-600");
  pageName?.classList.add("text-white", "font-bold");
  button?.classList.add("space-y-q", "sm:hidden");
  hamburgerIcon1?.classList.add("w-8", "h-1", "bg-white");
  hamburgerIcon2?.classList.add("w-8", "h-1", "bg-white");
  hamburgerIcon3?.classList.add("w-8", "h-1", "bg-white");

  logo.appendChild(pageName);
  button.appendChild(hamburgerIcon1);
  button.appendChild(hamburgerIcon2);
  button.appendChild(hamburgerIcon3);
  header.appendChild(logo);
  header.appendChild(button);

  return header;
}

function createMain() {
  const main = document.createElement("main") as HTMLElement;
  const nav = document.createElement("nav") as HTMLElement;
  const defaultProjects = document.createElement("div") as HTMLDivElement;
  const button1 = document.createElement("button") as HTMLButtonElement;
  const button2 = document.createElement("button") as HTMLButtonElement;
  const button3 = document.createElement("button") as HTMLButtonElement;
  const projects = document.createElement("div") as HTMLDivElement;
  const projectHeading = document.createElement("h1") as HTMLHeadingElement;
  const projectList = document.createElement("div") as HTMLDivElement;
  const projectButton = document.createElement("button") as HTMLButtonElement;
  const tasks = document.createElement("div") as HTMLDivElement;
  const taskHeading = document.createElement("h1") as HTMLHeadingElement;
  const taskContainer = document.createElement("div") as HTMLDivElement;
  const taskList = document.createElement("ul") as HTMLUListElement;
  const form = document.createElement("form") as HTMLFormElement;
  const inputBox = document.createElement("input") as HTMLInputElement;
  const submitButton = document.createElement("button") as HTMLButtonElement;
  const dummyDiv = document.createElement("div") as HTMLDivElement;

  projectHeading.textContent = "Projects";
  button1.textContent = "All Tasks";
  button2.textContent = "Today";
  button3.textContent = "This Week";
  projectButton.textContent = "Add Project";
  taskHeading.textContent = "All Tasks";
  submitButton.textContent = "Add";


  main.classList.add("flex", "flex-col", "justify-between", "min-h-[calc(100vh-88px)]", "sm:flex-row");
  nav.classList.add("p-5", "bg-blue-200", "sm:w-64");
  defaultProjects.classList.add("flex", "flex-col");
  button1.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  button2.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  button3.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  projects.classList.add("flex", "flex-col", "mt-3");
  projectHeading.classList.add("text-lg", "font-bold", "text-center", "sm:text-left");
  projectButton.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  tasks.classList.add("flex", "flex-col", "p-5");
  taskHeading.classList.add("text-lg", "font-bold", "self-center");
  taskContainer.classList.add("mt-5");
  inputBox.classList.add("border");
  submitButton.classList.add("mt-5");
  dummyDiv.classList.add("invisible");

  taskList.setAttribute("id", "list");
  form.setAttribute("id", "new-task-form");
  inputBox.setAttribute("id", "new-task-title");

  inputBox.setAttribute("type", "text");
  submitButton.setAttribute("type", "submit");

  defaultProjects.appendChild(button1);
  defaultProjects.appendChild(button2);
  defaultProjects.appendChild(button3);
  projects.appendChild(projectHeading);
  projects.appendChild(projectList);
  projects.appendChild(projectButton);
  nav.appendChild(defaultProjects);
  nav.appendChild(projects);

  form.appendChild(inputBox);
  form.appendChild(submitButton);
  taskContainer.appendChild(taskList);
  taskContainer.appendChild(form);
  tasks.appendChild(taskHeading);
  tasks.appendChild(taskContainer);

  main.appendChild(nav);
  main.appendChild(tasks);
  main.appendChild(dummyDiv);

  return main;
}

function createFooter() {
  const footer = document.createElement("footer") as HTMLElement;
  const paragraph = document.createElement("p") as HTMLParagraphElement;
  
  paragraph.textContent = "Copyright © 2023 phammings";

  footer.classList.add("flex", "bg-black", "h-10", "items-center", "justify-center");
  paragraph.classList.add("text-white");

  footer.appendChild(paragraph);
  return footer;
}

function initializeWebsite() {
  const content = document.querySelector<HTMLBodyElement>("#content");
  content?.appendChild(createHeader());
  content?.appendChild(createMain());
  content?.appendChild(createFooter());

  initPage();
}

initializeWebsite();