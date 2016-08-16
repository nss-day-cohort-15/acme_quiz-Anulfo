$(document).ready(function(){

    var catData = function() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "categories.json"
        }).done(function(data) {
            resolve(data);
        }).fail(function(xhr, status, error){
            reject(error);
        })
    })
}

    catData().then(function(categories) {
        console.log(categories);
    });
})
  // categoriesXHR()
  // .then(function(data1) {
  //   categories = data1;
  //   return typesXHR();
  // })
