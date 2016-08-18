var clickFireTypes = function (categories, objecTyp, products) {      
// this array get the selected types which category is 0, so they belong to fireworks
    // console.log(objecTyp);

        var typFireworks = []; 
// console.log(objecTyp.types);
// this for loop over here select just the types with category 0 and pushed them into the typFireworks array.

    console.log(typFireworks);
        for (var i = 0; i < objecTyp.types.length; i++) {
            if (objecTyp.types[i].category === 0) {
                typFireworks.push(objecTyp.types[i]);
            };
        }
            // console.log(typFireworks);
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
        var currentCard = evt.currentTarget;
        clickFireProd(products, typFireworks);
        clickSelector(currentCard, typFireworks);
    });
}
// this function distributes the products among the types, based on type
var clickFireProd = function (products, typFireworks) {
// this variables represent the types for each product
    var pers = []; 
    var party = [];
    var ceremonial = []; 
    console.log(products.products.length);
    for (var i = 0; i < products.products.length; i++){
        if (products.products[i].type === 0) {
            pers.push(products.products[i]);
        }
        else if (products.products[i].type === 1) {
            party.push(products.products[i]);
        }
        else if (products.products[i].type === 2) {
            ceremonial.push(products.products[i]);
        }
    }  
    console.log(pers);
    console.log(party);
    console.log(ceremonial);
}

var clickSelector = function (currentCard, typFireworks) {
    console.log(currentCard);
    $(currentCard).removeClass("types");
    $(currentCard).addClass("selected");
    console.log($(typFireworks)[0].className);
    // for (var i = 0; i < typFireworks.length; i++) {
    //     console.log(typFireworks[i]);
        // if (typFireworks[i].classList === "types"){
        //     typFireworks[i].removeClass("types");
        //     typFireworks[i].addClass("hide");
        // }
    // }
    // console.log(typFireworks[0]);
}
// var clickDemoTypes = function (categories,objecTyp, products) {
//         console.log(objecTyp.types);
//  }