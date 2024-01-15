// Función para crear la matriz que usaré como tablero
const crearTablero = (size) => {
  // Declaramos las variables
  let tablero = [];
  let colorActual = "rojo";

  // Inicializamos el tablero
  for (let i = 0; i < size; i++) {
    tablero[i] = [];
    for (let j = 0; j < size; j++) {
      tablero[i].push(colorActual);
    }
  }

  // Cambiamos el color de los bordes
  for (let i = 0; i < size; i++) {
    tablero[i][0] = "azul";
    tablero[i][size - 1] = "azul";
    tablero[0][i] = "azul";
    tablero[size - 1][i] = "azul";
  }

  // Alternemos los colores de los cuadros interiores
  for (let i = 1; i < size - 1; i++) {
    for (let j = 1; j < size - 1; j++) {
      tablero[i][j] = colorActual === "rojo" ? "azul" : "rojo";
    }
    colorActual = colorActual === "rojo" ? "azul" : "rojo";
  }

  // Devolvemos el tablero coloreado
  return tablero;
};

const tableroDePrueba = crearTablero(8);
console.log(tableroDePrueba);

// Función para verificar si es posible colorear el tablero según las restricciones
function esPosibleColorearTablero(tablero) {
  // Verificar filas
  for (let fila = 0; fila < tablero.length; fila++) {
    const cantidadRojo = tablero[fila].filter(
      (color) => color === "rojo"
    ).length;
    const cantidadAzul = tablero[fila].length - cantidadRojo;

    if (cantidadRojo === cantidadAzul) {
      return false;
    }
  }

  // Verificar columnas
  for (let columna = 0; columna < tablero.length; columna++) {
    const cantidadRojo = tablero
      .map((fila) => fila[columna])
      .filter((color) => color === "rojo").length;
    const cantidadAzul = tablero.length - cantidadRojo;

    if (cantidadRojo === cantidadAzul) {
      return false;
    }
  }

  return true;
}

const resp = esPosibleColorearTablero(tableroDePrueba);
//console.log(resp);

// Función para pintar el tablero

const pintarTablero = (tablero) => {
  const contenedorTablero = document.getElementById("container");
  const tabla = document.createElement("table");

  for (let i = 0; i < tablero.length; i++) {
    const fila = document.createElement("tr");

    for (let j = 0; j < tablero[i].length; j++) {
      const celda = document.createElement("td");

      celda.classList.add(tablero[i][j]);
      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  contenedorTablero.appendChild(tabla);
};

//Verificamos si es posible colorear el tablero y lo mostramos en HTML
if (esPosibleColorearTablero(tableroDePrueba)) {
  pintarTablero(tableroDePrueba);
  console.log(
    "El tablero se coloreó correctamente de acuerdo a las especificaciones."
  );
} else {
  console.log("No es posible colorear el tablero según las restricciones.");
}
