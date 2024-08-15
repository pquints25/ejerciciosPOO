import Zoologico from "./zoologico.js";
import Tigre from "./tigre.js";
import Gaviota from "./gaviota.js";
import Vaca from "./vaca.js";
import Jirafa from "./jirafa.js";
import Leon from "./leon.js";

const zoologico = new Zoologico(1, 'El Zoologico', []);

const animalesIniciales = [
    new Tigre(1, 'Tigre de Bengala', 5, 300),
    new Leon(2, 'Leon Africano', 4, 250),
    new Gaviota(3, 'Gaviota Comun', 2, 10),
    new Vaca(4, 'Vaca Lechera', 6, 300),
    new Jirafa(5, 'Jirafa Masai', 9, 200),
];

animalesIniciales.forEach(animal => zoologico.agregarAnimal(animal));

document.addEventListener('DOMContentLoaded', () => {
    animalesDOM();
    configurarEventos();
});

function animalesDOM() {
    const contenedor = document.getElementById('animal-contenedor');
    contenedor.innerHTML = '';

    zoologico.listaAnimales().forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.classList.add('animal');

        const nombre = document.createElement('h2');
        nombre.textContent = `${animal.constructor.name}: ${animal.descripcion}`;
        animalDiv.appendChild(nombre);

        const desplazamiento = document.createElement('p');
        desplazamiento.textContent = `Desplazamiento: ${animal.desplazarse()}`;
        animalDiv.appendChild(desplazamiento);

        const alimentarse = document.createElement('p');
        alimentarse.textContent = `Alimentación: ${animal.alimentarse()}`;
        animalDiv.appendChild(alimentarse);

        contenedor.appendChild(animalDiv);
    });
}

function buscarAnimalDOM(idAnimal) {
    const animalBuscado = zoologico.buscarAnimal(idAnimal);
    const contenedor = document.getElementById('animal-buscado');
    contenedor.innerHTML = '';

    if (animalBuscado) {
        const animalDiv = document.createElement('div');
        animalDiv.classList.add('animal');

        const nombre = document.createElement('h2');
        nombre.textContent = `${animalBuscado.constructor.name}: ${animalBuscado.descripcion}`;
        animalDiv.appendChild(nombre);

        const desplazamiento = document.createElement('p');
        desplazamiento.textContent = `Desplazamiento: ${animalBuscado.desplazarse()}`;
        animalDiv.appendChild(desplazamiento);

        const alimentarse = document.createElement('p');
        alimentarse.textContent = `Alimentación: ${animalBuscado.alimentarse()}`;
        animalDiv.appendChild(alimentarse);

        contenedor.appendChild(animalDiv);
    } else {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'Animal no encontrado';
        contenedor.appendChild(mensaje);
    }
}

function configurarEventos() {
    document.getElementById('animal-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const tipo = document.getElementById('animal-type').value;
        const id = parseInt(document.getElementById('animal-id').value);
        const descripcion = document.getElementById('animal-description').value;
        const comida = document.getElementById('animal-food').value;
        const velocidad = parseInt(document.getElementById('animal-speed').value);

        let animalNuevo;
        switch (tipo) {
            case 'Tigre':
                animalNuevo = new Tigre(id, descripcion, comida, velocidad);
                break;
            case 'Gaviota':
                animalNuevo = new Gaviota(id, descripcion, comida, velocidad);
                break;
            case 'Leon':
                animalNuevo = new Leon(id, descripcion, comida, velocidad);
                break;
            case 'Vaca':
                animalNuevo = new Vaca(id, descripcion, comida, velocidad);
                break;
            case 'Jirafa':
                animalNuevo = new Jirafa(id, descripcion, comida, velocidad);
                break;
            default:
                console.error('Tipo de animal desconocido');
                return;
        }

        zoologico.agregarAnimal(animalNuevo);
        animalesDOM();
        document.getElementById('animal-form').reset();
    });

    document.getElementById('search-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const id = parseInt(document.getElementById('search-id').value);
        buscarAnimalDOM(id);
    });

    document.getElementById('remove-animal').addEventListener('click', () => {
        zoologico.quitarAnimal(2);
        animalesDOM();
    });

    document.getElementById('show-desplazamiento').addEventListener('click', () => {
        animalesDOM();
    });

    document.getElementBy
}
