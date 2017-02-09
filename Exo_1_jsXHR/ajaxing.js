function ajaxing(){
    xhr=getxhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4)
            document.getElementById("reponse").innerHTML=xhr.responseText;
        else
            document.getElementById("reponse").innerHTML="<img src ='load.gif'/>";
    }
    xhr.open("POST","traitement.php",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send("dNaissance="+document.getElementById("dNaissance").value);
}