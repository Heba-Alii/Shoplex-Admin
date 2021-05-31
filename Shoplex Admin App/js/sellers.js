var sellers = Array();
var locations = Array();
var control = {};
var database = null;
var ul = document.getElementById('seller-list');
var uLocation = document.getElementById('location-list');

(function () {
    var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            uid = user.uid;
            database = firebase.firestore();
            getAllSellers();
            getAllLocations();
        } else {
            uid = null
            window.location.replace("login.html")
        }
    });

    function logout() {
        firebase.auth().signOut();
    }

    control.logout = logout
})()

// Sellers
function getAllSellers() {
    database.collection("Pending Sellers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var seller = doc.data()

            sellers.push(seller);

            setItem(seller)

        });
    });
}

function setItem(seller) {

    //list
    let li = document.createElement('li');
    li.setAttribute('id', seller.sellerID);
    li.className = 'col-lg-4 col-md-4 list-item'
    
    //card
    let card = document.createElement('div');
    card.style.width = '15rem';
    card.style.height='27rem';
    // card.style.backgroundColor='snow';
    card.className='card card border-info ';
    card.classList.add('card');

    /*************************************************************************************************** */

    //img
    let img = document.createElement('img');
    img.setAttribute('src', seller.image);
    img.className='card-img-center ml-5 ';
    img.style.height='7rem';
    img.style.width='9rem';
    img.setAttribute('alt', '../Shoplex Admin App/img/Seller/shopping.png')

    //card-body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    //-----> Title
    let title = document.createElement('h5');
    title.className = 'card-title';
    title.style.fontWeight='bold';
    title.innerHTML = seller.name;
    //-----> location
    let location = document.createElement('p');
    location.className = 'card-text fas';
    location.innerText = seller.addresses[0];
let line=document.createElement("div")
line.className="border-bottom"
    /*************************************************************************************************** */
    //--->seler info
    let info = document.createElement('ul');
    info.className = 'list-group list-group-flush'

    //--->seller-phone
    let phone = document.createElement('li');
    phone.className = 'list-group-item';
    let phoneSpan = document.createElement('span')
    phoneSpan.innerText = seller.phone;
    let phoneIcon =document.createElement('i')
    phoneIcon.className = 'fas fa-phone-alt mr-2';
  
    //----->seller-date
    let date = document.createElement('li');
    date.className = 'list-group-item';
    let dateSpan = document.createElement('span')
   dateSpan.innerText = (seller.date).toDate().toDateString();
    let dateIcon =document.createElement('i')
    dateIcon.className = 'far fa-calendar-alt mr-2';
    //--------> seller-time
    let time = document.createElement('li');
    time.className = 'list-group-item';
    let timeSpan = document.createElement('span')
    timeSpan.innerText = (seller.date).toDate().toLocaleTimeString('en-US');
    let timeIcon =document.createElement('i')
    timeIcon.className = ' fas fa-clock mr-2';



    /*************************************************************************************************** */
    //btngoup
    
    let btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group  mb-0';
    //--> Cancel button
    let cancelButton = document.createElement('button');
   
    cancelButton.style.width = '50%';

    cancelButton.innerText = 'Cancel';
    cancelButton.className = "btn-cancle"
    //-------------> cancel listner
    cancelButton.addEventListener("click", function () { deleteSeller(seller.storeID) });
    //--> Confirm button
    let confirmButton = document.createElement('button');
   
    confirmButton.style.width = '50%';
  
    
    confirmButton.innerText = 'Confirm';
    confirmButton.className = "btn-confirm"
    //------> Confirm listner
    confirmButton.addEventListener("click", function () { confirmSeller(seller.storeID) });



    /*************************************************************************************************** */
    ul.appendChild(li);
    li.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(location);
    cardBody.appendChild(line);
    card.appendChild(info);
    info.appendChild(phone);
    phone.appendChild(phoneIcon)
    phone.appendChild(phoneSpan)
    info.appendChild(date);
    date.appendChild(dateIcon)
    date.appendChild(dateSpan)
    info.appendChild(time);
    time.appendChild(timeIcon)
    time.appendChild(timeSpan)
    card.appendChild(btnGroup);
    btnGroup.appendChild(cancelButton);
    btnGroup.appendChild(confirmButton);
    console.log(seller)


}
message.txt
function confirmSeller(storeID) {
    seller = sellers.find(item => item.storeID == storeID);
    if (seller) {
        database.collection("Sellers").doc(storeID).set(seller)
            .then(() => {
                console.log("Document successfully written!");
                deleteSeller(storeID);
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    } else {
        alert("Cann't find this seller!");
    }
}

function deleteSeller(storeID) {
    seller = sellers.find(item => item.storeID == storeID);
    if (seller) {
        database.collection("Pending Sellers").doc(storeID).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                //view and pending sellers
                removeItem(storeID)
                let index = sellers.indexOf(seller)
                if (index > -1) {
                    sellers.splice(index, 1);
                }
                console.log(sellers);
            })
            .catch((error) => {
                console.error("Error while delete document: ", error);
            });
    } else {
        alert("Cann't find this Seller!");
    }

}
function removeItem(storeID) {
    let sellerItem = document.getElementById(storeID);
    sellerItem.parentNode.removeChild(sellerItem);
}

