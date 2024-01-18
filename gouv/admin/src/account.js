
       function retrieveData() {
            const email = getCookie("Email");
            const password = getCookie("Password");

            if (email && password) {
                const url = `https://ebsayder-mg.github.io/gouv/admin/account/email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}.json`;

                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('La réponse du réseau n\'était pas correcte');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Assuming the response contains the desired information
                        document.getElementById("pseudo").textContent = "Pseudo : " + data.pseudo;
                        document.getElementById("pseudo-g").textContent = "Pseudo Gmod : " + data.pseudoGmod;
                        document.getElementById("id").textContent = "Id : " + data.id;
                        document.getElementById("other").textContent = "Autres informations : " + data.other;
                    })
                    .catch(error => console.error('Erreur lors de la récupération des données :', error));
            } else {
                alert("Aucun email et mot de passe trouvés dans les cookies.");
                redirectToAdminPage();
            }
        }

        function redirectToAdminPage() {
            window.location.href = 'https://ebsayder-mg.github.io/gouv/admin/';
        }

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        // Trigger this event based on user interaction or onload as needed
        window.onload = retrieveData; 
