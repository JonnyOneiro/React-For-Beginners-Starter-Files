import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQH7s72lxF_NmUP07y9nqp_QLs-ckY3Xc",
    authDomain: "catch-of-the-day-jonnyoneiro.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jonnyoneiro.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;