import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEtwMnBY1OUrlcORfTQhuCjVGuSndODcE",
    authDomain: "sp-project-planner.firebaseapp.com",
    databaseURL: "https://sp-project-planner.firebaseio.com",
    projectId: "sp-project-planner",
    storageBucket: "",
    messagingSenderId: "661140161920"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;