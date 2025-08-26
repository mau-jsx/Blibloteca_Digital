import { IUsuario } from "../src/interface/IUsuario.js";
import { Material } from "./Material.js";

export class Usuario implements IUsuario {
  id: number;
  nombre: string;
  private materialesPrestados: Material[] = [];
  ultimaPrestacoin!: Material;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.materialesPrestados = [];
  }

  prestar(Material: Material): void {
    if (Material.disponible) {
      Material.disponible = false;
      this.materialesPrestados.push(Material);
      this.ultimaPrestacoin = Material;
      console.log("Material prestado exitosamente.");
    } else {
      console.log("El material ya estaba prestado.");
    }
  }

  mostrarPrestados(): void {
    console.log(` Materiales prestados por ${this.nombre}:`);
    if (this.materialesPrestados.length === 0) {
      console.log("No hay materiales prestados.");
    } else {
      this.materialesPrestados.forEach((material, index) => {
        console.log(`${index + 1}. ${material.mostrarInfo()}`);
      });
    }
  }

  mostrarUltimaPrestacion(): void {
    if (this.ultimaPrestacoin) {
      console.log(` Ultima prestacion de ${this.nombre}`);
      console.log(this.ultimaPrestacoin.mostrarInfo());
    } else {
      console.log(`${this.nombre} No ha realizado nunguna prestacion aun`);
    }
  }
}
