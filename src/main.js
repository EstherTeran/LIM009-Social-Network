// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

import { changeVistas } from "./controlador-vistas/controlador.js"

 export const inicializa = () => {
    changeVistas(window.location.hash)
    window.addEventListener("hashchange", () => changeVistas(window.location.hash))
}
window.addEventListener("load", inicializa);
