import { FieldLabel } from "./FieldLabel";
import { FieldBase } from "./FieldBase";
import { FieldType } from "../enums/FieldType";

export class EmailField extends FieldBase {
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
    container.classList.add("form-group");
    const input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("name", this.name);
    input.setAttribute("id", this.name);
    input.addEventListener("input", (event) => this.handleChange(event));
    input.classList.add("form-control");
    const label = new FieldLabel(this.name, this.label);
    container.appendChild(label.render());
    container.appendChild(input);
    return container;
  }
}
