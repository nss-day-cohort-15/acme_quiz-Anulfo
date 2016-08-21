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

    for (var i = 0; i < typFireworks.length; i++){
        var typCards = "";
        typCards += `
        <div id="${i}"  class="type col-md-4 ">
            <div class="header">
                <h1>${typFireworks[i].name}</h1>
            </div>

            <div class="content">
            <p>${typFireworks[i].description}</p>
            </div>
        </div>`
        // console.log(typCards);
        $("#typeGrid").append(typCards);
        }
        $(".type").click(function(evt){
        var currentCard = evt.currentTarget;
        clickSelector(currentCard, products);
    });
}

var clickSelector = function (currentCard, products) {
    // console.log(currentCard);
    // console.log($(".type"));
    $(".type").addClass("hide");
    $(currentCard).removeClass("hide");
    $(currentCard).addClass("selected col-lg-6");
    var productType = currentCard.id;
    var perProdCards = "";
    products.products.forEach(function(thing, index){
        // console.log(thing.type);
        if(thing.type === parseInt(productType)){
        perProdCards += `
        <div class="product col-md-4">
            <div class="header">
                <h1>${thing.name}</h1>
            </div>
            <div class="content">
            <p>${thing.description}</p>
            </div>
        </div>`
        }
    })
    $("#prodGrid").append(perProdCards);
}

var clickDemoTypes = function (categories,objecTyp, products) {
    $.each(objecTyp.types, function() {
        var typDemoCards = ""
        if (this.category === 1) {
            typDemoCards += 
            `<div id="${this.id}" class="type col-md-4">
                <div class="header">
                    <h1>${this.name}</h1>
                </div>
                <div class="content">
                    <p>${this.description}</p>
                </div>
            </div>`
        $("#typeGrid").append(typDemoCards);
        }
        });
        $(".type").click(function(evt){
        var currentCard = evt.currentTarget;
        clickSelector(currentCard, products);    
    });
}
