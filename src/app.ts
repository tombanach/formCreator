import { Form } from "./classes/form/Form";
import { InputField } from "./classes/InputField";
import { FieldType } from "./enums/FieldType";
import { DateField } from "./classes/DateField";
import { Textarea } from "./classes/Textarea";
import { CheckboxField } from "./classes/CheckboxField";
import { EmailField } from "./classes/EmailField";
import { SelectField } from "./classes/SelectField";

export class App {
  constructor(container: Element) {
    this.form = new Form(container);
  }
  form: Form;

  createBlankForm() {
    this.form.add(new InputField("test", "labelForTest", FieldType.Textbox));
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
  }
}
