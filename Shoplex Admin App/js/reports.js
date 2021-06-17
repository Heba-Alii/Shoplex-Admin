var control = {};
var database = null;

(function(){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid = user.uid;
            database = firebase.firestore();
            getAllReports();
        } else {
            uid = null
            window.location.replace("index.html")
        }
  });

  function logout(){
      firebase.auth().signOut();
  }

  control.logout = logout
})()


function getAllReports(){
    database.collection("Reports").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var report = doc.data()
            reportTableItem(report)
             console.log(report)
        });
    });
}
var tableBody = document.getElementById('reportList');
var index = 1
function reportTableItem(report){

    let tr = document.createElement('tr');

    let id = document.createElement('th');
    id.setAttribute("scope", "row")
    id.style.color = "brown"
    id.innerText =index++

    let tdMessage = document.createElement('td');
    tdMessage.innerText = report.reportComment
    
    let tdUserType = document.createElement('td');
    tdUserType.innerText = report.type
     
    let tdDate = document.createElement('td');
    tdDate.innerText = (report.date).toDate().toDateString();

  

    tr.appendChild(id);
    tr.appendChild(tdMessage);
    tr.appendChild(tdUserType);
    tr.appendChild(tdDate);
    tableBody.appendChild(tr);
}

