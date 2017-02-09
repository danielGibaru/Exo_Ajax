<?php
     // commentez chaque ligne aux emplacements prévus
    header("content-type:text/html;charset=utf-8");
                //
    //
    $dNaissance= $_POST['dNaissance'];
    //
    $jour = array("Dimanche","Lundi","Mardi","Mercredi","jeudi","Vendredi","Samedi");
    //
    if(preg_match("#\d\d/\d\d/\d\d\d\d#", $dNaissance))
    {
        //
        $tab= explode("/",$dNaissance);
        //
        if(checkdate($tab[1],$tab[0],$tab[2])){
            
        
            //
            echo "Vous êtes né un <b>".$jour[date("w",mktime(00,00,00,$tab[1],$tab[0],$tab[2]))]."</b>";
            
            //
            if(date("d")==date("d",mktime(00,00,00,$tab[1],$tab[0],$tab[2])) && date("m")==date("m",mktime(00,00,00,$tab[1],$tab[0],$tab[2]))){
                //
                //sleep(5000);
                
                echo "<br /><h2>Joyeux anniversaire  :)</h2>";
            }
        }else{echo "<div class='erreur'>Date invalide ! </div>";}
       
    }else{echo "<div class='erreur'>Date invalide ! </div>";}
?>
