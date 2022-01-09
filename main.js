import "./style.css";
function addToDom() {
  document.querySelector("#app").innerHTML = `
  <h1>App 1 Localstorage data</h1>
  <p>${JSON.stringify(localStorage.getItem("app"))}</p>
`;
}
addToDom();

document.getElementById("btn").addEventListener("click", () => {
  localStorage.setItem("app", document.getElementById("input").value);
  addToDom();
  let win = window.frames.example;

  win.postMessage(document.getElementById("input").value, "*");
});
