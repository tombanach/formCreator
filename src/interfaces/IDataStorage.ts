export interface IDataStorage {
  saveDocument: (values: any) => string;
  loadDocument: (id: string) => any;
  getDocuments: () => string[];
}
