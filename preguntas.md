## Preguntas de Investigación Respondidas

### **1. ¿Qué diferencia existe entre extends e implements en TypeScript?**

**`extends` (Herencia):**

- Se usa para crear una clase que hereda de otra clase
- La clase hija obtiene todas las propiedades y métodos de la clase padre
- Puede sobrescribir métodos del padre (polimorfismo)
- Solo puede heredar de UNA clase

```typescript
class Animal {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  raza: string;
  constructor(nombre: string, raza: string) {
    super(nombre);
    this.raza = raza;
  }
  hacerSonido(): void {
    console.log("Guau!");
  } // Override
}
```

**`implements` (Implementación de interfaces):**

- Se usa para que una clase cumpla con un contrato (interfaz)
- La clase DEBE implementar todos los métodos y propiedades de la interfaz
- Puede implementar MÚLTIPLES interfaces
- No hereda implementación, solo define la estructura

```typescript
interface IVolar {
  altitudMaxima: number;
  volar(): void;
}

interface INadar {
  profundidadMaxima: number;
  nadar(): void;
}

class Pato implements IVolar, INadar {
  altitudMaxima = 1000;
  profundidadMaxima = 10;

  volar(): void {
    console.log("El pato vuela");
  }
  nadar(): void {
    console.log("El pato nada");
  }
}
```

### **2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?**

- **🔍 Detección temprana de errores**: Los errores se detectan en tiempo de compilación, no en ejecución
- **💡 IntelliSense mejorado**: Autocompletado preciso y sugerencias inteligentes en el IDE
- **🔄 Refactoring seguro**: Los cambios se propagan automáticamente y se detectan inconsistencias
- **📖 Documentación implícita**: El código es más autodocumentado y fácil de entender
- **🛡️ Mayor confiabilidad**: Reduce bugs relacionados con tipos incorrectos
- **👥 Mejor colaboración**: Otros desarrolladores entienden mejor el código
- **⚡ Optimización**: El compilador puede optimizar mejor el código

```typescript
// Sin tipado - propenso a errores
function calcular(a, b, operacion) {
  if (operacion === "suma") return a + b;
  if (operacion === "resta") return a - b;
  // ¿Qué pasa si paso strings? ¿O null?
}

// Con tipado fuerte - seguro y claro
function calcular(a: number, b: number, operacion: "suma" | "resta"): number {
  if (operacion === "suma") return a + b;
  if (operacion === "resta") return a - b;
  throw new Error("Operación no válida");
}
```

### **3. ¿Qué significa que una clase sea abstracta?**

Una clase abstracta es una clase que:

- **❌ No puede ser instanciada directamente** - Solo sirve como plantilla
- **🏗️ Define una estructura base** para otras clases
- **📋 Puede tener métodos abstractos** (sin implementación) que las clases hijas DEBEN implementar
- **🔧 Puede tener métodos concretos** que las clases hijas pueden usar o sobrescribir
- **🎯 Garantiza polimorfismo** - Todas las clases hijas tendrán los métodos abstractos

```typescript
abstract class Vehiculo {
  protected marca: string;
  protected modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  // Método concreto - todas las clases hijas lo heredan
  mostrarInfo(): string {
    return `${this.marca} ${this.modelo}`;
  }

  // Método abstracto - cada clase hija DEBE implementarlo
  abstract acelerar(): void;
  abstract frenar(): void;
}

class Auto extends Vehiculo {
  acelerar(): void {
    console.log("El auto acelera con el pedal");
  }
  frenar(): void {
    console.log("El auto frena con el pedal");
  }
}

class Bicicleta extends Vehiculo {
  acelerar(): void {
    console.log("La bici acelera pedaleando");
  }
  frenar(): void {
    console.log("La bici frena con las manijas");
  }
}

// ❌ Error: No se puede instanciar
// const vehiculo = new Vehiculo("Toyota", "Corolla");

// ✅ Correcto: Instanciar clases hijas
const auto = new Auto("Toyota", "Corolla");
const bici = new Bicicleta("Trek", "Mountain");
```

### **4. ¿Por qué conviene usar getters y setters para el encapsulamiento?**

Los getters y setters ofrecen múltiples ventajas:

