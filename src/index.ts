import { Textarea } from './classes/Textarea';
import { FieldType } from './enums/FieldType';
import { InputField } from './classes/InputField';
import './main.scss';
import { App } from './app';

const input = new InputField('test', 'labelForTest', FieldType.Textbox);
const textarea = new Textarea('textarea', 'labelForTextarea', FieldType.Textarea);
const container = document.querySelector('#container');
container.appendChild(input.render());
container.appendChild(textarea.render());
const app = new App();