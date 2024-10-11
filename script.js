// Fonction pour basculer les options de partage
function toggleShareOptions(button) {
    const shareOptions = button.nextElementSibling;
    shareOptions.style.display = shareOptions.style.display === 'none' ? 'flex' : 'none';
}

// Fonction pour télécharger une image
function downloadImage(imageSrc) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fonction pour télécharger et partager sur WhatsApp
function downloadAndShareOnWhatsApp(imageSrc) {
    downloadImage(imageSrc);
    const message = encodeURIComponent("Découvrez ce maillot !");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Fonction pour partager sur Telegram
function shareOnTelegram(imageSrc) {
    const message = encodeURIComponent("Découvrez ce maillot : ");
    const url = encodeURIComponent(imageSrc);
    const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${message}`;
    window.open(telegramUrl, '_blank');
}

// Fonction pour ouvrir la lightbox
function openLightbox(imageElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageElement.src;
    lightbox.style.display = 'flex';
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

