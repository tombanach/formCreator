import { IDataStorage } from "./../interfaces/IDataStorage";
export class LocStorage implements IDataStorage {
  saveDocument = (values: any): string => {
    let id = `document-${Date.now()}`;
    localStorage.setItem(id, JSON.stringify(values));
    return id;
  };
  loadDocument = (id: string): any => {
    let document = localStorage.getItem(id);
    return document;
  };
  getDocuments = (): string[] => {
    let keys = Object.keys(localStorage);
    return keys.filter((k) => k !== "loglevel:webpack-dev-server");
  };

  removeDocument = (id: string) => {
    localStorage.removeItem(id);
  };
}
