

export const registrarUsuariosNuevos = () => {
    const email2 = document.getElementById("email2").value;
    const contrasena2 = document.getElementById("contrasena2").value;
    console.log(email);
    console.log(contrasena);
    firebase.auth().createUserWithEmailAndPassword(email2, contrasena2)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

export const usuariosExistentes = () => {
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;
    console.log(email);
    console.log(contrasena);
    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert("contraseña o direccion de correo electronico invalido, vuelve a intentarlo");
        });
}

export const observadorUsuarios = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // el usuario ha iniciado sesión.
            const displayName = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const isAnonymous = user.isAnonymous;
            const uid = user.uid;
            const providerData = user.providerData;

        } else {
            // El usuario está desconectado.
        }
    });
}

export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
            let token = result.credential.accessToken;
            // La información de usuario que ha iniciado sesión.
            let user = result.user;
            let displayName = user.displayName;
            let email = user.email;
            let photoURL = user.photoURL;
            console.log(photoURL);
            console.log(user.email);
            console.log(result.user);
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
