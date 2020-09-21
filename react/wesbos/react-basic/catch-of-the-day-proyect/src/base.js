import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQnRPy_9OTpDExrcSm21lyucNzZpaFNmg",
    authDomain: "cod-wesbos.firebaseapp.com",
    databaseURL: "https://cod-wesbos.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;