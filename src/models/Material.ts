import type { IbibliotecaItem } from "../interface/IBibliotecaItem.js";

export abstract class Material implements IbibliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;
  private _disponible: boolean;

  constructor(id: number, titulo: string, autor: string) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this._disponible = true;
  }

  get disponible(): boolean {
    return this._disponible;
  }

  set disponible(value: boolean) {
    this._disponible = value;
  }

  abstract mostrarInfo(): string;
}
