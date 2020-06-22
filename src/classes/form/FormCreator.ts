import { LocStorage } from "./../LocStorage";
import { Form } from "./Form";
import { FieldType } from "./../../enums/FieldType";
import { SelectField } from "./../SelectField";
import { InputField } from "./../InputField";
import IField from "../../interfaces/IField";
import { IEntry } from "../../interfaces/IEntry";
export class FormCreator {
  constructor(formCreatorContainer: Element) {
    this.formCreatorContainer = formCreatorContainer;
    this.locStorage = new LocStorage();
  }
  fields: IEntry[][] = [];
  formCreatorContainer: Element;
  locStorage: LocStorage;
  newForm = () => {};

  private getFieldTypes = () => {
    return Object.keys(FieldType);
  };

  addField = (element: Element, form: Form) => {
    this.fields.push(form.getValue());
    this.formCreatorContainer.appendChild(element);
    this.renderOption();
  };

  saveForm = () => {
    this.locStorage.saveForm(this.fields);
  };

  renderOption = () => {
    let select = new SelectField(
      "select",
      "Typ pola",
      FieldType.Select,
      this.getFieldTypes()
    );
    let label = new InputField("label", "Etykieta", FieldType.Textbox, "");
    let name = new InputField("name", "Nazwa pola", FieldType.Textbox, "");
    let value = new InputField(
      "value",
      "Domyślna wartość",
      FieldType.Textbox,
      ""
    );
    let form = new Form();
    form.add(select);
    form.add(label);
    form.add(name);
    form.add(value);
    let container = document.createElement("div");
    let addButton = document.createElement("button");
    addButton.classList.add("btn", "btn-success");
    addButton.innerText = "Dodaj pole";
    addButton.addEventListener("click", (event) => {
      addButton.setAttribute("disabled", "disabled");
      this.addField(container, form);
    });
    container.append(
      select.render(),
      label.render(),
      name.render(),
      value.render(),
      addButton
    );
    this.formCreatorContainer?.appendChild(container);
  };
}
