import { FieldLabel } from "./FieldLabel";
import { FieldBase } from "./FieldBase";
import { FieldType } from "../enums/FieldType";

export class CheckboxField extends FieldBase {
  constructor(
    name: string,
    label: string,
    fieldType: FieldType,
    value?: string
  ) {
    super(name, label, fieldType, value);
  }

  handleChange = (event: any) => {
    this.value = event.target.checked;
  };
  render() {
    const container = document.createElement("div");
    container.classList.add("form-group");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", this.name);
    input.setAttribute("id", this.name);
    input.addEventListener("input", (event) => this.handleChange(event));
    input.style.transform = "scale(1.5)";
    input.style.marginRight = "10px";
    const label = new FieldLabel(this.name, this.label);
    container.appendChild(input);
    container.appendChild(label.render());
    return container;
  }
}
