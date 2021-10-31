import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDp1ud4IOSk0drOMBNnG4i0FFKQ6BYgmKo",
  authDomain: "adminpanel-bcbff.firebaseapp.com",
  databaseURL: "https://adminpanel-bcbff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adminpanel-bcbff",
  storageBucket: "adminpanel-bcbff.appspot.com",
  messagingSenderId: "736901976609",
  appId: "1:736901976609:web:48c0cf704252fc65260960",
  measurementId: "G-95JDYKKCNS"
};
firebase.initializeApp(firebaseConfig);
export default firebase;