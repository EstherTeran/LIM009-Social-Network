import { funcionRegistrar, funcionLogeoGoogle, funcionObservadorUsuarios, funcionCerrarSesion } from "../controlador-vistas/funcionesfirebase.js"
import { funcionLoguear, funcionFirestoreGuardaDatos, traeDatosGuardadosFirestore, perfilusuario } from "../controlador-vistas/funcionesfirebase.js"

export const registrarUsuariosNuevos = () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email2 = document.getElementById("email2").value;
  const contrasena2 = document.getElementById("contrasena2").value;
  let displayName = nombre + " " + apellido;
  // localStorage.setItem('completeName', displayName);
  let objData = {
    nombreCompleto: displayName,
    correo: email2,
    url: null,
    comentarios: []
  }
  console.log(email2);
  console.log(contrasena2);
  funcionRegistrar(email2, contrasena2)
    .then((user) => {
      console.log("entro la funcion de registrar");
      console.log("user", user);
      funcionFirestoreGuardaDatos("usuarios", email2, objData)
        .then(() => {
          console.log("correct");
          console.log('usuario guardado en firebase');
          console.log(localStorage.getItem('completeName'), 'localStorage')
        })
        .catch((err) => {
          console.log(err, 'no pudo guardarse el usuario en firebase');
        })
    })
    .catch((error) => {
      let errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export let userCorrect = false

export const retornaEmailLogeado = () => {
 const perfil = perfilusuario()
 const emailPerfil = perfil.email;
 return emailPerfil;
}

export const traeDatosYpintaDatos = () => {
  traeDatosGuardadosFirestore("usuarios")
  .then((querySnapshot) => {
    const newMail = retornaEmailLogeado()
    querySnapshot.forEach((doc ) => {
      if (doc.id === newMail ) {
        console.log(doc.data());
        console.log(doc.data().nombreCompleto);
        let dataNombreCompleto = doc.data().nombreCompleto;
        localStorage.setItem('completeName', dataNombreCompleto );
        const nombresUsuarios = document.querySelector("#nombres-usuarios");
        nombresUsuarios.innerHTML = doc.data().nombreCompleto;
      }
    });
  })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log(errorCode, "errorrCode");
     console.log("error", error);
   })
}

export const traerComentarios = () => {
  let newArrTodosComentarios = [];
  traeDatosGuardadosFirestore("comentarios")
  .then((comentarios) => {
    comentarios.forEach((doc) => {
    //  newArrTodosComentarios = doc.data().fecha,
    //   doc.data().nombre,
    //   doc.data().mensajeGuardado
      newArrTodosComentarios.push(doc.data());
    })
    console.log(newArrTodosComentarios , "newArrTodosComentarios" )
 return newArrTodosComentarios;
  })
  .catch((error) => {
    console.log(error , "error catch traer comentarios");
  })
}
traerComentarios()


export const usuariosExistentes = () => {
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;
  
  console.log(email); console.log(contrasena);
  funcionLoguear(email, contrasena)
   .then((user) => { 
  userCorrect = true;
  console.log(user , "user")
  console.log(userCorrect, 'userCorrect then');
  window.location.hash = '#/iniciosesion';
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    const contenedorErrores = document.querySelector("#contenedorErrores");
   if (error.code === "auth/user-not-found") {
      let newMensaje = "No hay registro de usuario correspondiente a este identificador.";
      contenedorErrores.innerHTML = newMensaje;
    }
    else if (error.code === "auth/wrong-password") {
      let newMensaje2 = "La contraseña no es válida";
      contenedorErrores.innerHTML = newMensaje2;
    }
    });
}

export let userExisting = {}

export const observadorUsuarios = (user) => {
  funcionObservadorUsuarios()
  // if (user) {
  //   userExisting = user
  //   console.log(" existe el usuario activo");
  //   // el usuario ha iniciado sesión.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const emailVerified = user.emailVerified;
  //   const photoURL = user.photoURL;
  //   const isAnonymous = user.isAnonymous;
  //   const uid = user.uid;
  //   const providerData = user.providerData;
  //   console.log(user, 'user')
  // } else {
  //   console.log(user, 'user')
  //   userExisting = user
  //   console.log("no existe el usuario activo");
  // }
}
observadorUsuarios();


export const loginGoogle = () => {
  funcionLogeoGoogle()
    .then((result) => {
      // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
      let token = result.credential.accessToken;
      // La información de usuario que ha iniciado sesión.
      let user = result.user;
      let displayName = user.displayName;
      let email = user.email;
      let photoURL = user.photoURL;
      console.log(result.user);
      console.log(photoURL);
      console.log(user.email);
      console.log(user.displayName);

    }).catch((error) => {
      //Manejar los errores aquí.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
      //El correo electrónico de la cuenta del usuario utilizado.
      const email = error.email;
      //El tipo firebase.auth.AuthCredential que se usó.
      const credential = error.credential;
    });
}

export const cerrarSesion = () => {
  funcionCerrarSesion()
    .then(() => {
      console.log('cerrando sesion')
    }).catch((error) => {
      console.log(error, 'error')
    });
}

export const firestoreAgregaDatos = () => {
  let comentaAqui = document.querySelector("#comenta-aqui");
  let textoGuardado = comentaAqui.value;
  const contenedorComentarios = document.getElementById("contenedor-comentarios");
  document.getElementById("comenta-aqui").value = "";
  const content = document.createElement("div")
  let texto = document.createTextNode(textoGuardado);
  content.appendChild(texto);
  contenedorComentarios.appendChild(content);
  console.log("textoGuardado", textoGuardado);
  
  firebase.firestore().collection("comentarios").add({
    nombre: localStorage.getItem('completeName'),
    fecha: new Date,
    mensajeGuardado: textoGuardado
  })
    .then((docRef) => {
      console.log("Documento escrito con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar documento: ", error);
    });
}