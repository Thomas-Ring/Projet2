$("#boutonSoumettre").on("click", (function(){
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