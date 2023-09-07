// import initPage from "./modules/allTasks";

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

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

initializeWebsite();