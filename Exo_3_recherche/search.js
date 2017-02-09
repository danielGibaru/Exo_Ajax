//si le document html qui appelle le script est
//totalement chargé
$().ready(function() {
//on initialise la var input
//var input renvoie l'élement dont l'id est "search"
//dans le document html
     var input = document.getElementById('search');
//addEventListener sert à gérer des évènements sur un
//élément cible, en l'occurence ici c'est form
// On lui demande de réagir au "submit"
//(e) c'est l'élement qui a généré l'évènement
     form.addEventListener('submit', function(e) {
//Annuler l'envoie du form et faire autre chose
// a la place
          e.preventDefault();
          //on récupere la valeur du champ de formulaire qui est stocké dans
          // la variable input et on la stock dans la variable SEARCH
          var search = input.value;
          // si la longueur de search est > 0
          if (search.length > 0) {
               // on affiche un petit rond qui charge
               $("#reponse").html('<img src="load.gif"> Recherche en cours...');

               // on configure ajax
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
                    data:{ term: $("#search").val() },
                    // on récupere la réponse du fichier PHP en cas de succès
                    success: function(msg) {
                         // si la reponse n'est pas vide
                         if (msg) {
                              // resultat
                              var rel = "";
                              // on parcour le tableau msg
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
