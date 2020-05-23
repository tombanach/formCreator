import { LocStorage } from "./LocStorage";
import { parse } from "node-html-parser";
export class DocumentList {
  locStorage: LocStorage = new LocStorage();
  docList: string[];

  get getDocumentList() {
    return this.docList ?? this.locStorage.getDocuments();
  }

  render(): Node {
    let table = document.createElement("table");
    table.classList.add("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    tr.appendChild(th);
    table.appendChild(tr);
    th.innerHTML = "Dokumenty";
    this.getDocumentList.forEach((d) => {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.innerHTML = d;
      tr.appendChild(td);
      table.appendChild(tr);
    });
    return table;
  }
}
