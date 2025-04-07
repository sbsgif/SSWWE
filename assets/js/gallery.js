
const Suhail_gallery = document.getElementById('dynamic-gallery-Suhail');
const dynamic_gallery_Suhail = lightGallery(Suhail_gallery, {
    dynamic: true,
    hash: false,
    closable: true,
    showMaximizeIcon: false,
    appendSubHtmlTo: '.lg-item',
    lazyLoad: true,
    preload: [0, 1],
    slideDelay: 400,
    videojs: true,
    videojsOptions: {
      autoplay:false,
        preload: true,
        loop:true,
        controls:true,
        playbackRate: 3 ,
    },
    vimeoPlayerParams: {
      byline : 0,
      portrait : 0,
      color : 'A90707'     
    },
    mobileSettings:{
      showCloseIcon: true,
      controls: true,
  },
    attributes: { preload: true, controls: true },
    plugins: [lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo],
  });

//  navabr dynamic
document.addEventListener('DOMContentLoaded', () => {
    Suhail_gallery.addEventListener('lgAfterOpen', () => {
       
        document.getElementById('navbar').style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
Suhail_gallery.addEventListener('lgAfterClose', () => {
    
    document.getElementById('navbar').style.display = 'block';
});
});

function Gallery(name, i) {
  // Define an empty array for the gallery items
  const newItems = [];

  // Loop to create items dynamically based on 'i' parameter
  for (let j = 0; j <= i; j++) {
    newItems.push({
      src: "assets/img/gallery/(" + j + ").jpg", // Full image URL
      thumb: "assets/img/gallery/thumb/(" + j + ").jpg", // Thumbnail URL
      subHtml: '', // Optional caption or description
    });
  }
  // Ensure the gallery is initialized before refreshing
  if (dynamic_gallery_Suhail && typeof dynamic_gallery_Suhail.refresh === 'function') {
    // Refresh the gallery with new items
    dynamic_gallery_Suhail.refresh(newItems);

    // Open the gallery after refreshing
    dynamic_gallery_Suhail.openGallery();
  } else {
    console.error("dynamic_gallery_Suhail is not properly initialized.");
  }
}

  