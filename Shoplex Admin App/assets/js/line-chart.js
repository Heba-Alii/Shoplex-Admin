var totalFashion = document.getElementById("TotalFashion")
var totalHealthCare = document.getElementById("ToalHealthCare")
var totalPhones = document.getElementById("TotalPhones")
var totalElec = document.getElementById("TotalElectronics")
var totalAccessories = document.getElementById("TotalAccessories")
var totalBooks = document.getElementById("TotalBooks")
var totalUsers =document.getElementById("TotalUsers")
var totalNewUsers=document.getElementById("TotalNewUsers")
var totalOldUsers=document.getElementById("TotalOldUsers")
var totaSells=document.getElementById("TotalSeller")
var totalnewSellers=document.getElementById("TotalNewSellers")
var totaldeleteSellers=document.getElementById("TotalDeleteSellers")


var database = null;
(function () {
    database = firebase.firestore();
    database.collection("Dashboard").get().then((querySnapshot) => {
        var dict = {};
        querySnapshot.forEach((doc) => {
            data = doc.data();
          
           
            //console.log(doc.id + " => " + data);
            switch(doc.id){
                case "Users" : {
                    var newUsers = []
                    var deletedUsers = []
                    var dates = []
                    

                    let values = data.oldValues
                     let totaldelet =data.totalDeleted
                     let totalnew=data.totalNew
             
                    let totalUsrs=totaldelet+totalnew
                    for(usr of values){
                       
                        newUsers.push(usr.new);
                        deletedUsers.push(usr.deleted);
                        dates.push(usr.date);
                   
                      
                    }
                   totalUsers.innerText=totalUsrs + " User "
                   totalNewUsers.innerText="New Users : " +totalnew
                   totalOldUsers.innerText= "Deleted Users : "+totaldelet
                  
                    showUsers(newUsers, deletedUsers, dates)
                }; break;
                case "Sellers" : {
                    var newSellers = []
                    var deletedSellers = []
                    var dates = []

                    let values = data.oldValues
                    let totalsellerdeleted =data.totalDeleted
                     let totalnewSeller=data.totalNew
                     let allSellers=totalsellerdeleted+totalnewSeller
                   
                    for(seller of values){
                   
                        newSellers.push(seller.new);
                        deletedSellers.push(seller.deleted);
                        dates.push(seller.date);
                    }

totaSells.innerText=allSellers + " Seller "

                    totalnewSellers.innerText="New Sellers : " +totalnewSeller
                    totaldeleteSellers.innerText= "Deleted Sellers : "+totalsellerdeleted
                    showSellers(newSellers, deletedSellers, dates)

                }; break;
                default: {
                    dict[doc.id] = data;
                }
            }
    });
    var values = []

    if(dict.hasOwnProperty("Fashion")){
        let fashion = dict["Fashion"]
        
        values[0] = (fashion.hasOwnProperty("Men")? fashion["Men"]: 0)
        values[1] = (fashion.hasOwnProperty("Women")? fashion["Women"]: 0)
        values[2] = (fashion.hasOwnProperty("Kids")? fashion["Kids"]: 0)
        totalFashion.innerText="Total : "+(fashion.hasOwnProperty("Total")?fashion["Total"]:0)

    }else{
        values = [0, 0, 0]
    }

    showFashion(values)
    
    if(dict.hasOwnProperty("Health Care")){
        let healthCare = dict["Health Care"]
        
        values[0] = (healthCare.hasOwnProperty("Haircare")? healthCare["Haircare"]: 0)
        values[1] = (healthCare.hasOwnProperty("Perfume")? healthCare["Perfume"]: 0)
        values[2] = (healthCare.hasOwnProperty("Makeup")? healthCare["Makeup"]: 0)
        totalHealthCare.innerText="Total : "+(healthCare.hasOwnProperty("Total")?healthCare["Total"]:0)
    
    }else{
        values = [0, 0, 0]
    }
    showHealthCare(values)
    
    if(dict.hasOwnProperty("Phone and Tablets")){
        let phones = dict["Phone and Tablets"]
        
        values[0] = (phones.hasOwnProperty("Phones")? phones["Phones"]: 0)
        values[1] = (phones.hasOwnProperty("Tablets")? phones["Tablets"]: 0)
        values[2] = (phones.hasOwnProperty("I Pad")? phones["I Pad"]: 0)
        totalPhones.innerText="Total : "+(phones.hasOwnProperty("Total")?phones["Total"]:0)
    
    }else{
        values = [0, 0, 0]
    }
    showPhonesandTablets(values)

    if(dict.hasOwnProperty("Electronics")){
        let elec = dict["Electronics"]
        
        values[0] = (elec.hasOwnProperty("TVS")?elec ["TVS"]: 0)
        values[1] = (elec.hasOwnProperty("Audio")?elec ["Audio"]: 0)
        values[2] = (elec.hasOwnProperty("Smart Watches")?elec ["Smart Watches"]: 0)
        values[3] = (elec.hasOwnProperty("Cameras")?elec ["Cameras"]: 0)
        values[4] = (elec.hasOwnProperty("Others")?elec ["Others"]: 0)
        totalElec.innerText="Total : "+(elec.hasOwnProperty("Total")?elec["Total"]:0)
    
    }else{
        values = [0, 0, 0, 0, 0]
    }
    showelectronics(values)
    if(dict.hasOwnProperty("Accessories")){
        let accessory = dict["Accessories"]
        
        values[0] = (accessory.hasOwnProperty("Jewellery")?accessory ["Jewellery"]: 0)
        values[1] = (accessory.hasOwnProperty("Watches")?accessory ["Watches"]: 0)
        values[2] = (accessory.hasOwnProperty("Belts")?accessory ["Belts"]: 0)
        values[3] = (accessory.hasOwnProperty("Phone Cases")?accessory ["Phone Cases"]: 0)
        values[4] = (accessory.hasOwnProperty("Cables")?accessory ["Cables"]: 0)
        values[5] = (accessory.hasOwnProperty("Charges")?accessory ["Charges"]: 0)
        values[6] = (accessory.hasOwnProperty("Selfie Stick")?accessory ["Selfie Stick"]: 0)
        totalAccessories.innerText="Total : "+(accessory.hasOwnProperty("Total")?accessory["Total"]:0)
    
    }else{
        values = [0, 0, 0, 0, 0, 0, 0]
    }
    showaccessories(values)

    if(dict.hasOwnProperty("Books")){
        let books = dict["Books"]
        
        values[0] = (books.hasOwnProperty("Art and Humanities")?books ["Art and Humanities"]: 0)
        values[1] = (books.hasOwnProperty("Fiction")?books ["Fiction"]: 0)
        values[2] = (books.hasOwnProperty("Entertainment")?books ["Entertainment"]: 0)
        values[3] = (books.hasOwnProperty("Science and Technology")?books ["Science and Technology"]: 0)
        values[4] = (books.hasOwnProperty("Education")?books ["Education"]: 0)
        totalBooks.innerText="Total : "+(books.hasOwnProperty("Total")?books["Total"]:0)
   
    
    
    }else{
        values = [0, 0, 0, 0, 0]
    }
    showbooks(values)
});
})()

