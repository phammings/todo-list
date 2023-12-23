import createProject from "/home/ryan/the_odin_project/todo-list/src/modules/project";
import { saveProject, loadProjects, deleteProject } from "/home/ryan/the_odin_project/todo-list/src/modules/storage";
import initFirebase from "/home/ryan/the_odin_project/todo-list/src/modules/firebase";
function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove("active");
        }
    });
    button.classList.add("active");
}
function createHeader() {
    const header = document.createElement("header");
    const logo = document.createElement("div");
    const pageName = document.createElement("h1");
    const button = document.createElement("button");
    const hamburgerIcon1 = document.createElement("div");
    const hamburgerIcon2 = document.createElement("div");
    const hamburgerIcon3 = document.createElement("div");
    pageName.textContent = "Todo List";
    header === null || header === void 0 ? void 0 : header.classList.add("flex", "flex-wrap", "justify-between", "p-3", "bg-blue-600");
    pageName === null || pageName === void 0 ? void 0 : pageName.classList.add("text-white", "font-bold");
    button === null || button === void 0 ? void 0 : button.classList.add("space-y-q", "sm:hidden");
    hamburgerIcon1 === null || hamburgerIcon1 === void 0 ? void 0 : hamburgerIcon1.classList.add("w-8", "h-1", "bg-white", "mb-1");
    hamburgerIcon2 === null || hamburgerIcon2 === void 0 ? void 0 : hamburgerIcon2.classList.add("w-8", "h-1", "bg-white", "mb-1");
    hamburgerIcon3 === null || hamburgerIcon3 === void 0 ? void 0 : hamburgerIcon3.classList.add("w-8", "h-1", "bg-white");
    button.setAttribute("id", "menu-btn");
    logo.appendChild(pageName);
    button.appendChild(hamburgerIcon1);
    button.appendChild(hamburgerIcon2);
    button.appendChild(hamburgerIcon3);
    header.appendChild(logo);
    header.appendChild(button);
    return header;
}
function createProjectHeading(projectName) {
    const projectButton = document.createElement("button");
    projectButton.textContent = projectName;
    projectButton.classList.add("group-hover:bg-blue-300", "m-2", "p-1", "sm:text-left");
    projectButton.classList.add("button-nav");
    projectButton === null || projectButton === void 0 ? void 0 : projectButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(projectButton);
        createProject(projectName);
    });
    return projectButton;
}
function createProjectPopup() {
    const projects = document.querySelector("#projects");
    const projectButton = document.querySelector("#project-btn");
    const projectList = document.querySelector("#project-list");
    const popup = document.createElement("div");
    const input = document.createElement("input");
    const buttons = document.createElement("div");
    const addButton = document.createElement("button");
    const cancelButton = document.createElement("button");
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
    projects === null || projects === void 0 ? void 0 : projects.removeChild(projectButton);
    projects === null || projects === void 0 ? void 0 : projects.appendChild(popup);
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", (e) => {
        if (input && input.value) {
            createProject(input.value);
            const btnContainer = createBtnContainer(input.value);
            projectHeadings.push(input.value);
            saveProject(projectHeadings);
            projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(btnContainer);
            projects === null || projects === void 0 ? void 0 : projects.removeChild(popup);
            projects === null || projects === void 0 ? void 0 : projects.appendChild(projectButton);
        }
    });
    cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.addEventListener("click", (e) => {
        projects === null || projects === void 0 ? void 0 : projects.removeChild(popup);
        projects === null || projects === void 0 ? void 0 : projects.appendChild(projectButton);
    });
}
function createBtnContainer(project) {
    const allTasksBtn = document.querySelector("#homepage");
    const btnContainer = document.createElement("div");
    const deleteProjectBtn = document.createElement("button");
    const projectHeading = createProjectHeading(project);
    const projectList = document.querySelector("#project-list");
    deleteProjectBtn.textContent = "X";
    btnContainer.classList.add("flex", "flex-row", "group", "mx-auto", "sm:mx-0");
    deleteProjectBtn.classList.add("ml-auto", "opacity-0", "group-hover:opacity-100");
    btnContainer.appendChild(projectHeading);
    btnContainer.appendChild(deleteProjectBtn);
    deleteProjectBtn.addEventListener("click", (e) => {
        deleteProject(project);
        // Work around to delete project headings after refreshing page since btnContainer refers to previous element before refresh
        btnContainer.classList.add("hidden");
        projectList === null || projectList === void 0 ? void 0 : projectList.removeChild(btnContainer);
        projectHeadings = loadProjects();
        allTasksBtn === null || allTasksBtn === void 0 ? void 0 : allTasksBtn.classList.remove("active");
        allTasksBtn === null || allTasksBtn === void 0 ? void 0 : allTasksBtn.click();
    });
    return btnContainer;
}
function createMain() {
    const main = document.createElement("main");
    const nav = document.createElement("nav");
    const defaultProjects = document.createElement("div");
    const allTasksBtn = document.createElement("button");
    const todaysTasksBtn = document.createElement("button");
    const weeksTasksBtn = document.createElement("button");
    const projects = document.createElement("div");
    const projectHeading = document.createElement("h1");
    const projectList = document.createElement("div");
    const projectButton = document.createElement("button");
    const tasks = document.createElement("div");
    const dummyDiv = document.createElement("div");
    const menuBtn = document.getElementById("menu-btn");
    const logoutBtn = document.createElement("button");
    projectHeading.textContent = "Projects";
    allTasksBtn.textContent = "All Tasks";
    todaysTasksBtn.textContent = "Today";
    weeksTasksBtn.textContent = "This Week";
    projectButton.textContent = "Add Project";
    logoutBtn.textContent = "Logout";
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
    logoutBtn.classList.add("bg-blue-500", "hover:bg-blue-300", "text-white", "font-bold", "mt-2");
    allTasksBtn.setAttribute("id", "homepage");
    tasks.setAttribute("id", "tasks");
    projects.setAttribute("id", "projects");
    projectButton.setAttribute("id", "project-btn");
    projectList.setAttribute("id", "project-list");
    logoutBtn.setAttribute("id", "logout-btn");
    const allProjects = loadProjects();
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
    projects.appendChild(logoutBtn);
    nav.appendChild(defaultProjects);
    nav.appendChild(projects);
    main.appendChild(nav);
    main.appendChild(tasks);
    main.appendChild(dummyDiv);
    menuBtn.addEventListener("click", (e) => {
        nav.classList.toggle("hidden");
    });
    allTasksBtn.classList.add("button-nav");
    allTasksBtn === null || allTasksBtn === void 0 ? void 0 : allTasksBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(allTasksBtn);
        createProject("All Tasks");
    });
    todaysTasksBtn.classList.add("button-nav");
    todaysTasksBtn === null || todaysTasksBtn === void 0 ? void 0 : todaysTasksBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(todaysTasksBtn);
        createProject("Today's Tasks");
    });
    weeksTasksBtn.classList.add("button-nav");
    weeksTasksBtn === null || weeksTasksBtn === void 0 ? void 0 : weeksTasksBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(weeksTasksBtn);
        createProject("This Week's Tasks");
    });
    projectButton.classList.add("button-nav");
    projectButton === null || projectButton === void 0 ? void 0 : projectButton.addEventListener("click", (e) => {
        createProjectPopup();
    });
    logoutBtn.classList.add("button-nav");
    logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", (e) => {
        location.reload();
    });
    return main;
}
function createFooter() {
    const footer = document.createElement("footer");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Copyright © 2023 phammings";
    footer.classList.add("flex", "bg-black", "h-10", "items-center", "justify-center");
    paragraph.classList.add("text-white");
    footer.appendChild(paragraph);
    return footer;
}
function initializeWebsite() {
    const content = document.querySelector("#content");
    content.textContent = "";
    content === null || content === void 0 ? void 0 : content.appendChild(createHeader());
    content === null || content === void 0 ? void 0 : content.appendChild(createMain());
    content === null || content === void 0 ? void 0 : content.appendChild(createFooter());
    setActiveButton(document.querySelector(".button-nav"));
    //  Default Homepage
    createProject("All Tasks");
}
function intializeLogin() {
    const guestSignIn = document.querySelector("#guest-signin");
    const guestSignIn2 = document.querySelector("#guest-signin2");
    const signUp = document.querySelector("#sign-up");
    const signIn = document.querySelector("#sign-in");
    const registerPage = document.querySelector("#register-page");
    const loginPage = document.querySelector("#login-page");
    signUp === null || signUp === void 0 ? void 0 : signUp.addEventListener("click", () => {
        loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.add("hidden");
        registerPage === null || registerPage === void 0 ? void 0 : registerPage.classList.remove("hidden");
    });
    signIn === null || signIn === void 0 ? void 0 : signIn.addEventListener("click", () => {
        loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.remove("hidden");
        registerPage === null || registerPage === void 0 ? void 0 : registerPage.classList.add("hidden");
    });
    guestSignIn === null || guestSignIn === void 0 ? void 0 : guestSignIn.addEventListener("click", () => {
        loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.remove("hidden");
        initializeWebsite();
    });
    guestSignIn2 === null || guestSignIn2 === void 0 ? void 0 : guestSignIn2.addEventListener("click", () => {
        registerPage === null || registerPage === void 0 ? void 0 : registerPage.classList.remove("hidden");
        initializeWebsite();
    });
}
const myWindow = window;
myWindow.myFunction = function () {
    const registerPage = document.querySelector("#register-page");
    const loginPage = document.querySelector("#login-page");
    loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.add("hidden");
    registerPage === null || registerPage === void 0 ? void 0 : registerPage.classList.add("hidden");
    initializeWebsite();
};
let projectHeadings = loadProjects();
initFirebase();
intializeLogin();
export default initializeWebsite;
