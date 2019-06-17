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

export const funcionRegistrar = (correo, contrasena) => {
  return firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
}

export const funcionLoguear = (correo, contrasena) => {
 return firebase.auth().signInWithEmailAndPassword(correo, contrasena)
}

export const funcionLogeoGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

export const funcionObservadorUsuarios = () => {
 return firebase.auth().onAuthStateChanged((user) => {
if (user) {
  console.log("El usuario ha iniciado sesión", user );
}
else {
  console.log("Ningún usuario ha iniciado sesión." , user);
}
  })
}

export const funcionCerrarSesion = () => {
 return firebase.auth().signOut()
}

export const funcionFirestoreGuardaDatos = (nombreColeccion, id, obj) => {
return firebase.firestore().collection(nombreColeccion).doc(id).set(obj);
}

export const traeDatosGuardadosFirestore = (nombreDeColeccion) => {
  return firebase.firestore().collection(nombreDeColeccion).get()
}

export const perfilusuario = () => {
  return  firebase.auth().currentUser
}
  













