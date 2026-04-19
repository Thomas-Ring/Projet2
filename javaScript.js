$("#boutonSoumettre").on("click", (function(){
        $("#mesFilmsSeries").append("<tr> <td> " + $("#titre").val() + "</td> <td> " + $("#genre").val() + "</td> <td> " + $("#statut").val() + "</td> <td> <button type='button' class='delete'>Supprimer</button></td></tr>");
        $("#titre").val("");
        $("#genre").val("");
        $("#statut").val("");
    }))

$("#mesFilmsSeries").on("click", ".delete", (function(){
        $(this).parent().parent().children().remove();
    }));