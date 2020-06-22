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

  showNewForm(id: string) {
    this.form.restoreSavedForm(id);
  }
}
