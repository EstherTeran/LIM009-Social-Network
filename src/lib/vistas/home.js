  import { usuariosExistentes } from "../../controlador-vistas/funciones.js"
  import {loginGoogle} from "../../controlador-vistas/funciones.js"
  import {observadorUsuarios} from "../../controlador-vistas/funciones.js"
  
export default () => {
    const vistaHome = ` <div class="float-left col-xs-6 col-xs-12">
    <img src="../../../img/img/arcoiris10.jpg" class="img-bebes-arco"
      alt="La discapacidad no te impide que seas feliz, todos podemos ser felices.">
  </div>
  <div class="float-right col-xs-4">
   
    <div class="formulario">
      <h2>Iniciar Sesion</h2>
      <form action="#">
        <input id="email" type="email" placeholder="email" required>
        <input type="password" id="contrasena" placeholder="Contraseña" required>
        <a id="iniciar-sesion" type="buttom">Iniciar Sesion</a>
        <div>
        <span id="contenedorErrores"></span>
        </div>
        <div class="icon-facebook-google">
          <p>O bien ingresa con...</p>
          <a href="#" id="google">
            <img alt="Registrate con Google" src="../../../img/img/google (1).png" title="Registrate con Google"
              class="icon-google-facebook" />
              </a>
            <p>¿No tienes una cuenta?</p>
            <a href="#/registro">Registrate Aqui</a>
            
        </div>
    </div>
    </form>
  </div>
    `
 const divElement = document.createElement("div")
 divElement.innerHTML = vistaHome; 
   const botonIniciarSesion = divElement.querySelector("#iniciar-sesion");
  botonIniciarSesion.addEventListener("click", usuariosExistentes);
  const  google = divElement.querySelector("#google");
  google.addEventListener("click", loginGoogle);
 return divElement;
}