import "./main.scss";
import { App } from "./App";
import { Router } from "./classes/Router";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container #form");
  const actions = document.querySelector(".actions");
  const editFormContainer = document.querySelector("#edit-form");
  const docListContainer = document.querySelector("#document-list-container");
  const formListContainer = document.querySelector("#form-list-container");
  const formCreatorContainer = document.querySelector("#form-creator");
  const app = new App(
    container,
    actions,
    docListContainer,
    editFormContainer,
    formCreatorContainer,
    formListContainer
  );
  app.showSavedDocuments();
  app.formCreator.renderOption();
  app.formCreator?.renderFormList();

  const saveFormBtn = document.querySelector("#saveFormBtn");
  saveFormBtn?.addEventListener("click", () => {
    app.formCreator.saveForm();
    window.location.href = "index.html";
  });
  if (Router.getParam() !== null) {
    let param = Router.getParam();
    switch (param.substr(0, 1)) {
      case "d":
        app.showEditForm(Router.getParam());
        break;
      case "f":
        app.showNewForm(Router.getParam());
        break;
    }
  }
});