- **🔐 Control de acceso**: Permiten validar datos antes de asignar valores
- **🛡️ Protección de datos**: Evitan modificaciones no deseadas
- **🔄 Flexibilidad**: Pueden ejecutar lógica adicional al obtener/asignar
- **📊 Logging y debugging**: Permiten rastrear accesos a propiedades
- **🎭 Transparencia**: Se usan como propiedades normales pero con lógica interna
- **🔧 Compatibilidad**: Si cambia la implementación interna, la interfaz pública se mantiene

```typescript
class Persona {
  private _edad: number = 0;
  private _nombre: string = "";

  // Getter - control al obtener el valor
  get edad(): number {
    console.log(`Accediendo a la edad: ${this._edad}`);
    return this._edad;
  }

  // Setter - validación al asignar el valor
  set edad(valor: number) {
    if (valor < 0 || valor > 150) {
      throw new Error("Edad debe estar entre 0 y 150");
    }
    console.log(`Cambiando edad de ${this._edad} a ${valor}`);
    this._edad = valor;
  }

  get nombre(): string {
    return this._nombre.toUpperCase(); // Transformación automática
  }

  set nombre(valor: string) {
    if (valor.trim().length === 0) {
      throw new Error("El nombre no puede estar vacío");
    }
    this._nombre = valor.trim();
  }
}

const persona = new Persona();
persona.edad = 25; // Usa el setter - valida automáticamente
console.log(persona.edad); // Usa el getter - registra el acceso
```

### **5. Ejemplificar cómo tipar:**

#### **a. Una función con parámetros obligatorios y opcionales:**

```typescript
// Función básica con parámetros opcionales
function saludar(
  nombre: string, // Obligatorio
  apellido?: string, // Opcional con ?
  edad: number = 18 // Opcional con valor por defecto
): string {
  const apellidoTexto = apellido ? ` ${apellido}` : "";
  return `Hola ${nombre}${apellidoTexto}, tienes ${edad} años`;
}

// Ejemplos de uso
console.log(saludar("Juan")); // "Hola Juan, tienes 18 años"
console.log(saludar("Juan", "Pérez")); // "Hola Juan Pérez, tienes 18 años"
console.log(saludar("Juan", "Pérez", 25)); // "Hola Juan Pérez, tienes 25 años"

// Función más compleja con diferentes tipos de parámetros
function crearUsuario(
  nombre: string, // Obligatorio
  email: string, // Obligatorio
  edad?: number, // Opcional
  hobbies: string[] = [], // Array opcional con default
  configuracion: {
    // Objeto opcional
    tema?: "claro" | "oscuro";
    notificaciones?: boolean;
  } = {}
): { id: number; nombre: string; email: string; edad?: number } {
  return {
    id: Math.random(),
    nombre,
    email,
    edad,
    // ...resto de propiedades
  };
}
```

#### **b. Una función que devuelve una Promise:**

```typescript
// Promise básica con tipo específico
async function obtenerUsuario(
  id: number
): Promise<{ id: number; nombre: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: `Usuario ${id}` });
      } else {
        reject(new Error("ID debe ser mayor a 0"));
      }
    }, 1000);
  });
}

// Promise con tipos genéricos
async function obtenerDatos<T>(
  url: string,
  transformador: (data: any) => T
): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return transformador(data);
}

// Promise que puede fallar - Union types
async function buscarLibro(titulo: string): Promise<Libro | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const encontrado = Math.random() > 0.5;
      if (encontrado) {
        resolve(new Libro(1, titulo, "Autor", 200));
      } else {
        resolve(null);
      }
    }, 500);
  });
}

// Promise con múltiples posibles resultados
type ResultadoBusqueda =
  | {
      exito: true;
      datos: Libro[];
    }
  | {
      exito: false;
      error: string;
    };

async function buscarLibros(query: string): Promise<ResultadoBusqueda> {
  try {
    // Simular búsqueda
    const libros: Libro[] = [];
    return { exito: true, datos: libros };
  } catch (error) {
    return { exito: false, error: "Error en la búsqueda" };
  }
}

// Uso de las funciones async
async function ejemploUso() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario.nombre);

    const libro = await buscarLibro("El Quijote");
    if (libro) {
      console.log(libro.mostrarInfo());
    } else {
      console.log("Libro no encontrado");
    }

    const resultado = await buscarLibros("aventura");
    if (resultado.exito) {
      console.log(`Encontrados ${resultado.datos.length} libros`);
    } else {
      console.log(`Error: ${resultado.error}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
```
