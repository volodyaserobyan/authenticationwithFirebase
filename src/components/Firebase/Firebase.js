import app from 'firebase/app';
require('firebase/auth')

const config = {
    apiKey: "AIzaSyD3sJpPWgfmdR3gzJCfZvuYZffGMtJvicU",
    authDomain: "test-1835f.firebaseapp.com",
    databaseURL: "https://test-1835f.firebaseio.com",
    projectId: "test-1835f",
    storageBucket: "test-1835f.appspot.com",
    messagingSenderId: "730833347188",
  };
  
class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth()
    }

    doCreateUserWithEmailAndPassword = (email, password) => {
       return this.auth.createUserWithEmailAndPassword(email, password)
    }

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)
  }
  export default Firebase;