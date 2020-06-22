import "./main.scss";
import { App } from "./App";
import { Router } from "./classes/Router";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container #form");
  const actions = document.querySelector(".actions");
  const formValues = document.querySelector("#formValues");
  const editFormContainer = document.querySelector("#edit-form");
  const docListContainer = document.querySelector("#document-list-container");
  const formCreatorContainer = document.querySelector("#form-creator");
  const app = new App(
    container,
    actions,
    docListContainer,
    editFormContainer,
    formCreatorContainer
  );
  app.createBlankForm();
  app.showSavedDocuments();
  app.formCreator.renderOption();

  const saveButton = document.querySelector("#save-button");
  saveButton?.addEventListener("click", () => {
    app.form.save(app.form.getValue(), Router.getParam());
  });

  const backButton = document.querySelector("#back-btn");
  backButton?.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  const saveFormBtn = document.querySelector("#saveFormBtn");
  saveFormBtn?.addEventListener("click", () => {
    app.formCreator.saveForm();
    window.location.href = "index.html";
  });

  if (Router.getParam() !== null) {
    app.showEditForm(Router.getParam());
  }
});
