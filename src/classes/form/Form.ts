import { LocStorage } from "./../LocStorage";
import IField from "../../interfaces/IField";
import { IEntry } from "../../interfaces/IEntry";
import { DocumentList } from "../DocumentList";

export class Form {
  constructor(
    container: Element,
    actions: Element,
    docListContainer: Element,
    editFormContainer?: Element
  ) {
    this.container = container;
    this.editFormContainer = editFormContainer;
    this.locStorage = new LocStorage();
    this.actionButtons = actions;
    this.documentListContainer = docListContainer;
    this.documentList = new DocumentList();
  }
  locStorage: LocStorage;
  container: Element;
  actionButtons: Element;
  documentListContainer: Element;
  editFormContainer: Element;
  documentList: DocumentList;

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

  showEditForm = (id: string) => {
    let documentToEdit = JSON.parse(
      this.documentList.getDocument(id)
    ) as IField[];
    this.state.forEach((s) => {
      let temp = documentToEdit.find((d) => d.name == s.name);
      s.value = temp.value;
    });
    this.editFormContainer = this.editFormContainer;
    this.render(true);
  };

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
