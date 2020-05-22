import { FieldLabel } from "./FieldLabel";
import { FieldBase } from "./FieldBase";
import { FieldType } from "../enums/FieldType";

export class DateField extends FieldBase {
  constructor(
    name: string,
    label: string,
    fieldType: FieldType,
    value?: string
  ) {
    super(name, label, fieldType, value);
  }

  render() {
    const container = document.createElement("div");
    const date = document.createElement("input");
    date.classList.add("form-group");
    date.setAttribute("type", "date");
    date.setAttribute("name", this.name);
    date.setAttribute("id", this.name);
    date.addEventListener("date", (event) => this.handleChange(event));
    date.classList.add("form-control");
    const label = new FieldLabel(this.name, this.label);
    container.appendChild(label.render());
    container.appendChild(date);
    return container;
  }
}
