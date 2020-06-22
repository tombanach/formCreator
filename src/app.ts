import { DocumentList } from "./classes/DocumentList";
import { FormCreator } from "./classes/form/FormCreator";
import { Form } from "./classes/form/Form";
import { InputField } from "./classes/InputField";
import { FieldType } from "./enums/FieldType";
import { DateField } from "./classes/DateField";
import { Textarea } from "./classes/Textarea";
import { CheckboxField } from "./classes/CheckboxField";
import { EmailField } from "./classes/EmailField";
import { SelectField } from "./classes/SelectField";

export class App {
  constructor(
    container: Element,
    actions: Element,
    docListContainer: Element,
    editFormContainer?: Element,
    formCreatorContainer?: Element,
    formListContainer?: Element
  ) {
    this.form = new Form(
      container,
      actions,
      docListContainer,
      editFormContainer
    );
    this.documentList = new DocumentList(docListContainer);
    this.formCreator = new FormCreator(formCreatorContainer, formListContainer);
  }
  form: Form;
  documentList: DocumentList;
  formCreator: FormCreator;

  showEditForm = (id: string) => {
    this.form.showEditForm(id);
  };

  showSavedDocuments() {
    this.documentList.render();
  }

  createBlankForm() {
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
  }

  showNewForm(id: string) {
    this.form.restoreSavedForm(id);
  }
}
