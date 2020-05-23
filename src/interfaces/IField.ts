import { FieldType } from "../enums/FieldType";

export default interface IField {
  name: string;
  label: string;
  FieldType: FieldType;
  value: string;
  render: () => any;
  getValue: () => any;
}
