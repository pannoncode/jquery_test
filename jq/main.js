$(document).ready(function() {
    $("#hideshow").click(function() {
        $(".card-img-top").toggle("slow");
    });

    $(".card-img-top").hover(function() {
        $(this).css("filter", "grayscale(60%)");
    }, function() {
        $(this).css("filter", "grayscale(5%)");
    });

    $("#animatewidth").click(function() {
        $(".card-img-top").animate({ width: "50rem" });
    });

    $("#animatereset").click(function() {
        $(".card-img-top").animate({ width: "36rem" });
    });

    $("#changepic").click(function() {
        $("#pic").attr('src', "./assets/galaxies.jpg");
    });

    $("#resetpic").click(function() {
        $("#pic").attr('src', "./assets/universe.jpg");
    });

    $("#last").click(function() {
        $("h5").html("<h1>Köszönöm hogy megnézted</h1>")
    });
});