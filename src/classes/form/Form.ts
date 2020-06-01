import { LocStorage } from "./../LocStorage";
import IField from "../../interfaces/IField";

export class Form {
  constructor(container: Element, actions: Element) {
    this.container = container;
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

  getValue(): string[] {
    const result: string[] = [];
    this.state.forEach((x) => {
      result.push(`${x.name}-${x.value}`);
    });
    return result;
  }

  save(values: any) {
    this.locStorage.saveDocument(values);
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
    this.state.forEach((x) => {
      edit
        ? this.editFormContainer.appendChild(x.render())
        : this.container?.appendChild(x.render());
    });
    this.actionButtons?.appendChild(this.renderSaveButton());
    this.actionButtons?.appendChild(this.renderBackButton());
  }
}
