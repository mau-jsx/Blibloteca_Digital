export interface IbibliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;
  mostrarInfo(): string;
}
