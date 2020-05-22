import IField from "../../interfaces/IField";

export class Form {
  constructor(container: Element) {
    this.container = container;
  }
  container: Element;
  private state: IField[] = [];

  add(field: IField) {
    this.state.push(field);
  }

  getValue(): string[] {
    const result: string[] = [];
    this.state.forEach((x) => {
      result.push(`${x.name}-${x.value}`);
    });
    return result;
  }

  render() {
    this.state.forEach((x) => {
      this.container.appendChild(x.render());
    });
  }
}