//Locations Store 

function getAllLocations() {
    database.collection("Pending Locations").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            var location = doc.data()
            location.locationID = doc.id;

            locations.push(location);

            setLocationItem(location)

        });
    });

}

function setLocationItem(location) {

    //list
    let li = document.createElement('li');
    li.setAttribute('id', location.locationID);
    li.className = 'pb-4 list-item';

    //card
    let card = document.createElement('div');
    card.style.width = '18rem';
    card.style.height = '10rem';
    card.className = 'card text-center card border-info';

    //card-body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    //store Name 
    let storeName = document.createElement('h5');
    storeName.style.fontWeight = 'bold';
    storeName.className = 'card-title';
    storeName.innerText = location.storeName

    //store address
    let storeaddr = document.createElement('p');
    storeaddr.className = 'card-text fas fa-map-marke';
    storeaddr.innerText = location.address;

    //btngoup
    let btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group mt-2';
    //--> Cancel button
    let cancelButton = document.createElement('button');
    cancelButton.style.fontSize = "14px";
    cancelButton.style.width = "50%"
 
    cancelButton.innerText = 'Cancel';
    cancelButton.className = "btn-cancle"
    //-------------> cancel listner
    cancelButton.addEventListener("click", function () { deleteLocation(location.locationID) });
    //--> Confirm button
    let confirmButton = document.createElement('button');
    confirmButton.style.fontSize = "14px";
    confirmButton.style.width = "50%"
   
    confirmButton.innerText = 'Confirm';
    confirmButton.className = "btn-confirm"
    //------> Confirm listner
    confirmButton.addEventListener("click", function () { confirmLocation(location.locationID, location.storeID, location.address, location.location) })

    uLocation.appendChild(li);
    li.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(storeName);
    cardBody.appendChild(storeaddr)
    card.appendChild(btnGroup);
    btnGroup.appendChild(cancelButton);
    btnGroup.appendChild(confirmButton);
    console.log(location)
}

function removeLocationItem(locationID) {
    let item = document.getElementById(locationID);
    item.parentNode.removeChild(item);
}


function confirmLocation(locationID, storeID, address, storeLoc) {
    loc = locations.find(item => item.locationID == locationID);
    if (loc) {
        database.collection("Sellers").doc(storeID).update({ addresses: firebase.firestore.FieldValue.arrayUnion(address), locations: firebase.firestore.FieldValue.arrayUnion(storeLoc) })
            .then(() => {
                console.log("Document suessfully witten!");
                deleteLocation(locationID);
            }).catch((error) => {
                console.error("Error when update document: ", error);
            })
    } else {
        alert("Can't find the Location");
    }
}

function deleteLocation(locationID) {
    loc = locations.find(item => item.locationID == locationID);
    if (loc) {
        database.collection("Pending Locations").doc(locationID).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                removeLocationItem(locationID)
                let i = locations.indexOf(loc)
                if (i > -1) {
                    locations.splice(i, 1);
                }
                console.log(locations);
            })
            .catch((error) => {
                console.error("Error while delete document: ", error);
            });
    } else {
        alert("Can't find this location")
    }
}

