const imgs = document.getElementsByTagName("img");

const getOriginalSize = (imgs) => {
  for(i = 0;i < imgs.length; i++){
    console.log(`${imgs[i].naturalWidth} * ${imgs[i].naturalHeight}`);
  }
};

window.onload = () => {
  getOriginalSize(imgs)
};

