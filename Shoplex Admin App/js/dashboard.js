var dashboard = {};
var database = null;

(function () {
    var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            uid = user.uid;
            //alert(user.email);
            database = firebase.firestore();
            getAllData();
            getAllRecentVisits();
        } else {
            uid = null
            window.location.replace("login.html")
        }

    });

    function logout() {
        firebase.auth().signOut();
    }

    dashboard.logout = logout
})()

function getAllData() {
    database.collection("Sellers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var seller = doc.data()

            createTable(seller, false)

        });
    });

    database.collection("Users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var user = doc.data()

            createTable(user, true)


        });

    });
    // console.log(dataList)



}
var tableBody = document.getElementById('userList');
var index = 1
function createTable(data, isUser) {

    // for (var i = 0; i < data.length ; i++) {

    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.style.color = "brown"
    th.innerText = index++

    let tdImage = document.createElement('td');
    let image = document.createElement('img');
    image.style.height = '5rem';
    image.style.width = '5rem';
    image.src = data.image
    image.className="rounded-circle"

    let tdName = document.createElement('td');
    tdName.innerText = data.name

    let tdEmail = document.createElement('td');
    tdEmail.innerText = data.email

    let tdDate = document.createElement('td');
    if (!isUser) {
        tdDate.innerText = (data.date).toDate().toDateString();;
    }
    else {
        tdDate.innerText = "Mon May 24 2021";
    }

    let tdPhone = document.createElement('td');
    tdPhone.innerText = data.phone

    let tdAddress = document.createElement('td');
    if (isUser) {
        tdAddress.innerText = data.address
    }
    else {
        tdAddress.innerText = data.addresses[0]

    }
    let tdUserSeller = document.createElement('td');
    if (isUser) {
        tdUserSeller.innerText = "User"
    }
    else {
        tdUserSeller.innerText = "Seller"

    }

    tr.appendChild(th);
    tdImage.appendChild(image);
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdDate);
    tr.appendChild(tdPhone);
    tr.appendChild(tdAddress);
    tr.appendChild(tdUserSeller);
    tableBody.appendChild(tr);
    //  }
}



function getAllRecentVisits() {
    database.collection("Recent Visits").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var recentVisits = doc.data()

            createRecentVisitTable(recentVisits)

        });
    });
}
var tableRecent = document.getElementById('recentVisit');
var i = 1
function createRecentVisitTable(recentVisit) {



    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.style.color = "brown"
    th.innerText = i++

    let rvImage = document.createElement('td');
    let img = document.createElement('img');
    img.style.height = '7rem';
    img.style.width = '7rem';
    img.src = recentVisit.image
    img.className="rounded-circle"
    

    let rvName = document.createElement('td');
    rvName.innerText = recentVisit.name

    let tdPhone = document.createElement('td');
    tdPhone.innerText = recentVisit.phone
    let tdmail = document.createElement('td');
    tdmail.innerText = recentVisit.email
    let tdDate = document.createElement('td');
    var date = new Date(recentVisit.date.seconds*1000);
    console.log(recentVisit.date.seconds);
    tdDate.innerText =  date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear() +
        " " + date.getHours() +
        ":" + date.getMinutes() +
        ":" + date.getSeconds();
    tr.appendChild(th);
    rvImage.appendChild(img);
    tr.appendChild(rvImage);
    tr.appendChild(rvName);
    tr.appendChild(tdmail);
    tr.appendChild(tdPhone);

    tr.appendChild(tdDate);


    tableRecent.appendChild(tr);
    //  }
}

