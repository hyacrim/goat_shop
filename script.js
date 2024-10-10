function toggleShareOptions(button) {
        const shareOptions = button.nextElementSibling; // Trouver l'élément suivant qui contient les options
        if (shareOptions.style.display === "none") {
            shareOptions.style.display = "flex"; // Afficher les options
        } else {
            shareOptions.style.display = "none"; // Cacher les options si elles sont déjà affichées
        }
    }

    function downloadImage(imageUrl) {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = imageUrl.split('/').pop();
        link.click();
    }

    function shareOnWhatsApp(itemName) {
        const url = window.location.href;
        const message = `Découvrez ${itemName} ici : ${url}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    function shareOnTelegram(itemName) {
        const url = window.location.href;
        const message = `Découvrez ${itemName} ici : ${url}`;
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    }
// Fonction pour ouvrir la lightbox avec l'image sélectionnée
function openLightbox(imageElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Met à jour l'image dans la lightbox avec celle cliquée
    lightboxImg.src = imageElement.src;
    
    // Affiche la lightbox
    lightbox.style.display = "flex";
}

// Fonction pour fermer la lightbox au clic
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Masque la lightbox
    lightbox.style.display = "none";
}
