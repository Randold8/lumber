document.addEventListener('DOMContentLoaded', function() {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
        // Get all phone number links
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

        // For each phone link
        phoneLinks.forEach(link => {
            // Get the text content
            const phoneNumber = link.textContent;
            // Replace the link with just the text
            link.outerHTML = phoneNumber;
        });
    }
});
