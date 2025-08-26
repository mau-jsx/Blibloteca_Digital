import { Material } from "./Material.js";

export class Libro extends Material {
  paginas: number;
  genero?: string | undefined;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    paginas: number,
    genero?: string | undefined
  ) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): string {
    const generoInfo = this.genero ? `, Género: ${this.genero}` : "";
    return `📖 Libro - ID: ${this.id}, Título: ${this.titulo}, Autor: ${
      this.autor
    }, Páginas: ${this.paginas}${generoInfo}, Disponible: ${
      this.disponible ? "Sí" : "No"
    }`;
  }
}
