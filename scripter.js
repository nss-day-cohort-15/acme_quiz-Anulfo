$(document).ready(function(){
var categories;
var types;
var products;
    var catData = function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "categories.json"
            }).done(function(cat) {
                resolve(cat);
            }).fail(function(xhr, status, error){
                reject(error);
            })
        })
    }

    var typData = function(cat) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "types.json", data: cat
            }).done(function(typ){
                resolve(typ);
            }).fail(function(xhr, status, error) {
                reject(error);
            })
        })
    }    

    var prodData = function(catandtyp) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "products.json", data: catandtyp
            }).done(function(catandtyp){
                resolve(catandtyp);
            }).fail(function(xhr, status, error) {
                reject(error);
            })
        })
    }

    catData()
        .then(function(cat) {
        categories = cat;
        return typData();
        })
        .then(function(typ) {
        objecTyp = typ;
        return prodData();
        })
        .then(function (prod) {
        products = prod;
        console.log(categories, objecTyp, products);
        $("#fire").click(function(event){
            $("#showGrid").empty();
            clickFireTypes(categories, objecTyp,products)
        }); 
        $("#demo").click(function(event){
            clickDemoTypes(categories, objecTyp,products)
        });        
    })
})
                // typArray += $("#showGrid").html += `<div class="card">
                // $("div.card").append<div class="header">
                // $("div.header").append<h1>${types[i].name}</h1>`
                // console.log(typArray);

