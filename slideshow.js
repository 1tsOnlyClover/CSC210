const images = [
    "https://www.bhg.com/thmb/DwWTe7YrVLa2vyshJxqIOriyDlM=/600x0/filters:no_upscale():strip_icc()/RosaEasyEleganceSunriseSunset-06-3294-1-t-m-8bb58ab6a7a445b3a3f123bf793159de.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybBunz-AqtrzGUWHaoznctAVReqvG2fQNr9s-1V-Zhp3YNTb-1EQXwgDdrpukIVFpyvc&usqp=CAU",
    "https://www.gardendesign.com/pictures/images/263x300Exact/site_3/eden-rose-climbing-rose-rambling-rose-garden-design_15273.jpg",
];


const slideshowElement = document.getElementById("slideshow");


let currentImageIndex = 0;


function updateSlideshow() {

    const img = document.createElement("img");
    img.src = images[currentImageIndex];


    slideshowElement.innerHTML = "";


    slideshowElement.appendChild(img);


    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(updateSlideshow, 3000);
