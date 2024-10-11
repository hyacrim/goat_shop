function toggleShareOptions(button) {
        const shareOptions = button.nextElementSibling; // Trouver l'élément suivant qui contient les options
        if (shareOptions.style.display === "none") {
            shareOptions.style.display = "flex"; // Afficher les options
        } else {
            shareOptions.style.display = "none"; // Cacher les options si elles sont déjà affichées
        }
    }

    function downloadImage(imageSrc) {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    function downloadAndShareOnWhatsApp(imageSrc) {
        // Télécharger l'image
        downloadImage(imageSrc);
    
        // Ouvrir WhatsApp avec un message
        const message = encodeURIComponent("Découvrez ce maillot !");
        const whatsappUrl = `https://wa.me/?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }
    
    function toggleShareOptions(button) {
        const shareOptions = button.nextElementSibling; // Récupère le div qui contient les options de partage
        shareOptions.style.display = shareOptions.style.display === 'none' ? 'block' : 'none';
    }
    

    
    function shareOnTelegram(imageSrc) {
        const message = encodeURIComponent("Découvrez ce maillot : ");
        const url = encodeURIComponent(imageSrc);
        const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${message}`;
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
