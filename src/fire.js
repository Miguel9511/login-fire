import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCLJEaqC8ZNjkglar2QiQPFv6NvDKd1Tvg",
    authDomain: "login-c56fb.firebaseapp.com",
    projectId: "login-c56fb",
    storageBucket: "login-c56fb.appspot.com",
    messagingSenderId: "671268266630",
    appId: "1:671268266630:web:e7589c14a396a1a624a707"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;