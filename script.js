function toggleShareOptions(button) {
    const shareOptions = button.nextElementSibling; // Trouver l'élément suivant qui contient les options
    shareOptions.style.display = shareOptions.style.display === "none" ? "flex" : "none"; // Afficher ou cacher les options
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

    // Ouvrir WhatsApp avec un message et l'URL de l'image
    const message = encodeURIComponent("Découvrez ce maillot : ") + encodeURIComponent(imageSrc);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
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
