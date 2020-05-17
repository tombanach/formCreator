export class FieldLabel {
    constructor(lblFor: string, value: string) {
        this.lblFor = lblFor;
        this.value = value;
    }

    lblFor: string;
    value: string;

    render = () => {
        const label = document.createElement('label');
        label.setAttribute('for', this.lblFor);
        label.innerText = this.value;
        return label;
    }   
}