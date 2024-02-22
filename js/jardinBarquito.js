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
const $closeLightbox = document.querySelector("#ourGarten .Section-div--lightbox .close");
let $btnWhoWeAre = document.getElementById('whoWeAre');
let $btnMision = document.getElementById('mision');
let $btnVision = document.getElementById('vision');
let $btnLearningEnviroment = document.getElementById('learningEnviroment');
let $containerOurGartenInfo = document.querySelector('#ourGarten .Section-div--lightbox')
let $divOurGartenInfo = document.querySelector("#ourGarten .modalOurGartenInfo");

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
$btnWhoWeAre.addEventListener("click", modalInfo1);
$btnMision.addEventListener("click", modalInfo2);
$btnVision.addEventListener("click", modalInfo3);
$btnLearningEnviroment.addEventListener("click", modalInfo4);

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
function modalInfo1(){
  console.log("Modal")
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/quienesSomos.png" alt="Quienes Somos" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Quienes somos</h3>
  <div class="bigText">
  <p>El Jardín Infantil Barquito de papel, la travesía del desarrollo y del aprendizaje, es un lugar de oportunidad para que los niños y niñas de primera infancia reciban la atención y orientación en sus procesos comunicativos, cognitivos, sociales, artísticos y corporales de manera adecuada, afectiva, lúdica y personalizada.</p>
 `
  $containerOurGartenInfo.classList.add(`isActive`);
}
function modalInfo2(){
  console.log("Modal")
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/mision.png" alt="Misión" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Misión</h3>
  <div class="bigText">
  <p>El Jardín Infantil Barquito de papel, la travesía del desarrollo y del aprendizaje, está comprometido con el desarrollo de los niños y las niñas en sus dimensiones, teniendo en cuenta las características individuales; fundamentando la labor en la lúdica y el acercamiento afectivo como pilares en la realización de todas las actividades y empleando aulas especializadas que favorecen ambientes de aprendizaje.</p>`
  $containerOurGartenInfo.classList.add(`isActive`);
}
function modalInfo3(){
  console.log("Modal")
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/vision.png" alt="Visión" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Visión</h3>
  <div class="bigText">
  <p ">El Jardín Infantil Barquito de papel, la travesía del desarrollo y del aprendizaje, será reconocido como una institución educativa que potencia en los niños y niñas destrezas, habilidades y favorece procesos cognitivos, sociales, artísticos, corporales y comunicativos en español e inglés en ambientes de aprendizaje afectivos y lúdicos, pertinentes para su desarrollo.</p>`
  $containerOurGartenInfo.classList.add(`isActive`);
}
function modalInfo4(){
  console.log("Modal")
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/espacios.png" alt="Ambientes de Aprendizaje" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Ambientes de Aprendizaje</h3>
  <div class="bigText">
  <p >El desarrollo humano es la integración de conocimientos, de maneras de ser, de sentir, de actuar, que se suscitan al interactuar consigo mismo, con sus padres, con sus pares, docentes y con los objetos del medio como producto de la experiencia vivida. Como ser humano, el niño se desarrolla como totalidad, tanto su organismo biológicamente organizado, como sus potencialidades de aprendizaje y desenvolvimiento funcionan en un sistema compuesto de múltiples dimensiones: corporal, cognitiva, comunicativa y personal social. El funcionamiento particular de cada una, determina el desarrollo y actividad posible del niño en sus distintas etapas. Desde un punto de vista integral, la evolución del niño se realiza en varias dimensiones y procesos a la vez, estos desarrollos no son independientes sino complementarios. En nuestro jardín favorecemos estos desarrollos en ambientes de aprendizaje en las diferentes aulas enfocadas a cada dimensión.</p> `
  $containerOurGartenInfo.classList.add(`isActive`);
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
$closeLightbox.addEventListener(`click`,()=> $containerOurGartenInfo.classList.remove(`isActive`));
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
