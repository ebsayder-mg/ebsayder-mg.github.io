// Fonction pour vérifier si l'adresse IP de l'utilisateur est dans la liste noire
function isIpBannie(adresseIpUtilisateur, ipListeNoire) {
    return ipListeNoire.includes(adresseIpUtilisateur);
}

// Fonction pour effectuer la redirection si l'adresse IP est bannie
function verifierEtRediriger(adresseIpUtilisateur, ipListeNoire) {
    if (isIpBannie(adresseIpUtilisateur, ipListeNoire)) {
        // Rediriger l'utilisateur vers la page de bannissement
        window.location.href = "https://pikayutmg.github.io/redirect/ban.html";
    }
}

// Récupérer la liste des adresses IP et l'adresse IP de l'utilisateur à partir du fichier JSON distant
fetch("https://enesgp.github.io/ban.json")
    .then(response => response.json())
    .then(data => {
        const adresseIpUtilisateur = data.adresseIpUtilisateur;
        const ipListeNoire = data.ipBannies;
        verifierEtRediriger(adresseIpUtilisateur, ipListeNoire);
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données depuis le fichier JSON : " + error);
    });
