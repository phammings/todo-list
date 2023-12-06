import createProject from "/home/ryan/the_odin_project/todo-list/src/modules/project";
import {saveProject, loadProjects, deleteProject} from "/home/ryan/the_odin_project/todo-list/src/modules/storage";

function setActiveButton(button: HTMLButtonElement) {
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((btn) => {
      if (btn !== button) {
          btn.classList.remove("active");
      }
  });
  button.classList.add("active");
}

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

  button.setAttribute("id", "menu-btn");

  logo.appendChild(pageName);
  button.appendChild(hamburgerIcon1);
  button.appendChild(hamburgerIcon2);
  button.appendChild(hamburgerIcon3);
  header.appendChild(logo);
  header.appendChild(button);

  return header;
}

function createProjectHeading(projectName: string): HTMLButtonElement {
  const projectButton = document.createElement("button") as HTMLButtonElement;
  
  projectButton.textContent = projectName;
  projectButton.classList.add("group-hover:bg-blue-300", "m-2", "p-1", "sm:text-left");

  projectButton.classList.add("button-nav");
  projectButton?.addEventListener("click", (e) => {
    if ((e.target as HTMLButtonElement).classList.contains("active")) {
      return;
    }
    setActiveButton(projectButton);
    createProject(projectName);
  });

  return projectButton;
}

function createProjectPopup() {
  const projects = document.querySelector<HTMLDivElement>("#projects");
  const projectButton = document.querySelector<HTMLButtonElement>("#project-btn");
  const projectList = document.querySelector<HTMLDivElement>("#project-list");

  const popup = document.createElement("div") as HTMLDivElement;
  const input = document.createElement("input") as HTMLInputElement;
  const buttons = document.createElement("div") as HTMLDivElement;
  const addButton = document.createElement("button") as HTMLButtonElement;
  const cancelButton = document.createElement("button") as HTMLButtonElement;

  addButton.textContent = "Add";
  cancelButton.textContent = "Cancel";

  input.setAttribute("type", "text");
  input.classList.add("my-4", "sm:my-0");
  popup.classList.add("flex", "flex-col");
  buttons.classList.add("flex", "items-center", "self-center", "sm:justify-between");
  addButton.classList.add("bg-green-300", "w-20", "mr-5", "mt-3");
  cancelButton.classList.add("bg-red-300", "mt-3", "w-20");

  buttons.appendChild(addButton);
  buttons.appendChild(cancelButton);
  popup.appendChild(input);
  popup.appendChild(buttons);
  projects?.removeChild(projectButton!);
  projects?.appendChild(popup);

  addButton?.addEventListener("click", (e) => {
    if(input && input.value) {
      createProject(input.value);
      const btnContainer = createBtnContainer(input.value);
      projectHeadings.push(input.value);
      saveProject(projectHeadings);

      projectList?.appendChild(btnContainer);
      projects?.removeChild(popup);
      projects?.appendChild(projectButton!);
    }
  });

  cancelButton?.addEventListener("click", (e) => {
    projects?.removeChild(popup);
    projects?.appendChild(projectButton!);
  });
}

function createBtnContainer(project: string) {
  const btnContainer = document.createElement("div") as HTMLDivElement;
  const deleteProjectBtn = document.createElement("button") as HTMLButtonElement;
  const projectHeading = createProjectHeading(project);
  const projectList = document.querySelector<HTMLDivElement>("#project-list");

  deleteProjectBtn.textContent = "X";
  btnContainer.classList.add("flex", "flex-row", "group", "mx-auto", "sm:mx-0");
  deleteProjectBtn.classList.add("ml-auto", "opacity-0", "group-hover:opacity-100");

  btnContainer.appendChild(projectHeading);
  btnContainer.appendChild(deleteProjectBtn);

  deleteProjectBtn.addEventListener("click", (e) => {
    deleteProject(project);
    // Work around to delete project headings after refreshing page since btnContainer refers to previous element before refresh
    btnContainer.classList.add("hidden");

    projectList?.removeChild(btnContainer);
    projectHeadings = loadProjects();
  });
  return btnContainer;
}

