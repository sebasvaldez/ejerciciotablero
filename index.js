// Función para crear la matriz que usaré como tablero
const crearTablero = () => {
  let tablero = [];
  for (let i = 0; i < 7; i++) {
    tablero[i] = [];
    for (let j = 0; j < 7; j++) {
        
      if (i % 2 == 0 && j % 2 == 0) {
        tablero[i][j] = "rojo";
      } else if (i % 2 == 0 && j % 2 != 0) {
        tablero[i][j] = "azul";
      } else if (i % 2 != 0 && j % 2 == 0) {
        tablero[i][j] = "azul";
      } else {
        tablero[i][j] = "rojo";
      }
    }
  }

  return tablero;
};

const tableroDePrueba = crearTablero();
console.log(tableroDePrueba)

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
console.log(resp);

// Función para pintar el tablero

const pintarTablero = (tablero) => {
  const contenedorTablero = document.getElementById("container");
  const tabla = document.createElement("table");

  for (let i = 0; i < tablero.length; i++) {
    const fila = document.createElement("tr");

    for (let j = 0; j < tablero[i].length; j++) {
      const celda = document.createElement("td");
      celda.textContent = i + 1; // Etiqueta cada celda con su posición
      celda.classList.add(tablero[i][j]);
      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  contenedorTablero.appendChild(tabla);
};


//crearTableroHTML(tableroEjemplo)
//Verificamos si es posible colorear el tablero y lo mostramos en HTML
if (esPosibleColorearTablero(tableroDePrueba)) {
  pintarTablero(tableroDePrueba);
  console.log(
    "El tablero se coloreó correctamente de acuerdo a las especificaciones."
  );
} else {
  console.log("No es posible colorear el tablero según las restricciones.");
}
