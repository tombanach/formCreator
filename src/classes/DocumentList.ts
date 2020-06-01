import { LocStorage } from "./LocStorage";
import { parse } from "node-html-parser";
export class DocumentList {
  locStorage: LocStorage = new LocStorage();
  docList: string[];

  get getDocumentList() {
    return this.docList ?? this.locStorage.getDocuments();
  }

  removeDocument = (id: string) => {
    this.locStorage.removeDocument(id);
  };

  getDocument = (id: string) => {
    return this.locStorage.loadDocument(id);
  };

  render(): Node {
    let table = document.createElement("table");
    table.classList.add("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let btnTh = document.createElement("th");
    tr.appendChild(th);
    tr.appendChild(btnTh);
    table.appendChild(tr);
    th.innerHTML = "Dokumenty";

    this.getDocumentList.forEach((d) => {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let link = document.createElement("a");
      link.setAttribute("href", `edit-document.html?id=${d}`);
      link.innerText = d;
      td.appendChild(link);
      let removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger");
      removeBtn.addEventListener("click", () => {
        this.removeDocument(d);
        location.reload();
      });
      removeBtn.innerText = "Usuń";
      let buttonTd = document.createElement("td");
      buttonTd.appendChild(removeBtn);
      tr.appendChild(td);
      tr.appendChild(buttonTd);
      table.appendChild(tr);
    });
    return table;
  }
}
