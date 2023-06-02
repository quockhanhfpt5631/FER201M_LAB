$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
   });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
   });
});



$('#ReverseModal').click(function () {
    $('#ReverseModal_table').modal('show');

});

button.addEventListener("click", function () {
   form.style.display = "block";
});



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});