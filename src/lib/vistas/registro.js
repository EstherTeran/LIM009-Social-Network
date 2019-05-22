export default () => {
    const vistaRegistro = `<div class="contenedor-imagen-nino-burbujas col-xs-12 col-lg-12 ">
    <img src="../../../img/img/slider1.jpg" alt="niño con sindrome de down soplando burbujas de agua"
    class="imagen-nino-con-burbujas">
</div>
<div class="contenedor-registro-arcoiris col-xs-12 col-lg-4">
    <h2>REGISTRO ARCOIRIS</h2>
    <form action="#" class="registro-form col-xs-12">
        <input id="nombre" type="text" placeholder="Nombre">
        <input id="apellido" type="text" placeholder="Apellido">
        <input id="email2" type="email" placeholder="Email">
        <input id="contrasena2" type="password" placeholder="Contraseña">
        <input id="confirmcontrasena2" type="password" placeholder="Confirma tu contraseña">
        <button  id="btn-registro">Registrarme</button>
    </form>
</div>
    `
    const divElementRegistro = document.createElement("div")
    divElementRegistro.innerHTML = vistaRegistro;
    return divElementRegistro;
}