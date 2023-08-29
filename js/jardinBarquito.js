let collapseContainer = document.querySelector(".Header-div--container");
let shipSvg = document.querySelector(".Header-svg--ship");
let xSvg = document.querySelector(".Header-svg--x");
let menuButton = document.querySelector(".Header-button");
let shipContainer = document.querySelector(".Header-div--container");
let menuWidth = document.querySelector(".Header-div--menu").clientWidth;
let xCirclePosition = (menuWidth - 246.33) / 4;
let keyFormOk;

let buttonScrollTop = document.querySelector(".Li-a--scrollTop");

let servicesSection = document.querySelector("#servicesSection");
let groupsSection = document.querySelector("#groupsSection");
let ourGartenSection = document.querySelector("#ourGartenSection");
let humanTalentSection = document.querySelector("#humanTalentSection");
let partnersSection = document.querySelector("#partnersSection");
let accreditationSection = document.querySelector("#accreditationSection");
let gallerySection = document.querySelector("#gallerySection");
let contactSection = document.querySelector("#contactSection");
let captcha = document.querySelector(".Section-p--captcha");
let sectionForm = document.querySelector(".Section-form");
let submitFormOk =document.querySelector(".Section-div--submitFormOK");
let sectionDivider = document.querySelector(".Section-div-sectionDividerDown");
let banner = document.querySelector(".Section--banner");
const imgList = document.querySelectorAll("#gallery .Section-div--content img");
const lightbox = document.querySelector("#gallery .Section-div--lightbox");
const bigImage = document.querySelector("#gallery .Section-div--lightbox .bigImage");
const closeLightbox = document.querySelector("#gallery .Section-div--lightbox .close");

if (window.innerWidth < 1250) {
  shipContainer.style.clipPath = `circle( 23rem at ${
    menuWidth - xCirclePosition - 35
  }rem 39rem)`;
  console.log(`width little:${window.innerWidth}`);
} else {
  shipContainer.style.clipPath = `circle( 150% at ${
    menuWidth - xCirclePosition - 35
  }rem 39rem)`;
  shipContainer.style.position = `fixed`;

  console.log(`width big:${window.innerWidth}`);
}

sectionDivider.style.top = `${(banner.clientHeight)-59}rem`;

window.addEventListener("resize", circlePosition);
menuButton.addEventListener("click", collapse);
buttonScrollTop.addEventListener("click", scrollTop);
//buttonScrollTop.addEventListener("click", validateForm);
window.addEventListener("scroll", isTop);
console.log(servicesSection);
servicesSection.addEventListener("click", collapse);
groupsSection.addEventListener("click", collapse);
ourGartenSection.addEventListener("click", collapse);
humanTalentSection.addEventListener("click", collapse);
partnersSection.addEventListener("click", collapse);
accreditationSection.addEventListener("click", collapse);
gallerySection.addEventListener("click", collapse);
contactSection.addEventListener("click", collapse);
document.addEventListener("DOMContentLoaded", submitForm);
//submit.addEventListener("click", validateForm);

function collapse() {
  shipSvg.classList.toggle("isActive");
  xSvg.classList.toggle("isActive");
  collapseContainer.classList.toggle("isActive");
  console.log(collapseContainer.className);

  circlePosition();
}
function circlePosition() {
  sectionDivider.style.top = `${(banner.clientHeight)-59}rem`;
  menuWidth = document.querySelector(".Header-div--menu").clientWidth;
  xCirclePosition = (menuWidth - 246.33) / 4;
  console.log(`menuWidth${menuWidth}`);
  console.log(`screen width${window.innerWidth}`);
  if (collapseContainer.className == "Header-div--container isActive") {
    shipContainer.style.clipPath = `circle( 150% at ${
    menuWidth - xCirclePosition - 35 }rem 39rem)`;
    shipContainer.style.position = `fixed`;
  } else {
    if (window.innerWidth < 1250) {
      shipContainer.style.clipPath = `circle( 23rem at ${
        menuWidth - xCirclePosition - 35
      }rem 39rem)`;
      shipContainer.style.position = `absolute`;
    } else {
      shipContainer.style.clipPath = `circle( 150% at ${
        menuWidth - xCirclePosition - 35
      }rem 39rem)`;
      shipContainer.style.position = `fixed`;
    }
  }
}
function scrollTop() {
  window.scrollTo(0, 0);
  console.log(`top: ${window.scrollY}`);
}

function isTop() {
  if (window.scrollY === 0){
    buttonScrollTop.style.opacity = `0`;
     buttonScrollTop.style.pointerEvents = 'none'}
     else{
    buttonScrollTop.style.opacity = `1`;
    buttonScrollTop.style.pointerEvents = 'auto'
  }
}

//Form / reCAPTCHA
function validateForm() {
  let response = grecaptcha.getResponse();
  if (response.length === 0) {
    // El CAPTCHA no se ha completado, muestra un mensaje de error o toma la acción adecuada.
    console.log(`CAPTCHA FALSE ${response}`);
    captcha.classList.toggle("isActive");
    return false;
  }
  // El CAPTCHA se ha completado correctamente, continúa con el envío del formulario.
  console.log(`CAPTCHA TRUE ${response}`);
  return true;
  
}
function submitForm(keyFormOk){
  if (keyFormOk===true){
    console.log(`submitForm ${keyFormOk}`);
   submitFormOk.classList.toggle("isActive");
    sectionForm.classList.toggle("isActive");
   keyFormOk=false;
  }
  }
imgList.forEach((eachImg, index)=>{
  imgList[index].addEventListener(`click`,()=>{
    lightbox.classList.add(`isActive`);
    bigImage.src = imgList[index].src;
  })
})
closeLightbox.addEventListener(`click`,()=> lightbox.classList.remove(`isActive`));
// Google Maps
function myMap() {
  let mapProp = {
    center: new google.maps.LatLng(4.591605531797246, -74.15795315117263),
    zoom: 15,
  };
  let map = new google.maps.Map(document.querySelector("#googleMap"), mapProp);

  let MyCenter = new google.maps.LatLng(4.591605531797246, -74.15795315117263);
  let marker = new google.maps.Marker({
    position: MyCenter,
    icon: "./img/marker.png",
  });

  marker.setMap(map);
}
