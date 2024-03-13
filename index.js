const btnwhyreact = document.getElementById("btn-why-react");
const btncorefeatures = document.getElementById("btn-core-features");
const btnrelatedresources = document.getElementById("btn-related-resources");
const tabContent = document.getElementById("tab-content");

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

// displayContent

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = "";
  list.innerHTML = listContent;
  tabContent.append(list);
}
function higlightButton(btn) {
  btnwhyreact.className = "";
  btncorefeatures.className = "";
  btnrelatedresources.className = "";
  btn.className = "active"; // set new style / highlight
}
function handleClick(event) {
  const btnid = event.target.id;
  higlightButton(event.target);
  if (btnid === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnid === "btn-core-features") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
    console.log(displayContent);
  }
}

displayContent(content[0]); // initially show this content

btnwhyreact.addEventListener("click", handleClick);
btncorefeatures.addEventListener("click", handleClick);
btnrelatedresources.addEventListener("click", handleClick);
