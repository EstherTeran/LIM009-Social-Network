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
        <button id="iniciar-sesion">Iniciar Sesion</button>
        <div class="icon-facebook-google">
          <p>O bien ingresa con...</p>
          <a href="#" id="google">
            <img alt="Registrate con Google" src="../../../img/img/google (1).png" title="Registrate con Google"
              class="icon-google-facebook" />
            <p>¿No tienes una cuenta?</p>
            <a href="#/registro">Registrate Aqui</a>
        </div>
    </div>
    </form>
  </div>
    `
 const divElement = document.createElement("div")
 divElement.innerHTML = vistaHome; 
 return divElement;
}