import { Libro } from "./models/Libros.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";

console.log("Bienvenido a la biblioteca digital.");

const libro1 = new Libro(
  1,
  "El Senor de los Anillos",
  "JRR Tolkien",
  500,
  "Fantasia"
);
const libro2 = new Libro(2, "El Hobbit", "JRR Tolkien", 400, "Fantasia");
const revista1 = new Revista(
  3,
  "National Geographic",
  "National Geographic",
  20
);
const usuario1 = new Usuario(1, "Mauricio Heredia");

console.log("Materiales Disponibles: ");
console.log(libro1.mostrarInfo());
console.log(libro2.mostrarInfo());
console.log(revista1.mostrarInfo());

console.log(" Realizando Prestamos:");
usuario1.prestar(libro1);
usuario1.prestar(revista1);
usuario1.prestar(libro2);

usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();

console.log("Estado actual de los materiales");
console.log(libro1.mostrarInfo());
console.log(libro2.mostrarInfo());
console.log(revista1.mostrarInfo());

console.log("INTENTANDO PRESTAR UN MATERIAL NO DISPONIBLE");
usuario1.prestar(libro2); // ESTO MARCA ERROR PERO QUIERO VER SI SIRVE NOMAS

console.log("DEMOSTRACION DE POLIFORMISMO:");
const materiales = [libro1, libro2, revista1];
materiales.forEach((material) => console.log(material.mostrarInfo()));
