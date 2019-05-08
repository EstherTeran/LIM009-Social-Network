// aqui exportaras las funciones que necesites

//export const myFunction = () => {
// aqui tu codigo
//}

const iniciarSesion = document.getElementById("iniciar-sesion");
iniciarSesion.addEventListener("click", () => {
  console.log('click')
  const registrar = () => {
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
      .catch((error) => {
        // Manejar los errores aquí.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(errorMessage == 'The email address is already in use by another account.', 'mundo')
        if (errorMessage == 'The email address is already in use by another account.') {
          let newMessage = 'El email ya esta registrado, INICIA SESION';
          alert(newMessage)
        }
        else if (errorMessage == "The password must be 6 characters long or more.") {
          let contrasenaMasSeisCaracteres = "La contraseña debe tener 6 caracteres o más.";
          alert(contrasenaMasSeisCaracteres);
        }
      });
  }
  registrar();
})

const google = document.getElementById("google");
google.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    //Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
    var token = result.credential.accessToken;
    // La información de usuario que ha iniciado sesión.
    var user = result.user;
    let displayName = user.displayName;
    let email = user.email;
    let photoURL = user.photoURL;
    console.log(photoURL);
    console.log(user.email);
    //console.log(result.user);
    console.log(user.displayName);
  }).catch((error) => {
    //Manejar los errores aquí.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message);
    //El correo electrónico de la cuenta del usuario utilizado.
    var email = error.email;
    //El tipo firebase.auth.AuthCredential que se usó.
    var credential = error.credential;
  });
})




