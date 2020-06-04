import { DocumentList } from "./classes/DocumentList";
import { FormCreator } from "./classes/form/FormCreator";

export class App {
  constructor(
    container: Element,
    actions: Element,
    docListContainer: Element,
    editFormContainer?: Element
  ) {
    this.formCreator = new FormCreator(
      container,
      actions,
      docListContainer,
      editFormContainer
    );
  }
  formCreator: FormCreator;

  showEditForm = (id: string) => {
    this.formCreator.showEditForm(id);
  };

  showSavedDocuments() {
    this.formCreator.showSavedDocuments();
  }

  createBlankForm() {
    this.formCreator.newForm();
  }
}
