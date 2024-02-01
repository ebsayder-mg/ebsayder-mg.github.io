<!-- redirect -->
<script>
    function redirectToAdminPage() {
        const email = getCookie("Email");
        const password = getCookie("Password");

        if (email && password) {
            const apiUrl = "https://ebsayderflyse.vercel.app/s-c/admin/json/connect";
            const connectUrl = `${apiUrl}/email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
            
            // Vérifier dans l'URL spécifiée
            fetch(connectUrl)
                .then(response => response.json())
                .then(data => {
                    // Vérifier si la connexion a réussi
                    if (data.success) {
                        // Rediriger vers la page d'administration
                        const redirectURL = `https://ebsayder-mg.github.io/gouv/admin/connecter?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
                        window.location.href = redirectURL;
                    } else {
                        alert("La connexion a échoué. Veuillez vérifier vos informations d'identification.");
                    }
                })
                .catch(error => {
                    console.error("Erreur lors de la connexion :", error);
                });
        } else {
            alert("Aucun e-mail et mot de passe trouvés dans les cookies.");
        }
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Redirection automatique lorsque la page se charge (vous voudrez peut-être déclencher cet événement en fonction de l'interaction de l'utilisateur)
    window.onload = redirectToAdminPage;
</script>