function showUsers(newUsers, deletedUser, labels){
    if ($('#coin_sales1').length) {
        var ctx = document.getElementById("coin_sales1").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: labels,
                datasets: [{
                    label: "New User",
                    backgroundColor: "#1cb0ff",
                   
                    data: newUsers,
                },
                {
                    label: "Deleted User",
                    backgroundColor: "#ff9633",
                   
                    data: deletedUser,
                },
              
            
            ]
            },
            // Configuration options go here
            options: {
                legend: {
                    display: true
                },
                animation: {
                    easing: "easeInOutBack"
                },
                scales: {
                    yAxes: [{
                        display: 1,
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            beginAtZero: !0,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: 1,
                            display: 1
                        }
                    }],
                    xAxes: [{
                        display: 1,
                        gridLines: {
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            padding: 10,
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold"
                        }
                    }]
                }
            }
        });
    }
}



function showSellers(newSellers, deletedSellers, labels){
    if ($('#coin_sales2').length) {
        var ctx = document.getElementById("coin_sales2").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: labels,
                datasets: [{
                    label: "New Sellers",
                    backgroundColor: "#1cb0ff",
             
                    data: newSellers,
                },
                {
                    label: "Deleted Sellers",
                    backgroundColor: "#ff9633",
                    data: deletedSellers,
                }]
            },
            // Configuration options go here
            options: {
                legend: {
                    display: true
                },
                animation: {
                    easing: "easeInOutBack"
                },
                scales: {
                    yAxes: [{
                        display: 1,
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            beginAtZero: !0,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: 1,
                            display: 1
                        }
                    }],
                    xAxes: [{
                        display: 1,
                        gridLines: {
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            padding: 10,
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold"
                        }
                    }]
                }
            }
        });
    }
}
