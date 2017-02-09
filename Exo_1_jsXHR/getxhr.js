function getxhr(){
    try
    {xhr=new XMLHttpRequest();}
    catch(e){
        try
        { xhr = new ActiveXObject("Microsoft.XMLHTTP");}
        catch(e1){
            try{
                xhr = new ActiveXObject("Msxml12.XMLHTTP");
            }
            catch(e2){
                alert("AJAX non supporté !");
            }
        }
    }
    return xhr;
}