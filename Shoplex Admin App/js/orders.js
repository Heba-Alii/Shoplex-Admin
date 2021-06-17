var orders = Array();
var database = null;
var ul = document.getElementById('Current-list');
var ulLastOrder = document.getElementById('LastOrder-list');

(function(){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid = user.uid
            database = firebase.firestore();
            getCurrentOrders();
            getLastOrders();
        } else {
            uid = null
            window.location.replace("index.html")
        }
  });

  function logout(){
      firebase.auth().signOut();
  }  

  orders.logout = logout
})()

function getCurrentOrders() {
    database.collection("Orders").where("orderStatus","==","Current").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var order = doc.data()

            // orders.push(order);
            let productID=order.productID
            database.collection("Products").doc(productID).get().then((product)=>{
                setItem(order,product.data())

            });

        });
    });
}

function setItem(order,product) {


    //list
    let li = document.createElement('li');
    li.setAttribute('id', order.orderID);
    li.className='list-item'
    
    //card
    let card = document.createElement('div');
    card.style.width = '31rem';
    card.style.marginTop='2px'
    card.className='card text-start';
   

    /*************************************************************************************************** */

    

    //card-body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //row
    let row = document.createElement('div')
    row.className='row justify-content-around';
    //card img
    let cardimg = document.createElement('div');
    
    cardimg.className='col-4';
    //img
    let img = document.createElement('img');
    img.setAttribute('src', product.images[0]);
    img.alt = "Image Loading "
    img.className='card-img-center ';
    img.style.height='9rem';
    img.style.width='9rem';
   // img.setAttribute('alt', '../Shoplex Admin App/img/Seller/shopping.png')
    
   
    let data=document.createElement('div')
    data.className='col-4';
     
    //-----> Title
    let title = document.createElement('h5');
    title.className = 'card-title text-start';
    title.style.fontWeight='inherit';
    title.innerHTML =product.name;
   
    //----->category
    let category = document.createElement('p');
    category.className = 'card-text';
    category.innerText =product.category;

  //----->store
  let store = document.createElement('p');
  store.className = 'card-text';
  store.innerText = product.storeName;
  


  //----->price
  let price=document.createElement('div')
  price.className ='product__details__price col-4 text-right';
  price.style.fontSize='20px'
  price.innerText=order.totalPrice + " EGP "
  
  
    ul.appendChild(li);
    li.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(row);
    row.appendChild(cardimg);
    cardimg.appendChild(img);
    row.appendChild(data);
    data.appendChild(title);
    data.appendChild(category);
    data.appendChild(store);
    row.appendChild(price);
   // console.log(order)


}
function getLastOrders() {
    database.collection("Orders").where("orderStatus","!=","Current").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var order = doc.data()

            // orders.push(order);
            let productID=order.productID
            database.collection("Products").doc(productID).get().then((product)=>{
                setItemLast(order,product.data())

            });

        });
    });
}

function setItemLast(order,product) {


    //list
    let li = document.createElement('li');
    li.setAttribute('id', order.orderID);
    li.className='list-item'
    
    //card
    let card = document.createElement('div');
    card.style.width = '31rem';
    card.style.marginTop='2px'
    card.className='card text-start';
   

    /*************************************************************************************************** */

    

    //card-body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //row
    let row = document.createElement('div')
    row.className='row justify-content-around';
    //card img
    let cardimg = document.createElement('div');
    cardimg.className='col-4';
    //img
    let img = document.createElement('img');
    img.setAttribute('src', product.images[0]);
    img.className='card-img-center ';
    img.style.height='9rem';
    img.style.width='9rem';
   // img.setAttribute('alt', '../Shoplex Admin App/img/Seller/shopping.png')
    
   
    let data=document.createElement('div')
    data.className='col-4';
     
    //-----> Title
    let title = document.createElement('h5');
    title.className = 'card-title text-start';
    title.style.fontWeight='inherit';
    title.innerHTML =product.name;
   
    //----->category
    let category = document.createElement('p');
    category.className = 'card-text';
    category.innerText =product.category;

  //----->location
  let location = document.createElement('p');
  location.className = 'card-text';
  location.innerText = "Saba_Basha , Alexandria , Egypt";
  
   //----->orderStatus
   let orderStatus = document.createElement('p');
   orderStatus.className = 'card-text';
   orderStatus.innerText = order.orderStatus;


  //----->price
  let price=document.createElement('div')
  price.style.fontSize='20px'
  price.className ='product__details__price col-4 text-right';
  price.innerText=order.totalPrice + " EGP "
  
  
    ulLastOrder.appendChild(li);
    li.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(row);
    row.appendChild(cardimg);
    cardimg.appendChild(img);
    row.appendChild(data);
    data.appendChild(title);
    data.appendChild(category);
    data.appendChild(location);
    data.appendChild(orderStatus);
    row.appendChild(price);
   // console.log(order)


}
