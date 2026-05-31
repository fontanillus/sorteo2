// NOTA: Las funciones flecha (arrow functions) en JavaScript permiten escribir funciones de forma más concisa. No crean su propio 'this', 'arguments', 'super' ni 'new.target', por lo que son ideales para callbacks y funciones que no requieren su propio contexto.
// contarCaracteres: Devuelve la cantidad de caracteres de un texto
const contarCaracteres = (texto) => {
    return texto.length;
};
// recortarTexto: Devuelve el texto recortado hasta la posición indicada
const recortarTexto = (texto, num) => {
    return texto.slice(0, num);
};


// miFuncion: Repite el texto la cantidad de veces indicada, separado por espacios (versión 1)
const miFuncion = (texto, veces) => {
    return Array(veces).fill(texto).join(' ');
}

// repetirTexto: Repite el texto la cantidad de veces indicada, separado por espacios (versión 2)
const repetirTexto = (texto, veces) => {
    return (texto + ' ').repeat(veces).trim();
};

// invertirString: Invierte el texto recibido
const invertirString = (texto) => {
    let invertido = '';
    // Recorre el string de atrás hacia adelante
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
};

// contarPalabra: Cuenta cuántas veces aparece una palabra exacta en el texto
const contarPalabra = (texto, palabra) => {
    let contador = 0;
    const palabras = texto.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra) {
            contador++;
        }
    }
    return contador;
};


// Devuelve un objeto con el conteo de cada palabra en el texto
const contarPalabras = (texto) => {
    const palabras = texto.match(/\w+/g) || [];
    const conteo = {};
    for (const palabra of palabras) {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
    }
    return conteo;
};

// Devuelve solo las palabras que se repiten en el texto y cuántas veces
const contarPalabrasRepetidas = (texto) => {
    const palabras = (texto.match(/\w+/g) || []).map(p => p.toLowerCase());
    const conteo = {};
    for (const palabra of palabras) {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
    }
    // Filtrar solo las que se repiten
    const repetidas = Object.entries(conteo).filter(([palabra, cantidad]) => cantidad > 1);
    return repetidas.length > 0 ? repetidas.map(([palabra, cantidad]) => `${palabra}: ${cantidad} veces`) : null;
};

// Valida si una palabra o frase es un palíndromo (se lee igual al derecho y al revés)
const esPalindromo = (texto) => {
    const limpio = texto
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita tildes
        .replace(/[^a-z0-9]/g, ""); // solo letras y números
    return limpio === limpio.split('').reverse().join('');
}; 

// Elimina todas las ocurrencias de un patrón en un texto dado
const eliminarPatron = (texto, patron) => {
    if (typeof texto !== 'string' || typeof patron !== 'string') return texto;
    // Usar expresión regular global y escape de caracteres especiales
    const patronEscapado = patron.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(patronEscapado, 'g');
    return texto.replace(regex, '');
}

// Devuelve un número aleatorio entre 501 y 600 (ambos inclusive)
const obtenerNumeroAleatorio = () => {
    const min = 501;
    const max = 600;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Convierte grados entre Celsius y Fahrenheit
const convertirTemperatura = (grados, unidad) => {
    if (unidad === 'C') {
        return (grados * 9 / 5) + 32;
    } else {
        return (grados - 32) * 5 / 9;
    }
};

const separarTexto = (texto, caracter) => {

    return texto
        .split(caracter)
        .map((elemento) => elemento.trim())
        .filter((elemento) => elemento !== '');
};
const mezclar = (array) => {
    const copia = array.slice();

    for (let i = copia.length - 1; i > 0; i--) {
        const aleatorio = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[aleatorio]] = [copia[aleatorio], copia[i]];
    }

    return copia;
};

const crearRevisiones = (integrantes) => {
    const revisiones = integrantes.map((integrante) => ({
        revisor: integrante.nombre,
        revisado: null,
        repositorio: null
    }));

    let asignacionValida = false;
    let mezclados = [];

    while (!asignacionValida) {
        mezclados = mezclar(integrantes);
        asignacionValida = true;

        for (let i = 0; i < integrantes.length; i++) {
            if (integrantes[i].nombre === mezclados[i].nombre) {
                asignacionValida = false;
                break;
            }
        }
    }

    for (let i = 0; i < revisiones.length; i++) {
        revisiones[i].revisado = mezclados[i].nombre;
        revisiones[i].repositorio = mezclados[i].repo;
    }

    return revisiones;
};