# Lab: Creando el Objeto Bird

## Objetivos
- Crear un objeto con propiedades y métodos


## Introducción
Hemos aprendido que los objetos son una colección de propiedades. Una propiedad es una asociación entre un nombre y un valor. El valor de la propiedad de un objeto puede ser una función. Cuando ésto sucede, la propiedad es conocida como un método. Por ejemplo

```
const motocicleta = {
    color: "rojo",
    modelo: 870,
    acelera: function() {
        console.log("ruuuun ruun estoy acelerando!")
    }
}
```

Es hora de poner en práctica nuestros aprendizajes. 

### Funcionalidad del Código

En éste lab crearás un objeto `bird`.

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 


1. Crea un objeto `bird`.

2. Agrega al objeto `bird` una propiedad `birdBottom` con valor del número `500`

3. Agreaga al objeto `bird` una propiedad `div`. El valor de la propiedad `div` debe ser el elemento con clase `.bird`. 

**Pista: utiliza `document.querySelector()`**

4. Agrega al objeto `bird` un método `dibujar`. El método `dibujar` debe:

- Asignar un valor de `'250px'` a la propiedad `left` del elemento con clase `.bird` . 
- Asignar el valor de `birdBottom` a la propiedad `bottom` del elemento con clase `.bird`. Incluir '`px'` después del valor de `birdBottom`. 

**Pista: el elemento con clase `.bird` esta almacenado dentro de la propiedad `div` del objeto `bird`. Por lo tanto puedes acceder al elemento con clase `.bird` utiliando el código `bird.div`**

5. Agrega al objeto `bird` un método `mover`. El método `mover` debe:

- Incrementar el valor de la propiedad `birdBottom` por `40`
- Asignar el nuevo valor de `birdBottom` a la propiedad `bottom` del elemento con clase `.bird`. Incluir '`px'` después del valor de `birdBottom`. 

6. Agrega al objeto `bird ` un método  `colision`. El método debe de devolver (`return`) el valor `true` si el valor de la propiedad `birdBottom` de bird es menor a `0`



