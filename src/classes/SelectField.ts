import { FieldLabel } from "./FieldLabel";
import { FieldBase } from "./FieldBase";
import { FieldType } from "../enums/FieldType";

export class SelectField extends FieldBase {
  constructor(
    name: string,
    label: string,
    fieldType: FieldType,
    options: string[],
    value?: string
  ) {
    super(name, label, fieldType, value);
    this.options = options;
  }
  options: string[];

  render() {
    const container = document.createElement("div");
    container.classList.add("form-group");
    const input = document.createElement("select");
    input.setAttribute("type", "text");
    input.setAttribute("name", this.name);
    input.setAttribute("id", this.name);
    input.addEventListener("input", (event) => this.handleChange(event));
    input.classList.add("form-control");
    let opt = document.createElement("option");
    opt.text = "Wybierz opcje";
    opt.value = "Wybierz opcje";
    opt.setAttribute("disabled", "disabled");
    opt.setAttribute("selected", "selected");
    input.appendChild(opt);
    this.options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.text = opt;
      input.appendChild(option);
    });
    const label = new FieldLabel(this.name, this.label);
    container.appendChild(label.render());
    container.appendChild(input);
    return container;
  }
}
