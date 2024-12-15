function verifconn() {
    // Récupération des valeurs des champs
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var sujet = document.getElementById("suj").value;
    var message = document.getElementById("message").value;

    if (nom === "") {
        alert("Veuillez saisir votre nom");
        return false;
    }
    if (prenom === "") {
        alert("Veuillez saisir votre prénom");
        return false;
    }
    if (email === "") {
        alert("Veuillez saisir votre adresse E-mail");
        return false;
    }
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez saisir un email valide");
        return false;
    }
    if (sujet === "") {
        alert("Veuillez sélectionner un sujet");
        return false;
    }
}

function annulerconn(){
    var nom=document.getElementById("nom").value="";
    var prenom=document.getElementById("prenom").value="";
    var email=document.getElementById("email").value="";
    var select=document.getElementById("suj").value="";
    varmsg=document.getElementById("message").value="";
}