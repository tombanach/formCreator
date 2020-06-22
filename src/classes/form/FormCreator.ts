import { LocStorage } from "./../LocStorage";
import { Form } from "./Form";
import { FieldType } from "./../../enums/FieldType";
import { SelectField } from "./../SelectField";
import { InputField } from "./../InputField";
import { IEntry } from "../../interfaces/IEntry";

export class FormCreator {
  constructor(formCreatorContainer: Element, formListContainer?: Element) {
    this.formCreatorContainer = formCreatorContainer;
    this.formListContainer = formListContainer;
    this.locStorage = new LocStorage();
  }
  fields: IEntry[][] = [];
  formCreatorContainer: Element;
  formListContainer: Element;
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
    let optionsForSelect = new InputField(
      "optionsForSelect",
      "Opcje dla pola typu select oddzielone ','",
      FieldType.Select,
      ""
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
    form.add(optionsForSelect);
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
      optionsForSelect.render(),
      label.render(),
      name.render(),
      value.render(),
      addButton
    );
    this.formCreatorContainer?.appendChild(container);
  };

  renderFormList = () => {
    let table = document.createElement("table");
    table.classList.add("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let btnTh = document.createElement("th");
    tr.appendChild(th);
    tr.appendChild(btnTh);
    table.appendChild(tr);
    th.innerHTML = "Dokumenty";

    this.locStorage.getForms().forEach((f) => {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let link = document.createElement("a");
      link.setAttribute("href", `new-document.html?id=${f}`);
      link.innerText = f;
      td.appendChild(link);
      let removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger");
      removeBtn.addEventListener("click", () => {
        this.locStorage.removeForm(f);
        location.reload();
      });
      removeBtn.innerText = "Usuń";
      let buttonTd = document.createElement("td");
      buttonTd.appendChild(removeBtn);
      tr.appendChild(td);
      tr.appendChild(buttonTd);
      table.appendChild(tr);
    });
    this.formListContainer?.appendChild(table);
  };
}
