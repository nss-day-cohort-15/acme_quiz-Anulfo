var clickFireTypes = function (categories, objecTyp, products) {      
// this array get the selected types which category is 0, so they belong to fireworks
    // console.log(objecTyp);

        var typFireworks = []; 
// console.log(objecTyp.types);
// this for loop over here select just the types with category 0 and pushed them into the typFireworks array.
        for (var i = 0; i < objecTyp.types.length; i++) {
            if (objecTyp.types[i].category === 0) {
                typFireworks.push(objecTyp.types[i]);
            };
        }
            // console.log(typFireworks);
    for (var i = 0; i < typFireworks.length; i++){
        var typCards = "";
        typCards += `<div id="${i}"  class="types">
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
        // clickFireProd(products, typFireworks);
        clickSelector(currentCard, products);
    });
}

var clickSelector = function (currentCard, products) {
    console.log(currentCard);
    console.log($(".types"));
    $(".types").addClass("hide");
    $(currentCard).removeClass("hide");
    $(currentCard).addClass("selected");
    // populateTypes()
    productType = currentCard.id;
    var perProdCards = "";
    products.products.forEach(function(thing, index){
        if(thing.type === parseInt(productType)){
        perProdCards += `<div class="products">
        <div class="header">
        <h1>${thing.name}</h1>
        </div>
        <div class="content">
        <p>${thing.description}</p>
        </div>`
        }
    })
    console.log(productType);
    $("#showGrid").append(perProdCards);
}

var clickDemoTypes = function (categories,objecTyp, products) {
    console.log(objecTyp.types);

 }
    // for (var i = 0; i < typFireworks.length; i++) {
    //     $("#card" + i).removeClass("selected");
    //     $("#card" + i).addClass("hide");
    //     }
    // $(currentCard).removeClass("hide");
    // $(currentCard).addClass("selected");