$("#boutonSoumettre").on("click", (function(){
    if (($("#titre").val() !== "") && ($("#genre").val() !== "") && ($("#statut").val() !== "")) {
        $("#mesFilmsSeries").append("<tr> <td> " + $("#titre").val() + "</td> <td> " + $("#genre").val() + "</td> <td class='statutTableau'> " + $("#statut").val() + "</td> <td> <button type='button' class='delete'>Supprimer</button></td></tr>");
        $("#titre").val("");
        $("#genre").val("");
        $("#statut").val("");
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
    if ($("#filtre").val() === "Tous") {
        $("#mesFilmsSeries").children().show();
    } else {
        $(".statutTableau").each(function(index){
            if ($(this).text().trim() === $("#filtre").val()) {
                $(this).parent().show();
            } else  {
                $(this).parent().hide();
            }
        })
    }
})