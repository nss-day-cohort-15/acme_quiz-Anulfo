var clickFireTypes = function (categories, objecTyp, products) {      
// this array get the selected types which category is 0, so they belong to fireworks

            var typFireworks = []; 

// console.log(objecTyp.types);

// this for loop over here select just the types with category 0 and pushed them into the typFireworks array.

            // console.log(typFireworks);
            for (var i = 0; i < objecTyp.types.length; i++) {
            if (objecTyp.types[i].category === 0) {
                typFireworks.push(objecTyp.types[i]);
            };
            }
            for (var i = 0; i < typFireworks.length; i++){
            var typCards = "";
            typCards += `<div id="card${i}"  class="types">
            <div class="header">
            <h1>${typFireworks[i].name}</h1>
            </div>
            <div class="content">
            <p>${typFireworks[i].description}</p>
            </div>`
            // console.log(typCards);
            $("#showGrid").append(typCards);
            }
            $(".types").click(function(evt){
            clickFireProd(evt, products);
        });
}

var clickFireProd = function (evt, products) {
    var currentCard = evt.currentTarget;
    var pers = []; 
    var ceremonial = []; 
    var party = [];
    console.log(products.products.length);
    for (var i = 0; i < products.products.length; i++){
        if (products.products[i].type === 0) {
            pers.push(products.products[i]);
        }
    }  
    console.log(pers);  
}
var clickDemoTypes = function (categories,objecTyp, products) {
        console.log(objecTyp.types);
 }