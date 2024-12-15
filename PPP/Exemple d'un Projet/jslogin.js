function verif() {
    var nom = document.getElementById("name").value;
    var prenom = document.getElementById("prenom").value;
    var datenaiss = document.getElementById("date").value;
    var dateActuelle = new Date();
    var email = document.getElementById("email").value;
    var anbc = document.getElementById("annbac").value;
    var mdp=document.getElementById("password").value;
    var confirmmdp=document.getElementById("confirm_password").value;

    // Vérification des champs vides
    if (nom === "") {
        alert("Veuillez remplir le nom");
        return false;
    }
    if (prenom === "") {
        alert("Veuillez remplir le prénom");
        return false;
    }
    if (datenaiss === "") {
        alert("Veuillez remplir la date de naissance");
        return false;
    }
    if (email === "") {
        alert("Veuillez remplir l'adresse email");
        return false;
    }
    if (anbc === "") {
        alert("Veuillez remplir l'année du Bac");
        return false;
    }

    // Vérification de la date de naissance (datenaiss est une chaîne, donc on crée un objet Date)
    var dateNaissance = new Date(datenaiss);
    if (dateNaissance > dateActuelle) {
        alert("La date saisie est invalide !");
        return false;
    }
    var anneeBac = parseInt(anbc); // Convertir l'année du Bac en nombre
    if (isNaN(anneeBac)) {
        alert("Veuillez entrer une année valide pour le Bac");
        return false;
    }

    if (anneeBac > dateActuelle.getFullYear()) {
        alert("L'année du Bac doit être inférieure ou égale à l'année actuelle !");
        return false;
    }
    if(mdp===""){
        alert("Veuillez saisir votre adresse Mot de passe");
        return false;
    }
    if(mdp!==confirmmdp){
        alert("Les mots de passe ne sont pas identiques");
        return false;
    }
    // Vérification de l'adresse email
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("L'adresse email saisie est invalide");
        return false;
    }
    // Si tous les champs sont remplis correctement
    alert("Formulaire correctement rempli");
    return true;
}

function annuler() {
    document.getElementById("name").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("date").value = "";
    document.getElementById("email").value = "";
    document.getElementById("annbac").value = "";
    alert("Formulaire annulé");
}
