var imageSlide = [
  "images/sunset.jpeg",//https://www.pexels.com/photo/backlit-beautiful-clouds-color-415702/
  "images/danbo.jpeg",//https://www.pexels.com/photo/animation-black-blur-box-262297/
  "images/cityLights.jpeg",//https://www.pexels.com/photo/raised-building-frame-169647/
  "images/carLights.jpeg",//https://www.pexels.com/photo/timelapse-photography-of-vehicle-on-concrete-road-near-in-high-rise-building-during-nighttime-169677/
  "images/parisPaint.jpeg",//https://www.pexels.com/photo/architecture-art-artistic-artwork-384522/
  "images/cityPaint.jpeg"//https://www.pexels.com/photo/yellow-and-brown-house-painting-164455/
];
/*var imageSource = [
  "https://www.pexels.com/photo/backlit-beautiful-clouds-color-415702/",
  "https://www.pexels.com/photo/animation-black-blur-box-262297/",
  "https://www.pexels.com/photo/raised-building-frame-169647/",
  "https://www.pexels.com/photo/timelapse-photography-of-vehicle-on-concrete-road-near-in-high-rise-building-during-nighttime-169677/",
  "https://www.pexels.com/photo/architecture-art-artistic-artwork-384522/",
  "https://www.pexels.com/photo/yellow-and-brown-house-painting-164455/"
];*///This array is for a feature I am planning on adding, but is not currently being used
var imgNum = 0;

function prev() {
  var slide = document.getElementById("slide");
  imgNum--;
  if (imgNum < 0) {
      imgNum = imageSlide.length-1;
  }
  slide.src = imageSlide[imgNum];
}//This function will decrease the number by 1, changing the image url to it's associated number

function next() {
  var slide = document.getElementById("slide");
  imgNum++;
  if (imgNum >= imageSlide.length){
      imgNum = 0;
  }
  slide.src = imageSlide[imgNum];
}//This function will increase the number by 1, changing the image url to it's associated number

function gallery(x) {
  var selected = document.getElementById("selectedImg")
  selected.src = imageSlide[x]
  var imgHref = document.getElementById("imgHref")
  imgHref.href = imageSlide[x]
}//This will changed the selected image
