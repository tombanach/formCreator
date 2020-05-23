import "./main.scss";
import { App } from "./App";

const container = document.querySelector("#container #form");
const actions = document.querySelector(".actions");
const formValues = document.querySelector("#formValues");
const docListContainer = document.querySelector("#document-list-container");
const app = new App(container, actions, docListContainer);
app.createBlankForm();
app.form.render();
app.showSavedDocuments();

const saveButton = document.querySelector("#save-button");
saveButton?.addEventListener("click", () => {
  app.form.save(app.form.getValue());
});

const backButton = document.querySelector("#back-btn");
backButton?.addEventListener("click", () => {
  window.location.href = "index.html";
});
