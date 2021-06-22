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
            $('<div class="carousel-item"><img src="' + product.images[j]+'data:image/jpeg;base64,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' + '" height="370rem" style="background-position:center center;" ></div>').appendTo(`#inner${product.productID}`);
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
    category.innerHTML = product.category + ", " + product.subCategory;


    /*************************************************************************************************** */

    //--->product-deatails
    let productDetails = document.createElement('div');
    productDetails.className = 'product__details__text';
    //----->product-rate
    let rate = document.createElement('div');
    rate.className = 'mb-4';
    //--------> premium
    let premium = document.createElement('span');
    if(product.premium != null){
        premium.innerText = "Premium : " + getDueation(product.premium.premiumDays)
    } else {
        premium.innerText = "Premium : No"
    }
    


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

        newPriceSpan.innerText = (product.newPrice).toFixed(2) + " L.E";
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