import { FieldLabel } from './FieldLabel';
import { FieldBase } from "./FieldBase";
import { FieldType } from "../enums/FieldType";

export class InputField extends FieldBase {
    constructor(name: string, label: string, fieldType: FieldType, value?: string) {
        super(name, label, fieldType, value)
    }

    render() {
        const container = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', this.name);
        input.setAttribute('id', this.name);
        input.addEventListener('input', (event) => this.handleChange(event));
        const label = new FieldLabel(this.name, this.label);
        container.appendChild(label.render());
        container.appendChild(input);
        return container;
    }

}