function createMain() {
  const main = document.createElement("main") as HTMLElement;
  const nav = document.createElement("nav") as HTMLElement;
  const defaultProjects = document.createElement("div") as HTMLDivElement;
  const allTasksBtn = document.createElement("button") as HTMLButtonElement;
  const todaysTasksBtn = document.createElement("button") as HTMLButtonElement;
  const weeksTasksBtn = document.createElement("button") as HTMLButtonElement;
  const projects = document.createElement("div") as HTMLDivElement;
  const projectHeading = document.createElement("h1") as HTMLHeadingElement;
  const projectList = document.createElement("div") as HTMLDivElement;
  const projectButton = document.createElement("button") as HTMLButtonElement;
  const tasks = document.createElement("div") as HTMLDivElement;
  const dummyDiv = document.createElement("div") as HTMLDivElement;
  const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement;

  projectHeading.textContent = "Projects";
  allTasksBtn.textContent = "All Tasks";
  todaysTasksBtn.textContent = "Today";
  weeksTasksBtn.textContent = "This Week";
  projectButton.textContent = "Add Project";

  main.classList.add("flex", "flex-col", "justify-between", "min-h-[calc(100vh-88px)]", "sm:flex-row");
  nav.classList.add("p-5", "bg-blue-200", "sm:w-64");
  defaultProjects.classList.add("flex", "flex-col");
  allTasksBtn.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  todaysTasksBtn.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  weeksTasksBtn.classList.add("hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  projects.classList.add("flex", "flex-col", "mt-3");
  projectHeading.classList.add("text-lg", "font-bold", "text-center", "sm:text-left");
  projectList.classList.add("flex", "flex-col", "mt-3");
  projectButton.classList.add("group-hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
  tasks.classList.add("flex", "flex-col", "p-5", "items-center");
  dummyDiv.classList.add("invisible");

  tasks.setAttribute("id", "tasks");
  projects.setAttribute("id", "projects");
  projectButton.setAttribute("id", "project-btn");
  projectList.setAttribute("id", "project-list");

  const allProjects: string[] = loadProjects();
  allProjects.forEach(project => {
    const btnContainer = createBtnContainer(project);
    projectList.appendChild(btnContainer);
  });
  defaultProjects.appendChild(allTasksBtn);
  defaultProjects.appendChild(todaysTasksBtn);
  defaultProjects.appendChild(weeksTasksBtn);
  projects.appendChild(projectHeading);
  projects.appendChild(projectList);
  projects.appendChild(projectButton);
  nav.appendChild(defaultProjects);
  nav.appendChild(projects);

  main.appendChild(nav);
  main.appendChild(tasks);
  main.appendChild(dummyDiv);

  menuBtn.addEventListener("click", (e) => {
    nav.classList.toggle("hidden");
  });

  allTasksBtn.classList.add("button-nav");
  allTasksBtn?.addEventListener("click", (e) => {
    if ((e.target as HTMLButtonElement).classList.contains("active")) {
      return;
    }
    setActiveButton(allTasksBtn);
    createProject("All Tasks");
  });

  todaysTasksBtn.classList.add("button-nav");
  todaysTasksBtn?.addEventListener("click", (e) => {
    if ((e.target as HTMLButtonElement).classList.contains("active")) {
      return;
    }
    setActiveButton(todaysTasksBtn);
    createProject("Today's Tasks");
  });

  weeksTasksBtn.classList.add("button-nav");
  weeksTasksBtn?.addEventListener("click", (e) => {
    if ((e.target as HTMLButtonElement).classList.contains("active")) {
      return;
    }
    setActiveButton(weeksTasksBtn);
    createProject("This Week's Tasks");
  });

  projectButton.classList.add("button-nav");
  projectButton?.addEventListener("click", (e) => {
    createProjectPopup();
  });

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
  content!.textContent = "";
  content?.appendChild(createHeader());
  content?.appendChild(createMain());
  content?.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav")!);
  //  Default Homepage
  createProject("All Tasks");
}

let projectHeadings: string[] = loadProjects();
initializeWebsite();