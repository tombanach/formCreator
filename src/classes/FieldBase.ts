import { FieldType } from "./../enums/FieldType";
import IField from "../interfaces/IField";

export abstract class FieldBase implements IField {
  constructor(
    name: string,
    label: string,
    fieldType: FieldType,
    value?: string
  ) {
    this.name = name;
    this.label = label;
    this.FieldType = fieldType;
    this.value = value ?? "";
  }
  getValue(): any {
    return this.value;
  }

  handleChange = (event: any) => {
    this.value = event.target.value;
    console.log(this.value);
  };

  name: string;
  label: string;
  FieldType: FieldType;
  value: any;

  abstract render(): any;
}
