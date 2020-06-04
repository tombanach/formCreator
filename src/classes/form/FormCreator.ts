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
    this.form = new Form(container, actions, editFormContainer);
    this.documentList = new DocumentList();
    this.documentListContainer = docListContainer;
    this.editFormContainer = editFormContainer;
  }

  form: Form;
  documentList: DocumentList;
  documentListContainer: Element;
  editFormContainer: Element;

  newForm = () => {
    this.form.add(new InputField("input", "labelForTest", FieldType.Textbox));
    this.form.add(new DateField("date", "dateLabel", FieldType.Date));
    this.form.add(
      new Textarea("textarea", "labelForTextarea", FieldType.Textarea)
    );
    this.form.add(
      new CheckboxField("checkbox", "checkboxLabel", FieldType.Checkbox)
    );
    this.form.add(new EmailField("email", "emailLabel", FieldType.Email));
    this.form.add(
      new SelectField("select", "selectLabel", FieldType.Select, ["tak", "nie"])
    );
    this.form.render();
  };

  showEditForm = (id: string) => {
    let documentToEdit = JSON.parse(
      this.documentList.getDocument(id)
    ) as IField[];
    this.form.state.forEach((s) => {
      let temp = documentToEdit.find((d) => d.name == s.name);
      s.value = temp.value;
    });
    this.form.editFormContainer = this.editFormContainer;
    this.form.render(true);
  };

  showSavedDocuments() {
    this.documentListContainer?.appendChild(this.documentList.render());
  }
  saveForm = (values: any, editKey?: string) => {
    this.form.save(values, editKey);
  };
}
