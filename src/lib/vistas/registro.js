import {registrarUsuariosNuevos} from "../../controlador-vistas/funciones.js"
import {cerrarSesion} from "../../controlador-vistas/funciones.js"

export default () => {
    const vistaRegistro = `<div class="contenedor-imagen-nino-burbujas col-xs-12 col-lg-12 ">
    <img src="../../../img/img/slider1.jpg" alt="niño con sindrome de down soplando burbujas de agua"
    class="imagen-nino-con-burbujas">
</div>
<div class="contenedor-registro-arcoiris col-xs-12 col-lg-4">
    <h2>REGISTRO ARCOIRIS</h2>
    <form action="#" class="registro-form col-xs-12">
        <input id="nombre" type="text" placeholder="Nombre" required>
        <input id="apellido" type="text" placeholder="Apellido" required>
        <input id="email2" type="email" placeholder="Email" required>
        <input id="contrasena2" type="password" placeholder="Contraseña" required>
        <input id="confirmcontrasena2" type="password" placeholder="Confirma tu contraseña" required>
        <a href="#/" id="btn-registro"  > Registrarme</a>
    </form>
</div>
    `
    const divElementRegistro = document.createElement("div")
    divElementRegistro.innerHTML = vistaRegistro;
    const btnRegistro = divElementRegistro.querySelector("#btn-registro");
    btnRegistro.addEventListener("click",  registrarUsuariosNuevos);
    //btnRegistro.addEventListener("click", cerrarSesion );
      
    return divElementRegistro;
}