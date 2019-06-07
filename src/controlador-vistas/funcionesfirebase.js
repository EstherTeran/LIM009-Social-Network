//funciones de registrar, logear, logueo con google,
//observador de usuarios, cerrar sesion, 
export const funcionRegistrar = (email2, contrasena2) => {
  firebase.auth().createUserWithEmailAndPassword(email2, contrasena2)
}

export const funcionLoguear = (a, b) => {
  firebase.auth().signInWithEmailAndPassword(a, b)
}

export const funcionLogeoGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

export const funcionObservadorUsuarios = () => {
  firebase.auth().onAuthStateChanged((user) => {
if (user) {
  console.log("El usuario ha iniciado sesión" );
}
else {
  console.log("Ningún usuario ha iniciado sesión.");
}
  })
}

export const funcionCerrarSesion = () => {
  firebase.auth().signOut()
}

export const funcionFirestoreGuardaDatos = () => {
  let referenciaColeccionUsuarios = firebase.firestore().collection("usuarios").doc();
   referenciaColeccionUsuarios.set({
        nombreCompleto: displayName,
        correo: email2,
        url: null,
        comentarios: []
      })
}