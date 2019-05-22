export default () => {
    const vistaInicioSesion = ` <div>
    <textarea placeholder="¿Que deseas compratir?" id="comenta-aqui" cols="50" rows="5"></textarea>
    </div>
    <div>
        <img src="../../../img/img/icono-galeria.jpeg" id="icono-galeria">
        <p>Foto/videos</p>
   
    <button id="btn-comentar">Comentar</button>
    
    </div>
    `
    const divElementInicioSesion = document.createElement("div")
    divElementInicioSesion.innerHTML = vistaInicioSesion;
    return divElementInicioSesion;
}
   

