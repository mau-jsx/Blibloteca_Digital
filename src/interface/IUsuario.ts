import type { Material } from "../models/Material.js";

export interface IUsuario {
  id: number;
  nombre: string;
  prestar(Material: Material): void;
}
