import { Router } from "./../Router";
import { SelectField } from "./../SelectField";
import { EmailField } from "./../EmailField";
import { CheckboxField } from "./../CheckboxField";
import { Textarea } from "./../Textarea";
import { DateField } from "./../DateField";
import { InputField } from "./../InputField";
import { FieldType } from "./../../enums/FieldType";
import { LocStorage } from "./../LocStorage";
import IField from "../../interfaces/IField";
import { IEntry } from "../../interfaces/IEntry";
import { DocumentList } from "../DocumentList";
import { FieldBase } from "../FieldBase";

export class Form {
  constructor(
    container?: Element,
    actions?: Element,
    docListContainer?: Element,
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
  id: string;

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
    btn.addEventListener("click", () => {
      this.save(
        this.state,
        Router.getParam().substr(0, 1) === "d" ? Router.getParam() : undefined
      );
    });
    return btn;
  }

  renderBackButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-warning");
    btn.setAttribute("id", "back-btn");
    btn.innerText = "Wstecz";
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    return btn;
  }

  private createFieldBasedOnType(
    type: FieldType,
    name: string,
    label: string,
    value: any
  ) {
    switch (type) {
      case FieldType.Textbox:
        return new InputField(name, label, FieldType.Textbox, value);
      case FieldType.Date:
        return new DateField(name, label, FieldType.Date, value);
      case FieldType.Textarea:
        return new Textarea(name, label, FieldType.Textarea, value);
      case FieldType.Checkbox:
        return new CheckboxField(name, label, FieldType.Checkbox, value);
      case FieldType.Email:
        return new EmailField(name, label, FieldType.Email, value);
      case FieldType.Select:
        return new SelectField(name, label, FieldType.Select, value);
    }
  }

  restoreSavedForm(id: string) {
    let form = JSON.parse(this.locStorage.getForm(id)) as IEntry[][];
    form.forEach((field) => {
      this.add(
        this.createFieldBasedOnType(
          field[0].value,
          field[2].value,
          field[1].value,
          field[3].value
        )
      );
    });
    this.render();
  }

  showEditForm = (id: string) => {
    let documentToEdit = JSON.parse(
      this.documentList.getDocument(id)
    ) as IField[];
    documentToEdit.forEach((doc) => {
      this.add(
        this.createFieldBasedOnType(
          doc.FieldType,
          doc.name,
          doc.label,
          doc.value
        )
      );
    });
    this.editFormContainer = this.editFormContainer;
    this.render(true);
  };

  render(edit?: boolean) {
    if (edit) {
      this.state.forEach((x) => {
        this.editFormContainer.appendChild(x.render());
      });
      this.actionButtons?.appendChild(this.renderSaveButton());
      this.actionButtons?.appendChild(this.renderBackButton());
    } else {
      this.state.forEach((x) => {
        this.container?.appendChild(x.render());
      });
      this.actionButtons?.appendChild(this.renderSaveButton());
      this.actionButtons?.appendChild(this.renderBackButton());
    }
  }
}
