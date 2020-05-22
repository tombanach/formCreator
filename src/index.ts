import "./main.scss";
import { App } from "./App";

const container = document.querySelector("#container #form");
const showStateBtn = document.querySelector("#show-state-btn");
const formValues = document.querySelector("#formValues");
showStateBtn.addEventListener("click", () => {
  formValues.innerHTML = "";
  app.form.getValue().forEach((x) => (formValues.innerHTML += x + "<br>"));
});

const app = new App(container);
app.createBlankForm();
app.form.render();
