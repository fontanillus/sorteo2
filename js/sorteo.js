// Array con todos los integrantes que participan en el sorteo.
// Cada objeto tiene el nombre del integrante y el enlace de su repositorio.
const integrantes = [
    { nombre: 'Aya', repo: 'https://github.com/ayaelo9' },
    { nombre: 'Cristian', repo: 'https://github.com/xiles5' },
    { nombre: 'Cyrille', repo: 'https://github.com/cyrille514' },
    { nombre: 'David', repo: 'https://github.com/dayvip369' },
    { nombre: 'Guillermo', repo: 'https://github.com/codeguille98' },
    { nombre: 'Jenifer', repo: 'https://github.com/jenifer-al' },
    { nombre: 'Joelle', repo: 'https://github.com/moussijoelle' },
    { nombre: 'Maximiliam', repo: 'https://github.com/mx-2-d' },
    { nombre: 'Mohammed', repo: 'https://github.com/MohammedZakhbat' },
    { nombre: 'Naomi', repo: 'https://github.com/naomiquitosalazar-cyber' },
    { nombre: 'Natalia', repo: 'https://github.com/nataliya-stack' },
    { nombre: 'Yolanda', repo: 'https://github.com/fontanillus' },
    { nombre: 'Yordano', repo: 'https://github.com/yordano108' }
];

// Clase para representar una revision.
// Guarda quien revisa, a quien revisa y que repositorio debe mirar.
class Evaluadores {
    constructor(revisor, revisado, repositorio) {
        this.revisor = revisor;
        this.revisado = revisado;
        this.repositorio = repositorio;
    }
}


// Esta funcion recibe el resultado del sorteo y lo muestra en el HTML.
const mostrarRevisiones = (revisiones) => {
    // Buscamos el contenedor donde se van a pintar las revisiones.
    const resultado = document.getElementById('resultado');

    // Convertimos cada revision en un bloque HTML y los unimos en un solo texto.
    resultado.innerHTML = revisiones.map((revision) => `
        <div class="mb-3 rounded-lg bg-white/10 p-3 text-left overflow-hidden">
            <p><strong>Revisor:</strong> ${revision.revisor}</p>
            <p><strong>Revisado:</strong> ${revision.revisado}</p>
            <p>
                <strong>Repositorio:</strong>
                <a href="${revision.repositorio}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="underline break-words [overflow-wrap:anywhere]">
                    ${revision.repositorio}
                </a>
            </p>
        </div>
    `).join('');
};

// Guardamos el boton en una constante para poder usarlo despues.
const btnSorteo = document.getElementById('btn-sorteo');

// Funcion principal del programa.
// Se ejecuta cuando el usuario pulsa el boton del sorteo.
const main = () => {
    // crearRevisiones esta en libreria.js y necesita recibir el array integrantes.
    const revisiones = crearRevisiones(integrantes);

    // Mostramos el resultado tambien en la consola para poder comprobarlo.
    console.table(revisiones);

    // Pintamos las revisiones en la pagina.
    mostrarRevisiones(revisiones);
};

// Cuando se hace click en el boton, se ejecuta la funcion main.
btnSorteo.addEventListener('click', main);

/*
¿Cómo sabes que nadie revisa a dos personas?

Porque el array mezclados contiene exactamente los mismos integrantes que el array original,
pero reordenados. Cada integrante aparece una única vez, por lo que cada revisado también
aparece una única vez.
*/
