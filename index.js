function slideshowFun(images){
    
}
let images=document.getElementById("img");
let currentImage=0;

// Use the following data for slideshow
var movieImages = [
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0745fec9-3602-4f05-9d3e-c8862788ff3d.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe63bbea8-d7c4-490f-be8d-16cc843b3c44.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0886c9f4-a521-4ff2-9ec7-6a5947860753.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9723d8e3-9e99-459f-acfe-4ef93089e9ef.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffeb81cd7-cb89-4d40-8b45-b2f5bfe406d9.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F14bd68a6-77a3-4cac-8d80-bce249d31a01.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff3167316-1728-4c8d-8389-3e467cf033a0.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff4cc339d-4a3d-47f1-b4de-80f9744a69cb.jpg&w=1920&q=75"
];

images.setAttribute("src",movieImages[currentImage]);
window.addEventListener("load", function () {
    setInterval(() => {
      currentImage++;
      if(currentImage>=movieImages.length){
        currentImage=0;
      }
      images.setAttribute("src",movieImages[currentImage]);
    }, 3000);
  // add event-listeners;
});

slideshowFun()