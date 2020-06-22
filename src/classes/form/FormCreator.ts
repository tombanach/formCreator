import { Form } from "./Form";
import { InputField } from "../InputField";
import { FieldType } from "../../enums/FieldType";
import { DateField } from "../DateField";
import { Textarea } from "../Textarea";
import { CheckboxField } from "../CheckboxField";
import { EmailField } from "../EmailField";
import { SelectField } from "../SelectField";
import IField from "../../interfaces/IField";
import { DocumentList } from "../DocumentList";

export class FormCreator {
  constructor(
    container: Element,
    actions: Element,
    docListContainer: Element,
    editFormContainer?: Element
  ) {
    this.documentListContainer = docListContainer;
    this.editFormContainer = editFormContainer;
  }

  documentListContainer: Element;
  editFormContainer: Element;
}
