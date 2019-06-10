import { funcionRegistrar, funcionLogeoGoogle, funcionObservadorUsuarios, funcionCerrarSesion } from "../controlador-vistas/funcionesfirebase.js"
import { funcionLoguear, funcionFirestoreGuardaDatos } from "../controlador-vistas/funcionesfirebase.js"

//   const firebaseConfig = () => {
//    const firebaseConfig = {
//      apiKey: "AIzaSyBI_qBSPS4R8aAy8OajudvOT_WeM4OsjHs",
//      authDomain: "social-network-2c338.firebaseapp.com",
//     databaseURL: "https://social-network-2c338.firebaseio.com",
//     projectId: "social-network-2c338",
//     storageBucket: "social-network-2c338.appspot.com",
//     messagingSenderId: "346294194989",
//     appId: "1:346294194989:web:51fa397c96b901db"
//   };
//     // Inicializar Firebase
//   firebase.initializeApp(firebaseConfig);
//  }
// firebaseConfig()

export const registrarUsuariosNuevos = () => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email2 = document.getElementById("email2").value;
  const contrasena2 = document.getElementById("contrasena2").value;
  let displayName = nombre + " " + apellido;
  localStorage.setItem('completeName', displayName);
  let objData = {
    nombreCompleto: displayName,
    correo: email2,
    url: null,
    comentarios: []
  }
  console.log(localStorage.getItem('completeName'), 'localStorage')
  console.log(email2);
  console.log(contrasena2);
  funcionRegistrar(email2, contrasena2)
    .then((user) => {
      funcionFirestoreGuardaDatos("usuarios", email2, objData)
        // let referenciaDoc = firebase.firestore().collection("usuarios").doc(email2);
        // referenciaDoc.set({
        //   nombreCompleto: displayName,
        //   correo: email2,
        //   url: null,
        //   comentarios: []
        // })
        .then((docRef) => {
          console.log(docRef, 'correct')
          console.log('usuario guardado en firebase')
        })
        .catch((err) => {
          console.log(err, 'no pudo guardarse el usuario en firebase')
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

export const usuariosExistentes = () => {
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;
  console.log(email); console.log(contrasena);
  funcionLoguear(email, contrasena)
  // .then((user) => {
  userCorrect = true;
  firebase.firestore().collection("usuarios").get()
    .then((querySnapshot) => {
      console.log(querySnapshot, "querySnapshot")
      querySnapshot.forEach((doc) => {
        if (doc.id === email) {
          console.log(doc.data());
          console.log(doc.data().nombreCompleto);
          const nombresUsuarios = document.querySelector("#nombres-usuarios");
          nombresUsuarios.innerHTML = doc.data().nombreCompleto;
          console.log("nombresUsuarios", nombresUsuarios)
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "errorrCode");
      console.log("error", error);
    })
  console.log(userCorrect, 'userCorrect then');
  window.location.hash = '#/iniciosesion';
  //  })
  //  .catch((error) => {
  //  const errorCode = error.code;
  //  const errorMessage = error.message;
  //  console.log(error);
  //  const contenedorErrores = document.querySelector("#contenedorErrores");
  //  if (error.code === "auth/user-not-found") {
  //    let newMensaje = "No hay registro de usuario correspondiente a este identificador.";
  //    contenedorErrores.innerHTML = newMensaje;
  //  }
  //  else if (error.code === "auth/wrong-password") {
  //    let newMensaje2 = "La contraseña no es válida";
  //    contenedorErrores.innerHTML = newMensaje2;
  //  }
  //  });
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
      // Sign-out successful.
      console.log('cerrando sesion')

    }).catch((error) => {
      // An error happened.
      console.log(error, 'error')
    });
}
export const firestoreAgregaDatos = () => {
  let comentaAqui = document.querySelector("#comenta-aqui");
  let textoGuardado = comentaAqui.value;
  const contenedorComentarios = document.getElementById("contenedor-comentarios");
  document.getElementById("comenta-aqui").value = "";
  const content = document.createElement("div")
  // let parrafo = document.createElement("p")
  let texto = document.createTextNode(textoGuardado);
  content.appendChild(texto);
  contenedorComentarios.appendChild(content);
  console.log("textoGuardado", textoGuardado);
  firebase.firestore().collection("comentarios").add({
    status: textoGuardado
  })
    .then((docRef) => {
      console.log("Documento escrito con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar documento: ", error);
    });
  // test.firestore.js
  // console.log(test.firestore.js, "test.firestore.js");
}

export const firestoreTraeDatos = () => {
  firebase.firestore().collection("comentarios").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
}