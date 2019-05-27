$("#boutonBellatorUFC").click(function() {

    var texte = $('#boutonBellatorUFC').text();
    if (texte === "Bellator")
    {
        $("button").text("UFC");
        $('h2').text("Champions de Bellator")
    }
    if (texte === "UFC")
    {
        $("button").text("Bellator");
        $("h2").text("Champions de l'UFC");
    }

    var Heavy = $('#DanielCormier').attr("src");
    if (Heavy=== "img/UFC/DanielCormier.png")
    {
        $('#DanielCormier').attr("src", "img/Bellator/RyanBader.png");
    }
    if (Heavy === "img/Bellator/RyanBader.png")
    {
        $('#DanielCormier').attr("src", "img/UFC/DanielCormier.png");
    }

    var LightHeavy = $('#JonJones').attr("src");
    if (LightHeavy === "img/UFC/JonJones.png")
    {
        $('#JonJones').attr("src", "img/Bellator/RyanBader.png");
    }
    if (LightHeavy === "img/Bellator/RyanBader.png")
    {
        $('#JonJones').attr("src", "img/UFC/JonJones.png");
    }

    var Middle = $('#RobertWhittaker').attr("src");
    if (Middle === "img/UFC/RobertWhittaker.png")
    {
        $('#RobertWhittaker').attr("src", "img/Bellator/GegardMousasi.png");
    }
    if (Middle === "img/Bellator/GegardMousasi.png")
    {
        $('#RobertWhittaker').attr("src", "img/UFC/RobertWhittaker.png");
    }

    var Welter = $('#KamaruUsman').attr("src");
    if (Welter === "img/UFC/KamaruUsman.png")
    {
        $('#KamaruUsman').attr("src", "img/Bellator/RoryMacDonald.png");
    }
    if (Welter === "img/Bellator/RoryMacDonald.png")
    {
        $('#KamaruUsman').attr("src", "img/UFC/KamaruUsman.png");
    }

    var Light = $('#KhabibNurmagomedov').attr("src");
    if (Light === "img/UFC/KhabibNurmagomedov.png")
    {
        $('#KhabibNurmagomedov').attr("src", "img/Bellator/PatricioPitbull.png");
    }
    if (Light === "img/Bellator/PatricioPitbull.png")
    {
        $('#KhabibNurmagomedov').attr("src", "img/UFC/KhabibNurmagomedov.png");
    }

    var Feather = $('#MaxHolloway').attr("src");
    if (Feather === "img/UFC/MaxHolloway.png")
    {
        $('#MaxHolloway').attr("src", "img/Bellator/PatricioPitbull.png");
    }
    if (Feather === "img/Bellator/PatricioPitbull.png")
    {
        $('#MaxHolloway').attr("src", "img/UFC/MaxHolloway.png");
    }

    var Bantam = $('#Aucun').attr("src");
    if (Bantam === "img/UFC/Aucun.png")
    {
        $('#Aucun').attr("src", "img/Bellator/DarrionCaldwell.png");
    }
    if (Bantam === "img/Bellator/DarrionCaldwell.png")
    {
        $('#Aucum').attr("src", "img/UFC/Aucun.png");
    }

    var Fly = $('#HenryCejudo').attr("src");
    if (Fly === "img/UFC/HenryCejudo.png")
    {
        $('#HenryCejudo').attr("src", "img/Bellator/Aucun.png");
    }
    if (Fly === "img/Bellator/Aucun.png")
    {
        $('#HenryCejudo').attr("src", "img/UFC/HenryCejudo.png");
    }


    var WFeather = $('#AmandaNunes1').attr("src");
    if (WFeather === "img/UFC/AmandaNunes.png")
    {
        $('#AmandaNunes1').attr("src", "img/Bellator/JuliaBudd.png");
    }
    if (WFeather === "img/Bellator/JuliaBudd.png")
    {
        $('#AmandaNunes1').attr("src", "img/UFC/AmandaNunes.png");
    }

    var WBantam = $('#AmandaNunes2').attr("src");
    if (WBantam === "img/UFC/AmandaNunes.png")
    {
        $('#AmandaNunes2').attr("src", "img/Bellator/Aucune.png");
    }
    if (WBantam === "img/Bellator/Aucune.png")
    {
        $('#AmandaNunes2').attr("src", "img/UFC/AmandaNunes.png");
    }

    var WFly = $('#ValentinaShevchenko').attr("src");
    if (WFly === "img/UFC/ValentinaShevchenko.png")
    {
        $('#ValentinaShevchenko').attr("src", "img/Bellator/IlimaLeiMacfarlane.png");
    }
    if (WFly === "img/Bellator/IlimaLeiMacfarlane.png")
    {
        $('#ValentinaShevchenko').attr("src", "img/UFC/ValentinaShevchenko.png");
    }

    var WStraw = $('#JessicaAndrade').attr("src");
    if (WStraw === "img/UFC/JessicaAndrade.png")
    {
        $('#JessicaAndrade').attr("src", "img/Bellator/Aucune.png");
    }
    if (WStraw === "img/Bellator/Aucune.png")
    {
        $('#JessicaAndrade').attr("src", "img/UFC/JessicaAndrade.png");
    }
});

$("#boutonDark").click(function(){
    var texte = $('#boutonDark').text();
    if (texte === "Mode Foncé")
    {
        $("#boutonDark").text("Mode Clair");
        $(".row").css("background-color","black");
        $(".row").css("color","white");
    }
    if (texte === "Mode Clair")
    {
        $("#boutonDark").text("Mode Foncé");
        $(".row").css("background-color","white");
        $(".row").css("color","black");
    }

});

$("#boutonBio").click(function(){
    $("p").html("Adolescent rebelle, Éric Gagné a quitté le domicile familial de Mascouche à l'âge de 15 ans dans " +
        "l'espoir de devenir un lanceur de baseball professionnel. Expulsé du programme d'excellence de la " +
        "fédération québécoise et ignoré au repêchage par toutes les équipes des ligues majeures, il a " +
        "miraculeusement été embauché par un recruteur des Dodgers de Los Angeles qui croyait en lui. Quelques " +
        "années plus tard, contre toute attente, il est instantanément devenu une méga-star et l'un des plus " +
        "redoutables releveurs de l'histoire du baseball majeur. Entre 2002 et 2004, il a dominé comme aucun autre " +
        "lanceur ne l'avait fait auparavant, ce qui lui a valu la conquête du prestigieux trophée Cy Young et la " +
        "réalisation de 84 sauvetages consécutifs, un record qui ne sera probablement jamais battu. Dans l'univers " +
        "ultra-compétitif du baseball professionnel, et à une époque tristement associée à une consommation " +
        "généralisée de produits dopants, Gagné est toutefois passé comme une étoile filante.\n");
});
