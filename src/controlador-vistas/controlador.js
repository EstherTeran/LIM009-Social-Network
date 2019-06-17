import { componentes } from "../lib/vistas/exportando.js"
import { userExisting, userCorrect, traeDatosYpintaDatos } from "./funciones.js"
import {funcionCerrarSesion} from "./funcionesfirebase.js"

 const changeVistas = (route) => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    switch (route) {
        case "#/":
        funcionCerrarSesion();
        { return contenedor.appendChild(componentes.home()) }
        
        case "#/registro": 
          { return contenedor.appendChild(componentes.registro()) }
        case "#/iniciosesion" :

        if (userExisting || userCorrect) {
          traeDatosYpintaDatos()
         {return contenedor.appendChild(componentes.iniciosesion()) }
        }
        else {
          { return contenedor.appendChild(componentes.home()) }
        }
        default:
        break;
    }
}
export { changeVistas };



