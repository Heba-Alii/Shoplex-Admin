//firebase.auth().signOut();
function loginuser(email, password){
    event.preventDefault();

    firebase.firestore().collection("Z").where("email","==", email).get().then((querySnapshot) => {
        console.log(querySnapshot.docs);
        if(querySnapshot.docs.length == 1){
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.replace("DashBoard.html")
            // ...
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Failed")
        });
        } else{
          alert("Wrong Email!")
        }
  });
}