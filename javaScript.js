$("#boutonSoumettre").on("click", (function(){
    if (($("#titre").val() !== "") && ($("#genre").val() !== "Choisir un genre") && ($("#statut").val() !== "Choisir un statut")) {
        $("#mesFilmsSeries").append("<tr> <td> " + $("#titre").val() + "</td> <td> " + $("#genre").val() + "</td> <td class='statutTableau'> " + $("#statut").val() + "</td> <td> <button type='button' class='delete'>Supprimer</button></td></tr>");
        $("#titre").val("");
        $("#genre").val("Choisir un genre");
        $("#statut").val("Choisir un statut");
        $("#nbTotal").html($(".statutTableau").length);
        $("#nbAVoir").html($(".statutTableau").filter(function(index){
            return $(this).text().trim() === "À voir";
        }).length);
        $("#nbEnCours").html($(".statutTableau").filter(function(index){
            return $(this).text().trim() === "En cours";
        }).length);
        $("#nbVu").html($(".statutTableau").filter(function(index){
            return $(this).text().trim() === "Vu";
        }).length);
        $("#avertissementRequired").text("");
        if (($("#statut").val() !== $("#filtre").val()) && ($("#filtre").val() !== "Tous")) {
            $(".statutTableau").parent().last().hide();
        }
    } else {
        $("#avertissementRequired").text("Veuillez remplir tous les champs.");
    }
}))

$("#mesFilmsSeries").on("click", ".delete", (function(){
    $(this).parent().parent().children().remove();
    $("#nbTotal").html($(".statutTableau").length);
    $("#nbAVoir").html($(".statutTableau").filter(function(index){
        return $(this).text().trim() === "À voir";
    }).length);
    $("#nbEnCours").html($(".statutTableau").filter(function(index){
        return $(this).text().trim() === "En cours";
    }).length);
    $("#nbVu").html($(".statutTableau").filter(function(index){
        return $(this).text().trim() === "Vu";
    }).length);
}));

$("#filtre").on("change", function(){
    $(".statutTableau").each(function(index){
        if (($(this).text().trim() === $("#filtre").val()) || ($("#filtre").val() === "Tous")) {
            $(this).parent().show();
        } else  {
            $(this).parent().hide();
        }
    })
})