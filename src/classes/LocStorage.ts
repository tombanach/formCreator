import { IDataStorage } from "./../interfaces/IDataStorage";
export class LocStorage implements IDataStorage {
  saveDocument = (values: any, editKey?: string): string => {
    if (editKey !== null) {
      localStorage.removeItem(editKey);
      localStorage.setItem(editKey, JSON.stringify(values));
      return editKey;
    } else {
      let id = `document-${Date.now()}`;
      localStorage.setItem(id, JSON.stringify(values));
      return id;
    }
  };
  loadDocument = (id: string): any => {
    let document = localStorage.getItem(id);
    return document;
  };
  getDocuments = (): string[] => {
    let keys = Object.keys(localStorage);
    return keys.filter(
      (k) => k !== "loglevel:webpack-dev-server" && k.substr(0, 1) === "d"
    );
  };

  removeDocument = (id: string) => {
    localStorage.removeItem(id);
  };

  saveForm = (values: any) => {
    let id = `form-${Date.now()}`;
    localStorage.setItem(id, JSON.stringify(values));
    return id;
  };

  removeForm = (id: string) => {
    localStorage.removeItem(id);
  };

  getForms = (): string[] => {
    let keys = Object.keys(localStorage);
    return keys.filter(
      (k) => k !== "loglevel:webpack-dev-server" && k.substr(0, 1) === "f"
    );
  };
}
