

export const sdkFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBI_qBSPS4R8aAy8OajudvOT_WeM4OsjHs",
        authDomain: "social-network-2c338.firebaseapp.com",
        databaseURL: "https://social-network-2c338.firebaseio.com",
        projectId: "social-network-2c338",
        storageBucket: "social-network-2c338.appspot.com",
        messagingSenderId: "346294194989",
        appId: "1:346294194989:web:51fa397c96b901db"
    };
//Inicializar Firebase
firebase.initializeApp(firebaseConfig);

  } ;
  window.onload = () => {
    sdkFirebase();
  }