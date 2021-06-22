function showFashion(data){
if ($('#Fashion').length) {

    zingchart.THEME = "classic";
    

    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },
        "graphset": [{
                "type": "pie",
                "background-color": "#fff",
                "legend": {
                    "background-color": "none",
                    "border-width": 0,
                    "shadow": false,
                    "layout": "float",
                    "margin": "auto auto 16% auto",
                    "marker": {
                        "border-radius": 3,
                        "border-width": 0
                    },
                    "item": {
                        "color": "%backgroundcolor"
                    }
                },
                "plotarea": {
                    "background-color": "#FFFFFF",
                    "border-color": "#DFE1E3",
                    "margin": "25% 8%"
                },
                "labels": [{
                    "x": "45%",
                    "y": "47%",
                    "width": "10%",
                    "text": "Fashion",
                    
                   
                    "font-size": 17,
                    "font-weight": 700
                }],
       
                "plot": {
                    "size": 75,
                    "slice": 90,
                    "margin-right": 0,
                    "border-width": 0,
                    "shadow": 0,
                    "value-box": {
                        "visible": true
                    },
                    "tooltip": {
                        "text": "%v Item",
                        "shadow": true,
                        "border-radius": 2
                    },
                    "rules":[
                        {
                          "rule":"%p != 0",
                          "visible":false
                        }]
                    
                },
            

                // "series": [
                    
                //     {
                //         "values": [125],
                //         "text": "Kids",
                //         "background-color": "#ff0000"
                //     },
                //     {
                //         "values": [200],
                //         "text": "Men",
                //         "background-color": "#fd9c21"
                //     },
                //     {
                //         "values": [500],
                //         "text": "Women",
                //         "background-color": "#2c13f8"
                //     }
                 
                // ],
                "series": [
                    {
                        "values": [data[0]],
                        "text": "Men",
                        "background-color": "#E9AB17"
                    },
                    {
                        "values": [data[1]],
                        "text": "Women",
                        "background-color": "#3BB9FF	"
                    },
                    {
                        "values": [data[2]],
                        "text": "Kids",
                        "background-color": "#F75D59"
                    }
                 
                ],
            }

        ]
        
        
    };
 

    zingchart.render({
        id: 'Fashion',
        data: myConfig,
   
    });
    
 
}
}
function showHealthCare(data){
if ($('#Health-care').length) {

    zingchart.THEME = "classic";

    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },
        "graphset": [{
                "type": "pie",
                "background-color": "#fff",
                "legend": {
                    "background-color": "none",
                    "border-width": 0,
                    "shadow": false,
                    "layout": "float",
                    "margin": "auto auto 16% auto",
                    "marker": {
                        "border-radius": 3,
                        "border-width": 0
                    },
                    "item": {
                        "color": "%backgroundcolor"
                    }
                },
                "plotarea": {
                    "background-color": "#FFFFFF",
                    "border-color": "#DFE1E3",
                    "margin": "25% 8%"
                },
                "labels": [{
                    "x": "45%",
                    "y": "47%",
                    "width": "10%",
                    "text": "Health Care",
                    "font-size": 17,
                    "font-weight": 700
                }],
                "plot": {
                    "size": 75,
                    "slice": 90,
                    "margin-right": 0,
                    "border-width": 0,
                    "shadow": 0,
                    "value-box": {
                        "visible": true
                    },
                    "tooltip": {
                        "text": "%v Item",
                        "shadow": true,
                        "border-radius": 2
                    }
                },
              
                "series": [
                    {
                        "values": [data[0]],
                        "text": "Haircare",
                        "background-color": "#F75D59"
                    },
                    {
                        "values": [data[1]],
                        "text": "Perfume",
                        "background-color": "#E9AB17"
                    },
                    {
                        "values": [data[2]],
                        "text": "Makeup",
                        "background-color": "#3BB9FF"
                    }
                ]
            }

        ]
    };
    

    zingchart.render({
        id: 'Health-care',
        data: myConfig,
    });
}
}
function showPhonesandTablets(data){
if ($('#Phone-and-Tablets').length) {

    zingchart.THEME = "classic";

    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },
        "graphset": [{
                "type": "pie",
                "background-color": "#fff",
                "legend": {
                    "background-color": "none",
                    "border-width": 0,
                    "shadow": false,
                    "layout": "float",
                    "margin": "auto auto 16% auto",
                    "marker": {
                        "border-radius": 3,
                        "border-width": 0
                    },
                    "item": {
                        "color": "%backgroundcolor"
                    }
                },
                "plotarea": {
                    "background-color": "#FFFFFF",
                    "border-color": "#DFE1E3",
                    "margin": "25% 8%"
                },
                "labels": [{
                    "x": "45%",
                    "y": "47%",
                    "width": "10%",
                    "text": "Phone and Tablets",
                    "font-size": 17,
                    "font-weight": 700
                }],
                "plot": {
                    "size": 75,
                    "slice": 90,
                    "margin-right": 0,
                    "border-width": 0,
                    "shadow": 0,
                    "value-box": {
                        "visible": true
                    },
                    "tooltip": {
                        "text": "%v Item",
                        "shadow": true,
                        "border-radius": 2
                    }
                },
                
                "series": [
                    {
                        "values": [data[0]],
                        "text": "Phones",
                        "background-color": "#F75D59"
                    },
                    {
                        "values": [data[1]],
                        "text": "Tablets",
                        "background-color": "#E9AB17"
                    },
                    {
                        "values": [data[2]],
                        "text": "I Pad",
                        "background-color": "#3BB9FF"
                    }
                ]
            }

        ]
    };
    

    zingchart.render({
        id: 'Phone-and-Tablets',
        data: myConfig,
    });
}
}
function showelectronics(data){
if ($('#Electronics').length) {

    zingchart.THEME = "classic";

    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },
        "graphset": [{
                "type": "pie",
                "background-color": "#fff",
                "legend": {
                    "background-color": "none",
                    "border-width": 0,
                    "shadow": false,
                    "layout": "float",
                    "margin": "auto auto 16% auto",
                    "marker": {
                        "border-radius": 3,
                        "border-width": 0
                    },
                    "item": {
                        "color": "%backgroundcolor"
                    }
                },
                "plotarea": {
                    "background-color": "#FFFFFF",
                    "border-color": "#DFE1E3",
                    "margin": "25% 8%"
                },
                "labels": [{
                    "x": "45%",
                    "y": "47%",
                    "width": "10%",
                    "text": "Electronics",
                    "font-size": 17,
                    "font-weight": 700
                }],
                "plot": {
                    "size": 75,
                    "slice": 90,
                    "margin-right": 0,
                    "border-width": 0,
                    "shadow": 0,
                    "value-box": {
                        "visible": true
                    },
                    "tooltip": {
                        "text": "%v Item",
                        "shadow": true,
                        "border-radius": 2
                    }
                },
                "series": [
                    {
                        "values": [data[0]],
                        "text": "TVS",
                        "background-color": "#F75D59"
                    },
                    {
                        "values": [data[1]],
                        "text": "Audio",
                        "background-color": "#E9AB17"
                    },
                    {
                        "values": [data[2]],
                        "text": "Smart Watches",
                        "background-color": "#3BB9FF"
                    },
                    {
                        "values":[data[3]],
                        "text": "Cameras",
                        "background-color": "#4CC417"
                    },
                    {
                        "values": [data[4]],
                        "text": "Others",
                        "background-color": "#30cfb9"
                    }
                ]
            }

        ]
    };
    

    zingchart.render({
        id: 'Electronics',
        data: myConfig,
    });
}
}
function showaccessories(data){
if ($('#Accessories').length) {

    zingchart.THEME = "classic";

    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },
        "graphset": [{
                "type": "pie",
                "background-color": "#fff",
                "legend": {
                    "background-color": "none",
                    "border-width": 0,
                    "shadow": false,
                    "layout": "float",
                    "margin": "auto auto 16% auto",
                    "marker": {
                        "border-radius": 3,
                        "border-width": 0
                    },
                    "item": {
                        "color": "%backgroundcolor"
                    }
                },
                "plotarea": {
                    "background-color": "#FFFFFF",
                    "border-color": "#DFE1E3",
                    "margin": "25% 8%"
                },
                "labels": [{
                    "x": "45%",
                    "y": "47%",
                    "width": "10%",
                    "text": "Accessories",
                    "font-size": 17,
                    "font-weight": 700
                }],
                "plot": {
                    "size": 75,
                    "slice": 90,
                    "margin-right": 0,
                    "border-width": 0,
                    "shadow": 0,
                    "value-box": {
                        "visible": true
                    },
                    "tooltip": {
                        "text": "%v Item",
                        "shadow": true,
                        "border-radius": 2
                    }
                },
                "series": [{
                        "values":[data[0]],
                        "text": "Jewellery",
                        "background-color": "#F75D59"
                    },
                    {
                        "values": [data[1]],
                        "text": "Watches",
                        "background-color": "#E9AB17"
                    },
                    {
                        "values": [data[2]],
                        "text": "Belts",
                        "background-color": "#3BB9FF"
                    },
                    {
                        "values": [data[3]],
                        "text": "Phone Cases",
                        "background-color": "#4CC417"
                    },
                    {
                        "values":[data[4]],
                        "text": "Cables",
                        "background-color": "#30cfb9"
                    },
                    {
                        "values": [data[5]],
                        "text": "Charges",
                        "background-color": "#FF8040"
                    },
                    {
                        "values": [data[6]],
                        "text": "Selfie Stick",
                        "background-color": "#C48189"
                    }
                ]
            }

        ]
    };
    

    zingchart.render({
        id: 'Accessories',
        data: myConfig,
    });
}
}
function showbooks(data){
if ($('#Books').length) {

    zingchart.THEME = "classic";

    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },
        "graphset": [{
                "type": "pie",
                "background-color": "#fff",
                "legend": {
                    "background-color": "none",
                    "border-width": 0,
                    "shadow": false,
                    "layout": "float",
                    "margin": "auto auto 16% auto",
                    "marker": {
                        "border-radius": 3,
                        "border-width": 0
                    },
                    "item": {
                        "color": "%backgroundcolor"
                    }
                },
                "plotarea": {
                    "background-color": "#FFFFFF",
                    "border-color": "#DFE1E3",
                    "margin": "25% 8%"
                },
                "labels": [{
                    "x": "45%",
                    "y": "47%",
                    "width": "10%",
                    "text": "Books",
                    "font-size": 17,
                    "font-weight": 700
                }],
                "plot": {
                    "size": 75,
                    "slice": 90,
                    "margin-right": 0,
                    "border-width": 0,
                    "shadow": 0,
                    "value-box": {
                        "visible": true
                    },
                    "tooltip": {
                        "text": "%v Item",
                        "shadow": true,
                        "border-radius": 2
                    }
                },
                "series": [{
                        "values": [data[0]],
                        "text": "Art and Humanities",
                        "background-color": "#F75D59"
                    },
                    {
                        "values": [data[1]],
                        "text": "Fiction",
                        "background-color": "#E9AB17"
                    },
                    {
                        "values": [data[2]],
                        "text": "Entertainment",
                        "background-color": "#3BB9FF"
                    },
                    {
                        "values": [data[3]],
                        "text": "Science and Technology",
                        "background-color": "#4CC417"
                    },
                    {
                        "values": [data[4]],
                        "text": "Education",
                        "background-color": "#30cfb9"
                    }
                ]
            }

        ]
    };
    

    zingchart.render({
        id: 'Books',
        data: myConfig,
    });
}
}










