import { firestoreAgregaDatos } from "../../controlador-vistas/funciones.js"
import {traerComentarios} from "../../controlador-vistas/funciones.js"
export default () => {
    const vistaInicioSesion = `
    <div>
    <nav>
    <ul class="navegador">
    <li><a href="#/" > usuario </a></li>
    <li><a href="#/" class="cerrar-sesion"> Cerrar Sesion </a></li>
    </ul>
    </nav>
    </div>
    <div id="contenedor-usuario">
    <img src="../../../img/img/usuario.jpg"  alt="imagen de un arcoiris" class="img-usuario">
    <div id="datos-usuarios">
  <p id="nombres-usuarios"></p>
    </div>
    <div id="foto-usuario">
    <img src="">
    </div>

    </div>
    <div>
    <input placeholder="¿Que deseas compratir?" id="comenta-aqui"></input>
</div>
<div class="contenedor-imagenes">
    <img src="../../../img/img/icono-galeria.jpeg" class="icono galeria">
    <p>Foto/videos</p>
    <img src="../../../img/img/basura.png" class="icono tacho-basura">
    <p>Eliminar</p>
    <img src="../../../img/img/editar.png" class="icono editar">
    <p>Editar</p>
    <button id="btn-comentar">Comentar</button>
</div>
<div>
<div id="contenedor-comentarios"></div>
</div>

`
    const divElementInicioSesion = document.createElement("div")
    divElementInicioSesion.innerHTML = vistaInicioSesion;
    let btnComentar = divElementInicioSesion.querySelector("#btn-comentar");
    btnComentar.addEventListener("click", () => {
        firestoreAgregaDatos();
    });
    return divElementInicioSesion;
}
