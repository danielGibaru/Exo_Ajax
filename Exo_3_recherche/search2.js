$(document).ready(function(){

     $("#search").keyup(function(){

var term= $(this).val().trim();
     if(term){
          $("#reponse").html('<img src="load.gif"> Recherche en cours...');
          $.ajax({
               // on declare le type
               type: "GET",
               //on definit le fichier PHP
               url: "search.php",
               //on définit le type de donnée
               dataType: "json",
               //on récupere la valeur du champ de formulaire qui est stocké dans
               // la variable input et on la stock dans la variable term
               // on l'envoie dans le fichier search PHP
               data:{term:term},
               success: function(msg) {
                    // si la reponse n'est pas vide

                    if (msg) {
                         // resultat
                         var rel = "";
                         for (var i = 0; i < msg.length; i++) {
                              // on récupère les valeurs de msg
                              //name
                              var name = msg[i]['name'];
                              //firstname
                              var firstname = msg[i]['firstname'];
                              // email
                              var email = msg[i]['email'];
                              //on fait une concaténation de chaines
                              rel += '| Nom : ' + name + '| Prenom :' + firstname + '| Email :' + email + "<br>";
                         }
                         // on affiche le resultat rel dans le html
                         $("#reponse").html(rel);
                    }
               }
          });
          //sinon
     } else {
          //on affiche enter search term
          $("#reponse").html('<center><h2>Enter search term.</h2></center>');
     };
});
});
