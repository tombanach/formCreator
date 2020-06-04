import { LocStorage } from "./../LocStorage";
import IField from "../../interfaces/IField";
import { IEntry } from "../../interfaces/IEntry";

export class Form {
  constructor(
    container: Element,
    actions: Element,
    editFormContainer?: Element
  ) {
    this.container = container;
    this.editFormContainer = editFormContainer;
    this.locStorage = new LocStorage();
    this.actionButtons = actions;
  }
  locStorage: LocStorage;
  container: Element;
  actionButtons: Element;
  editFormContainer: Element;
  state: IField[] = [];

  add(field: IField) {
    this.state.push(field);
  }

  getValue(): IEntry[] {
    const result: IEntry[] = [];
    this.state.forEach((x) => {
      let entry: IEntry = {
        name: x.name,
        value: x.value,
      };
      result.push(entry);
    });
    return result;
  }

  save(values: any, editKey?: string) {
    this.locStorage.saveDocument(values, editKey);
    window.location.href = "index.html";
  }

  renderSaveButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-success", "mr-3");
    btn.setAttribute("id", "save-button");
    btn.setAttribute("type", "submit");
    btn.innerText = "Zapisz";
    return btn;
  }

  renderBackButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-warning");
    btn.setAttribute("id", "back-btn");
    btn.innerText = "Wstecz";
    return btn;
  }

  render(edit?: boolean) {
    if (edit) {
      this.state.forEach((x) => {
        this.editFormContainer.appendChild(x.render());
      });
    } else {
      this.state.forEach((x) => {
        this.container?.appendChild(x.render());
      });
      this.actionButtons?.appendChild(this.renderSaveButton());
      this.actionButtons?.appendChild(this.renderBackButton());
    }
  }
}
