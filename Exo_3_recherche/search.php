<?php
//config de la db
//on definit les parametres de connexion
define("PDO_HOST", "localhost");
define("PDO_DBBASE", "zemzend_bdd");
define("PDO_USER", "root");
define("PDO_PW", "root");
//test co
try{
     //on crée un nouvel objet
     $db = new PDO(
     "mysql:host=" . PDO_HOST . ";".
     "dbname=" . PDO_DBBASE, PDO_USER, PDO_PW,
     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8") );
     $GLOBALS=$db;
}
catch (PDOException $e){
     //si Erreur de la db tout stopper
     print "Erreur !: " . $e->getMessage() . "<br/>";
     die();
}

$db=$GLOBALS;
//$search = $_POST['search'];
//rechercher dans la bd
//fonction pour recuperer sous forme d'obj
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
//on stock dans la var search la valeur de term
$search = $_GET['term'];
//strip_tag sert à supp les balises HTML et PHP
// trim sert a supp les espaces en début & fin
$search = trim(strip_tags($search));
// explode sert à couper la chaine de caractères
$search_terms = explode(" ", $search);
// on commence de 0
$term_count = 0;
// on initialise la var $q à vide
$q = "";
// le resultat sera stocké dans un tableau
$result = array();
// création var i égale à zero
$i = 0;

// Pour chaque terme dans la liste des termes
foreach ($search_terms as $term) {
// compter et incrémenter
     $term_count++;
// Si on a exactement un seul terme de recherche
     if($term_count === 1){
          // on stock le morceau de requête dans $q
          // le nom doit être semblable à %term%
          // . = ajouter à la suite
          $q .= "`name` LIKE '%$term%' ";
          //sinon
     }else{
          // Ou un autre %term%
          $q .= "OR `name` LIKE '%$term%' ";
     }
}
//tout selectionner depuis la table user où le morceau
// de requête que l'on a initialser plus haut
$query = $db->query("SELECT * FROM `user` WHERE $q");
// On initialise une var num qui compte le nombre de lignes
$num = $query->rowCount();

//Si num est supp à zero
if($num > 0){
// Tant qu'il y a un élément à récupérer
     while($row = $query->fetch(PDO::FETCH_ASSOC)){
//On stock le résultat dans le tab $result
          $result[$i] =  array(
          //ceci est un tableau multidimentionnel
          'name' => $row['name'],
          'firstname' => $row['firstname'],
          'email' => $row['email']
          );
          // chaque fois que tu as récupéré un résultat tu incrémentes
          // l'index de result et on avance dans la 1ere dimension
          $i++;
     }
}
// encode le resultat en json car on attends ce resultat en json
$json_result = json_encode($result);
//Affiche
echo $json_result;
// $results->closeCursor();
