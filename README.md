# Sistema de Gestión de Biblioteca 📚

Un sistema básico de gestión de biblioteca desarrollado con **TypeScript** y **Programación Orientada a Objetos**, que permite administrar libros, revistas y préstamos de usuarios.

## 🎯 Objetivos del Proyecto

- Aplicar conceptos de **POO** en TypeScript
- Implementar **herencia**, **encapsulamiento**, **polimorfismo** e **interfaces**
- Practicar la **modularización** del código
- Usar **clases abstractas** e **interfaces**
- Manejar un proyecto **Node.js + TypeScript**

## 🏗️ Arquitectura del Sistema

### Interfaces

- **`IBibliotecaItem`**: Define las propiedades comunes de los materiales
- **`IUsuario`**: Define el comportamiento básico de un usuario

### Clases

- **`Material`** (abstracta): Clase base para todos los materiales
- **`Libro`**: Hereda de Material, incluye páginas y género opcional
- **`Revista`**: Hereda de Material, incluye número de edición
- **`Usuario`**: Maneja préstamos y lista de materiales prestados

## 📁 Estructura del Proyecto

```
biblioteca-typescript/
├── src/
│   ├── interfaces/
│   │   ├── IBibliotecaItem.ts    # Interfaz para materiales
│   │   └── IUsuario.ts           # Interfaz para usuarios
│   ├── models/
│   │   ├── Material.ts           # Clase abstracta base
│   │   ├── Libro.ts              # Clase Libro
│   │   ├── Revista.ts            # Clase Revista
│   │   └── Usuario.ts            # Clase Usuario
│   └── main.ts                   # Archivo principal con pruebas                        # Archivos compilados (generado
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd biblioteca-typescript
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Compilar el proyecto**

   ```bash
   npm run build
   ```

4. **Ejecutar el proyecto**
   ```bash
   npm start
   ```

## 📋 Scripts Disponibles

| Comando           | Descripción                             |
| ----------------- | --------------------------------------- |
| `npm run build`   | Compila TypeScript a JavaScript         |
| `npm start`       | Ejecuta el proyecto compilado           |
| `npm run dev`     | Compila en modo watch (observa cambios) |
| `npm run dev:run` | Compila y ejecuta de una vez            |
| `npm run clean`   | Limpia la carpeta `dist`                |

## 🔧 Funcionalidades Implementadas

### ✅ Conceptos de POO Aplicados

- **Herencia**: `Libro` y `Revista` heredan de `Material`
- **Encapsulamiento**: Propiedades privadas con getters/setters
- **Polimorfismo**: Método `mostrarInfo()` implementado diferente en cada clase
- **Abstracción**: Clase abstracta `Material` con método abstracto
- **Interfaces**: `IBibliotecaItem` e `IUsuario` definen contratos

### 📖 Gestión de Materiales

- Crear libros con título, autor, páginas y género opcional
- Crear revistas con título, autor y número de edición
- Control de disponibilidad de materiales
- Información detallada de cada material

### 👤 Gestión de Usuarios

- Crear usuarios con ID y nombre
- Prestar materiales (solo si están disponibles)
- Ver lista de materiales prestados
- Consultar última prestación realizada

## 💡 Ejemplo de Uso

```typescript
// Crear materiales
const libro = new Libro(1, "El Quijote", "Cervantes", 1200, "Novela");
const revista = new Revista(2, "National Geographic", "Varios", 245);

// Crear usuario
const usuario = new Usuario(1, "Ana García");

// Realizar préstamos
usuario.prestar(libro);
usuario.prestar(revista);

// Ver información
usuario.mostrarPrestados();
usuario.mostrarUltimaPrestacion();

// Polimorfismo
console.log(libro.mostrarInfo()); // Formato específico de Libro
console.log(revista.mostrarInfo()); // Formato específico de Revista
```

## 🎓 Conceptos Técnicos Demostrados

### TypeScript Features

- **Tipado fuerte** en todas las clases y métodos
- **Parámetros opcionales** (`genero?` en Libro)
- **Non-null assertion** (`ultimaPrestacion!`)
- **Readonly properties** (`readonly id`)
- **Modularización** con `import`/`export`

### Patrones de Diseño

- **Template Method**: Clase abstracta `Material`
- **Strategy Pattern**: Diferentes implementaciones de `mostrarInfo()`
- **Encapsulation**: Propiedades privadas con acceso controlado

## 🔍 Preguntas de Investigación Respondidas

### 1. **extends vs implements**

- `extends`: Herencia de clases (una clase hereda de otra)
- `implements`: Implementación de interfaces (una clase cumple un contrato)

### 2. **Ventajas del tipado fuerte**

- Detección temprana de errores
- Mejor IntelliSense y autocompletado
- Refactoring más seguro
- Código autodocumentado

### 3. **Clases abstractas**

- No se pueden instanciar directamente
- Sirven como plantillas para otras clases
- Pueden tener métodos abstractos que deben implementarse

### 4. **Getters y setters**

- Control de acceso a propiedades
- Validación de datos
- Flexibilidad en la implementación interna
- Mejor encapsulamiento

### 5. **Ejemplos de tipado**

```typescript
// Función con parámetros opcionales
function saludar(nombre: string, apellido?: string): string {
  return `Hola ${nombre} ${apellido || ""}`;
}

// Función que retorna Promise
async function obtenerDatos(id: number): Promise<Usuario> {
  return new Promise((resolve) => {
    resolve(new Usuario(id, `Usuario ${id}`));
  });
}
```

## 🛠️ Tecnologías Utilizadas

- **TypeScript 5.0+**: Lenguaje principal
- **Node.js**: Entorno de ejecución
- **ES Modules**: Sistema de módulos moderno
- **Git**: Control de versiones

⭐ **¡No olvides dar una estrella al proyecto si te resultó útil!**
