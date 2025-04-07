const dynamicEl = [];
const numberOfImages = 31; 
for (let i = 0; i <= numberOfImages; i++) {
    dynamicEl.push({
      src: "assets/img/gallery/" + i + ".jpg", // Full image URL
      thumb: "assets/img/gallery/thumb/" + i + ".jpg", // Thumbnail URL
    });
}

const $lgContainer = document.getElementById("inline-gallery-container");

const inlineGallery = lightGallery($lgContainer, {
  container: $lgContainer,
  dynamic: true,
  // Turn off hash plugin in case if you are using it
  // as we don't want to change the url on slide change
  hash: false,
  // Do not allow users to close the gallery
  closable: false,
  // Add maximize icon to enlarge the gallery
  showMaximizeIcon: true,
  
  // Append caption inside the slide item
  // to apply some animation for the captions (Optional)
  appendSubHtmlTo: ".lg-item",
  // Delay slide transition to complete captions animations
  // before navigating to different slides (Optional)
  // You can find caption animation demo on the captions demo page
  slideDelay: 400,
  plugins: [lgZoom, lgThumbnail],
  dynamicEl:dynamicEl,
  thumbWidth: 80,
  thumbHeight: "60px",
  thumbMargin: 4
});
setTimeout(() => {
    inlineGallery.openGallery();
  }, 200);

  const maximizeIButton =document.getElementById('lg-maximize-1');
  const navbar = document.getElementById('navbar');
  let isMaximized = false;
  maximizeIButton.addEventListener('click', () => {
    isMaximized = !isMaximized;
    if (isMaximized) {
        // Hide the navbar
        navbar.style.display = 'none';
      } else {
        // Show the navbar again
        navbar.style.display = 'block';
      }
  });