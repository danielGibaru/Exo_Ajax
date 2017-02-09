/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$().ready(function(){
    
    $('#send').click(function(){
        
        var datas = $('#dNaissance');
           // alert(datas);
        $("#reponse").html('<img src="load.gif"> Recherche en cours...');
        
        $.ajax({
              type:"POST",
              url:"traitement.php",
              data:datas,
              success:function(msg){
                  if(msg){
                     // $('#form').hide("slow");
                 setTimeout(function(){ $("#reponse").html(msg);},3000);
                  }
              }
        });
    });
    
    
});

