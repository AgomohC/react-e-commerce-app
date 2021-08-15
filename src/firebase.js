import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBAYCqyKcAtgYJkG9By0RKY1HU1ku0W9lw",

  authDomain: "auth-dev-femto-store-2.firebaseapp.com",

  projectId: "auth-dev-femto-store-2",

  storageBucket: "auth-dev-femto-store-2.appspot.com",

  messagingSenderId: "594674104944",

  appId: "1:594674104944:web:5d56dd64abecb54ba812b5",
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
