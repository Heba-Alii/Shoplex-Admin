//firebase.auth().signOut();
  function loginuser(email, password){
      event.preventDefault();
      
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.replace("index.html")
        // ...
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Failed")
    });
}