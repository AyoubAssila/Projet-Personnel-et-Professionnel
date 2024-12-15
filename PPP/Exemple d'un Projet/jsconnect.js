function verifconn(){
    var email=document.getElementById("email").value;
    var mdp=document.getElementById("password").value;
    if(email==""){
        alert("Veuillez saisir votre adresse E-mail");
        return false;
    }
    if(mdp==""){
        alert("Veuillez saisir votre adresse Mot de passe");
        return false;
    }
}
function annulerconn(){
    var email=document.getElementById("email").value="";
    var mdp=document.getElementById("password").value="";
}