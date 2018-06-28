import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBGlu1xC5oPLcIUnFYKb2PPYZjyihT61jc",
  authDomain: "advanced-react-75d42.firebaseapp.com",
  databaseURL: "https://advanced-react-75d42.firebaseio.com",
  projectId: "advanced-react-75d42",
  storageBucket: "",
  messagingSenderId: "109028524209"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
