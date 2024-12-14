// crud.d.ts (ambient file)
import { RowID, RowElement } from './interface';

declare module 'crud' {
  export function insertRow(row: RowElement): number;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// main.ts
/// <reference path="crud.d.ts" />
import * as CRUD from './crud';
import { RowID, RowElement } from './interface';

const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
