document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth >= 768) {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
      const toggleImage = gallery.querySelector('.toggle-image');
      const images = toggleImage.querySelectorAll('img');
      const imageWidth = 100 / images.length;
      let currentPosition = 0;

      setInterval(() => {
        currentPosition += imageWidth;
        if (currentPosition >= 100) {
          currentPosition = 0;
        }
        toggleImage.style.transform = `translateX(-${currentPosition}%)`;
      }, 4000);
    });
  }
});
