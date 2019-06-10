//funciones de registrar, logear, logueo con google,
//observador de usuarios, cerrar sesion, 
const firebaseConfig = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBI_qBSPS4R8aAy8OajudvOT_WeM4OsjHs",
    authDomain: "social-network-2c338.firebaseapp.com",
   databaseURL: "https://social-network-2c338.firebaseio.com",
   projectId: "social-network-2c338",
   storageBucket: "social-network-2c338.appspot.com",
   messagingSenderId: "346294194989",
   appId: "1:346294194989:web:51fa397c96b901db"
 };
   // Inicializar Firebase
 firebase.initializeApp(firebaseConfig);
}
firebaseConfig()

export const funcionRegistrar = (email2, contrasena2) => {
  debugger
  console.log("email", email2)
  console.log("contrasena2", contrasena2)
  firebase.auth().createUserWithEmailAndPassword(email2, contrasena2)
  .then(() => {
    console.log("then funcion registrar")
  })
  .catch(() => {
    console.log("catch funcion registrar")
  })
}

export const funcionLoguear = (email, contrasena) => {
  firebase.auth().signInWithEmailAndPassword(email, contrasena)
  .then((user) => {
    console.log("funciona loguear" , user)
  })
.catch((error) => {
  console.log("catch " , error);
})
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
 firebase.firestore().collection(nombreColeccion).doc(id).set(obj);
}















