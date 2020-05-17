import { FieldLabel } from './FieldLabel';
import { FieldBase } from "./FieldBase";
import { FieldType } from "../enums/FieldType";

export class Textarea extends FieldBase {
    constructor(name: string, label: string, fieldType: FieldType, value?: string) {
        super(name, label, fieldType, value)
    }

    render() {
        const container = document.createElement('div');
        const textarea = document.createElement('textarea');
        textarea.setAttribute('name', this.name);
        textarea.setAttribute('id', this.name);
        textarea.setAttribute('cols', '50');
        textarea.setAttribute('rows', '4');
        textarea.addEventListener('input', (event) => this.handleChange(event));
        const label = new FieldLabel(this.name, this.label);
        container.appendChild(label.render());
        container.appendChild(textarea);
        return container;
    }

}