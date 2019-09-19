$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var nameInput = $("input#name").val();
    var dobInt = $("#born").val();
    var musicInt = $("#music").val();
    var dessertInt = $("input:radio[name=style]:checked").val();
    var favoriteColor = $("#color").val();

    $(".name").text(nameInput);
    $(".born").text(dobInt);
    $(".music").text(musicInt);
    $(".dessert").text(dessertInt);
    $(".color").css("color", favoriteColor);

    $("#complete").show();

    event.preventDefault();
  });
});
