var products = Array();
var control = {};
var database = null;
var ul = document.getElementById('product-list');

(function () {
    var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            uid = user.uid;
            database = firebase.firestore();
            getAllProducts();
        } else {
            uid = null;
            window.location.replace("index.html");
        }
    });

    function logout() {
        firebase.auth().signOut();
    }

    control.logout = logout
})()

function getAllProducts() {
    database.collection("Pending Products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            var product = doc.data()
            product.productID = doc.id;


            products.push(product);

            setItem(product)

        });
    });
}

function setItem(product) {

    /*
    console.log("Product ID: " + product.productID)
    for (let index = 0; index < product.properties.length; index++) {
        console.log(product.properties[index].title)
    }
    */
    //list
    let li = document.createElement('li');
    li.setAttribute('id', product.productID);
    li.className = 'list-item mb-3'
    //Col
    let colDiv = document.createElement('div');
    colDiv.className = 'col-lg-4 col-md-4'
    //card
    let card = document.createElement('div');
    card.style.width = '21rem';
    card.style.height = '46rem';
    card.className = 'card';

    /*************************************************************************************************** */

    //Slider 
    let sliderDiv = document.createElement('div');
    sliderDiv.setAttribute('id', `carousel${product.productID}`);
    sliderDiv.setAttribute('data-ride', 'carousel');
    sliderDiv.classList = "carousel slide";
    //---> Indicatores
    let olImage = document.createElement('ol');
    olImage.className = "carousel-indicators";
    olImage.setAttribute('id', `indicators${product.productID}`);
    
    //---> Wrapper for slides
    let wrapSlide = document.createElement('div');
    wrapSlide.className = "carousel-inner";
    wrapSlide.setAttribute('id', `inner${product.productID}`);

    $(card).ready(function () {

        console.log(product.images.length)
        for (let j = 0; j < product.images.length; j++) {
            $('<div class="carousel-item"><img src="' + product.images[j] + '" height="370rem" style="background-position:center center;" ></div>').appendTo(`#inner${product.productID}`);
            $('<li data-target="#carousel' + product.productID + '" data-slide-to="' + j + '" style="background-color: gray;"></li>').appendTo(`#indicators${product.productID}`)

        }
        '#carousel-inner' + product.productID + ' > .carousel-item'
        $(`#inner${product.productID} >.carousel-item`).first().addClass('active');
        $(`#indicators${product.productID} > li`).first().addClass('active');
        $(`#carousel${product.productID}`).carousel();
    });
    //card-body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';


    //---> row Basic Info
    let basicInfoRow = document.createElement('div');
    //-----> Title
    let title = document.createElement('div');
    title.className = ' text-start card-title pb-3';
    title.innerHTML = product.name;
    //-----> Category
    let category = document.createElement('div');
    category.className = 'mb-2 card-category';
    category.style.color = '#666666';
    category.innerHTML = product.category;


    /*************************************************************************************************** */

    //--->product-deatails
    let productDetails = document.createElement('div');
    productDetails.className = 'product__details__text';
    //----->product-rate
    let rate = document.createElement('div');
    rate.className = 'mb-4';
    //--------> premium
    let premium = document.createElement('span');
    premium.innerText = "Premium : " + getDueation(product.premiumDays)


    /*************************************************************************************************** */

    //--->div
    let div = document.createElement('div');
    //------> Price Info
    let priceInfo = document.createElement('div');
    priceInfo.className = 'row justify-content-between';
    //------------> old Price
    let oldPrice = document.createElement('div');
    //condition
    if (product.discount == null || product.newPrice == product.price) {
        oldPrice.className = 'col-5 text-start';

    } else {
        oldPrice.className = 'col-5 line_price text-start old-price';
    }
    //------------> old Price Span
    let oldPriceSpan = document.createElement('span');
    oldPriceSpan.innerText = (product.price).toFixed(0) + " L.E";
    //------------> discount
    let discount = document.createElement('div');
    discount.className = 'col-3 text-center discount align-items-center';
    //------------> discountSpan
    let discountSpan = document.createElement('span');
    discountSpan.className = "buttonn button5";
    //condition
    if (product.discount == null || product.newPrice == product.price) {
        discountSpan.style.display = 'none';

    } else {
        discountSpan.innerText = product.discount + "%";
    }
    //------------> new Price
    let newPrice = document.createElement('div');
    newPrice.className = 'col-4 text-right price';
    newPrice.style.color = "red";
    //------------>new PriceSpan
    let newPriceSpan = document.createElement('span');
    if (product.discount == null || product.newPrice == product.price) {
        newPriceSpan.style.display = 'none';

    } else {

        newPriceSpan.innerText = (product.newPrice).toFixed(0) + " L.E";
    }


    /*************************************************************************************************** */

    //----->Shop Row
    let shopRow = document.createElement('div');
    shopRow.className = 'row mt-3';
    //----------->Shop Name
    let shopName = document.createElement('div');
    shopName.className = 'text-start shop-name ml-3';
    shopName.style.fontWeight = 'bold'
    shopName.style.fontSize = 'large'
    //------------>Shop NameSpan
    let shopNameSpan = document.createElement('span');
    shopNameSpan.innerText = product.storeName;


    /*************************************************************************************************** */

    //Store Info
    let storeInfo = document.createElement('ul');
    storeInfo.className = 'list-group list-group-flush'


    //--->date
    let date = document.createElement('li');
    date.className = "list-group-item "
    let dateSpan = document.createElement('span')
    dateSpan.innerText = (product.date).toDate().toDateString();
    let dateIcon = document.createElement('i')
    dateIcon.className = 'far fa-calendar mr-2';
    //--->time
    let time = document.createElement('li');
    time.className = "list-group-item "
    let timeSpan = document.createElement('span')
    timeSpan.innerText = (product.date).toDate().toLocaleTimeString('en-US');
    let timeIcon = document.createElement('i')
    timeIcon.className = 'fas fa-clock mr-2';


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
    cancelButton.addEventListener("click", function () { deleteProduct(product.productID) });
    //--> Confirm button
    let confirmButton = document.createElement('button');
    confirmButton.style.width = '50%';
    confirmButton.innerText = 'Confirm';
    confirmButton.className = "btn-confirm"
    //------> Confirm listner
    confirmButton.addEventListener("click", function () { confirmProduct(product.productID) });


    /*************************************************************************************************** */

    ul.appendChild(li);
    li.appendChild(colDiv);
    colDiv.appendChild(card);
    card.appendChild(sliderDiv);
    sliderDiv.appendChild(olImage);
    sliderDiv.appendChild(wrapSlide);
    card.appendChild(cardBody);
    cardBody.appendChild(basicInfoRow);
    basicInfoRow.appendChild(title);
    basicInfoRow.appendChild(category);
    cardBody.appendChild(productDetails);
    productDetails.appendChild(rate);
    rate.appendChild(premium);
    cardBody.appendChild(div);
    div.appendChild(priceInfo);
    priceInfo.appendChild(oldPrice);
    oldPrice.appendChild(oldPriceSpan);
    priceInfo.appendChild(discount);
    discount.appendChild(discountSpan);
    priceInfo.appendChild(newPrice);
    newPrice.appendChild(newPriceSpan);
    div.appendChild(shopRow);
    shopRow.appendChild(shopName);
    shopName.appendChild(shopNameSpan);
    card.appendChild(storeInfo);
    storeInfo.appendChild(date);
    date.appendChild(dateIcon);
    date.appendChild(dateSpan)
    storeInfo.appendChild(time);
    time.appendChild(timeIcon);
    time.appendChild(timeSpan)
    card.appendChild(btnGroup);
    btnGroup.appendChild(cancelButton);
    btnGroup.appendChild(confirmButton);


    //confirmProduct(products[0].productID);
    //deleteProduct(products[0].productID);
}

function getDueation(days) {
    if (days > 0 && days <= 28) {
        days = days / 7 + " Week";
    } else if (days > 28) {
        days = days / 30 + " Month"
    } else {
        "No Premium"
    }
    return days
}

function removeItem(productID) {
    let item = document.getElementById(productID);
    item.parentNode.removeChild(item);
}

function confirmProduct(productID) {
    product = products.find(item => item.productID == productID);
    if (product) {
        database.collection("Products").doc(productID).set(product)
            .then(() => {
                console.log("Document successfully written!");
                deleteProduct(productID);
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    } else {
        alert("Cann't find this product!");
    }
}

function deleteProduct(productID) {
    product = products.find(item => item.productID == productID);
    if (product) {
        database.collection("Pending Products").doc(productID).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                //view and pending products
                removeItem(product.productID)
                let index = products.indexOf(product)
                if (index > -1) {
                    products.splice(index, 1);
                }
                console.log(products);
            })
            .catch((error) => {
                console.error("Error while delete document: ", error);
            });
    } else {
        alert("Cann't find this product!");
    }

}