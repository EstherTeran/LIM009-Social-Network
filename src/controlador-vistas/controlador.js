import { componentes } from "../lib/vistas/exportando.js"
const changeVistas = (route) => {

    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    switch (route) {
        case "#/": { return contenedor.appendChild(componentes.home()) }
        case "#/registro": { return contenedor.appendChild(componentes.registro()) }
        default:
            break;
    }
    console.log(route);
}
export { changeVistas };


