import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyAzsQjlnNv5r8RSQKM-cV424Xm3vpS7IcI",
  authDomain: "test1-d5c4c.firebaseapp.com",
  projectId: "test1-d5c4c",
  storageBucket: "test1-d5c4c.appspot.com",
  messagingSenderId: "953997786999",
  appId: "1:953997786999:web:950e8d74226168736eeb72",
  measurementId: "G-TMX79P0P5E"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
