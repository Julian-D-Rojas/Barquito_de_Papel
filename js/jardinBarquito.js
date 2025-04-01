let collapseContainer = document.querySelector('.Header-div--container')
let shipSvg = document.querySelector('.Header-svg--ship')
let xSvg = document.querySelector('.Header-svg--x')
let menuButton = document.querySelector('.Header-button')
let shipContainer = document.querySelector('.Header-div--container')
let menuWidth = document.querySelector('.Header-div--menu').clientWidth
let xCirclePosition = (menuWidth - 246.33) / 4
let keyFormOk

let buttonScrollTop = document.querySelector('.Li-a--scrollTop')

let servicesSection = document.querySelector('#servicesSection')
let groupsSection = document.querySelector('#groupsSection')
let ourGartenSection = document.querySelector('#ourGartenSection')
let humanTalentSection = document.querySelector('#humanTalentSection')
let partnersSection = document.querySelector('#partnersSection')
let accreditationSection = document.querySelector('#accreditationSection')
let gallerySection = document.querySelector('#gallerySection')
let contactSection = document.querySelector('#contactSection')
let captcha = document.querySelector('.Section-p--captcha')
let $form = document.querySelector('.Section-form')
let submitFormOk = document.querySelector('.Section-div--submitFormOK')
let sectionDivider = document.querySelector('.Section-div-sectionDividerDown')
let banner = document.querySelector('.Section--banner')
const imgList = document.querySelectorAll('#gallery .Section-div--content img')
const lightbox = document.querySelector('#gallery .Section-div--lightbox')
const bigImage = document.querySelector(
  '#gallery .Section-div--lightbox .bigImage'
)
const closeLightbox = document.querySelector(
  '#gallery .Section-div--lightbox .close'
)
const $closeLightbox = document.querySelector(
  '#ourGarten .Section-div--lightbox .close'
)
const $closeLightboxT = document.querySelector(
  '.Footer .Section-div--lightbox .close'
)
const $loader = document.querySelector('.div-Section--loader')
const $captcha = document.querySelector('.g-recaptcha')
let $btnWhoWeAre = document.getElementById('whoWeAre')
let $btnMision = document.getElementById('mision')
let $btnVision = document.getElementById('vision')
let $btnLearningEnviroment = document.getElementById('learningEnviroment')
let $containerOurGartenInfo = document.querySelector(
  '#ourGarten .Section-div--lightbox'
)
let $containerTerms = document.querySelector('.Footer .Section-div--lightbox')
let $divOurGartenInfo = document.querySelector('#ourGarten .modalOurGartenInfo')
let $divTerms = document.querySelector('.Footer .modalTerms')

let $input = document.querySelectorAll('input')
let $terms = document.querySelector('.Footer-a--termsConditions')

if (window.innerWidth < 1250) {
  shipContainer.style.clipPath = `circle( 23rem at ${
    menuWidth - xCirclePosition - 35
  }rem 39rem)`
  console.log(`width little:${window.innerWidth}`)
} else {
  shipContainer.style.clipPath = `circle( 150% at ${
    menuWidth - xCirclePosition - 35
  }rem 39rem)`
  shipContainer.style.position = `fixed`

  console.log(`width big:${window.innerWidth}`)
}

sectionDivider.style.top = `${banner.clientHeight - 59}rem`

window.addEventListener('resize', circlePosition)
menuButton.addEventListener('click', collapse)
buttonScrollTop.addEventListener('click', scrollTop)
//buttonScrollTop.addEventListener("click", validateForm);
window.addEventListener('scroll', isTop)
console.log(servicesSection)
servicesSection.addEventListener('click', collapse)
groupsSection.addEventListener('click', collapse)
ourGartenSection.addEventListener('click', collapse)
humanTalentSection.addEventListener('click', collapse)
partnersSection.addEventListener('click', collapse)
accreditationSection.addEventListener('click', collapse)
gallerySection.addEventListener('click', collapse)
contactSection.addEventListener('click', collapse)
$btnWhoWeAre.addEventListener('click', modalInfo1)
$btnMision.addEventListener('click', modalInfo2)
$btnVision.addEventListener('click', modalInfo3)
$btnLearningEnviroment.addEventListener('click', modalInfo4)
$terms.addEventListener('click', modalTerms)
document.addEventListener(
  'DOMContentLoaded',
  submitForm($form, $captcha, $loader)
)

function collapse() {
  shipSvg.classList.toggle('isActive')
  xSvg.classList.toggle('isActive')
  collapseContainer.classList.toggle('isActive')
  console.log(collapseContainer.className)

  circlePosition()
}
function circlePosition() {
  sectionDivider.style.top = `${banner.clientHeight - 59}rem`
  menuWidth = document.querySelector('.Header-div--menu').clientWidth
  xCirclePosition = (menuWidth - 246.33) / 4
  console.log(`menuWidth${menuWidth}`)
  console.log(`screen width${window.innerWidth}`)
  if (collapseContainer.className == 'Header-div--container isActive') {
    shipContainer.style.clipPath = `circle( 150% at ${
      menuWidth - xCirclePosition - 35
    }rem 39rem)`
    shipContainer.style.position = `fixed`
  } else {
    if (window.innerWidth < 1250) {
      shipContainer.style.clipPath = `circle( 23rem at ${
        menuWidth - xCirclePosition - 35
      }rem 39rem)`
      shipContainer.style.position = `absolute`
    } else {
      shipContainer.style.clipPath = `circle( 150% at ${
        menuWidth - xCirclePosition - 35
      }rem 39rem)`
      shipContainer.style.position = `fixed`
    }
  }
}
function scrollTop() {
  window.scrollTo(0, 0)
  console.log(`top: ${window.scrollY}`)
}

function isTop() {
  if (window.scrollY === 0) {
    buttonScrollTop.style.opacity = `0`
    buttonScrollTop.style.pointerEvents = 'none'
  } else {
    buttonScrollTop.style.opacity = `1`
    buttonScrollTop.style.pointerEvents = 'auto'
  }
}
function modalInfo1() {
  console.log('Modal')
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/quienesSomos.png" alt="Quienes Somos" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">¿Quiénes somos?</h3>
  <div class="bigText">
  <p>El Jardín Infantil Barquito de papel, la travesía del desarrollo y del aprendizaje, es un lugar de oportunidad para que los niños y niñas de primera infancia reciban la atención y orientación en sus procesos comunicativos, cognitivos, sociales, artísticos y corporales de manera adecuada, afectiva, lúdica y personalizada.</p>
  `
  $containerOurGartenInfo.classList.add(`isActive`)
}
function modalInfo2() {
  console.log('Modal')
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/mision.png" alt="Misión" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Misión</h3>
  <div class="bigText">
  <p>El Jardín Infantil Barquito de papel, la travesía del desarrollo y del aprendizaje, está comprometido con el desarrollo de los niños y las niñas en sus dimensiones, teniendo en cuenta las características individuales; fundamentando la labor en la lúdica y el acercamiento afectivo como pilares en la realización de todas las actividades y empleando aulas especializadas que favorecen ambientes de aprendizaje.</p>`
  $containerOurGartenInfo.classList.add(`isActive`)
}
function modalInfo3() {
  console.log('Modal')
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/vision.png" alt="Visión" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Visión</h3>
  <div class="bigText">
  <p ">El Jardín Infantil Barquito de papel, la travesía del desarrollo y del aprendizaje, será reconocido como una institución educativa que potencia en los niños y niñas destrezas, habilidades y favorece procesos cognitivos, sociales, artísticos, corporales y comunicativos en español e inglés en ambientes de aprendizaje afectivos y lúdicos, pertinentes para su desarrollo.</p>`
  $containerOurGartenInfo.classList.add(`isActive`)
}
function modalInfo4() {
  console.log('Modal')
  $divOurGartenInfo.innerHTML = `<img src="./img/OurGarten/espacios.png" alt="Ambientes de Aprendizaje" class="Section-img--ourGarten">
  <h3 class="Section-h3--ourGarten">Ambientes de Aprendizaje</h3>
  <div class="bigText scrollBar">
  <p >El desarrollo humano es la integración de conocimientos, de
  maneras de ser, de sentir, de actuar, que se suscitan al interactuar consigo mismo, con
  sus padres, con sus pares, docentes y con los objetos del medio como producto de la
  experiencia vivida. Como ser humano, el niño se desarrolla como totalidad, tanto su
  organismo biológicamente organizado, como sus potencialidades de aprendizaje y
  desenvolvimiento funcionan en un sistema compuesto de múltiples dimensiones: corporal,
  cognitiva, comunicativa y personal social. El funcionamiento particular de cada una,
  determina el desarrollo y actividad posible del niño en sus distintas etapas. Desde un
  punto de vista integral, la evolución del niño se realiza en varias dimensiones y
  procesos a la vez, estos desarrollos no son independientes sino complementarios. En
  nuestro jardín favorecemos estos desarrollos en ambientes de aprendizaje en las
  diferentes aulas enfocadas a cada dimensión.</p> `
  $containerOurGartenInfo.classList.add(`isActive`)
}
function modalTerms() {
  console.log('ModalTerms')
  $divTerms.innerHTML = ` <h3 class="Section-h3--ourGarten">Términos, condiciones<br> Políticas de privacidad</h3>
  <div class="bigText scrollBar">
  <p >Quiénes somos <br>
  La dirección de nuestra web es: https://julian-d-rojas.github.io/Barquito_de_Papel/
  <br><br>Qué datos personales recogemos y por qué los recogemos<br>
  Cuando los visitantes navegan en nuestra web, recopilamos la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.
  <br><br>Formularios de contacto<br>
  Cuando los visitantes diligencian el formulario de contáctenos los datos son enviados al correo address@correo.com

  <br><br>Cookies<br>
  Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año. Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador. Cuando accedas, también instalaremos varias cookies para guardar tu información de acceso y tus opciones de visualización de pantalla. Las cookies de acceso duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas «Recuérdarme», tu acceso perdurará durante dos semanas. Si sales de tu cuenta, las cookies de acceso se eliminarán. Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de un día.
  <br><br>Con quién compartimos tus datos<br>
  Jardinbarquitodepapel no comparte los datos recolectados en la página https://julian-d-rojas.github.io/Barquito_de_Papel/ con ningún tercero.
  <br><br>Cuánto tiempo conservamos tus datos<br>
  Si dejas un comentario, el comentario y sus metdatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente, en lugar de mantenerlos en una cola de moderación. De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web también pueden ver y editar esa información.
  <br><br>Qué derechos tienes sobre tus datos<br>
  Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.
  <br><br>Dónde enviamos tus datos<br>
  Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.</p> `
  $containerTerms.classList.add(`isActive`)
}

function submitForm($form, $captcha, $loader) {
  document.addEventListener('submit', async (e) => {
    let response = grecaptcha.getResponse()
    e.preventDefault()
    if (response.length === 0) {
      // El CAPTCHA no se ha completado, muestra un mensaje de error o toma la acción adecuada.
      console.log(`CAPTCHA FALSE ${response}`)
      captcha.classList.add('isActive')
    } else {
      // El CAPTCHA se ha completado correctamente, continúa con el envío del formulario.
      //console.log(`CAPTCHA TRUE ${response}`);
      console.log(`CAPTCHA TRUE`)

      if (e.target === $form) {
        console.log('Boton Submit')

        $captcha.classList.add('none')
        captcha.classList.remove('isActive')
        $loader.classList.remove('none')

        //Estilo submitBtn success
        $form.submitBtn.style.color = '#bbb'
        $form.submitBtn.style.borderColor = '#bbb'
        $form.submitBtn.style.backgroundColor = 'white'
        $form.submitBtn.style.pointerEvents = 'none'

        try {
          let options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },

            body: JSON.stringify({
              Nombre: e.target.name.value,
              Correo: e.target.email.value,
              Telefono: e.target.phone.value,
              Mensage: e.target.message.value
            })
            // body: new FormData(e.target)
          }
          let res = await fetch(
            'https://formsubmit.co/ajax/julian.d.rojas16@gmail.com',
            options
          )
          json = await res.json()
          if (!res.ok) {
            throw { status: res.status, statusText: res.statusText }
          } else {
            console.log(`Envio: ${json}`)
            $loader.classList.add('none')
            submitFormOk.classList.add('isActive')
            $form.reset()
          }
        } catch (err) {
          let message = err.statusText || 'Ocurrió un error'

          console.log(`Error: ${(err.status, message)}`)
          captcha.innerHTML = err

          //Estilo submitBtn
          $form.submitBtn.style.color = '#f0f8ff'
          $form.submitBtn.style.borderColor = '##0c3653'
          $form.submitBtn.style.backgroundColor = '#0c3653'
          $form.submitBtn.style.pointerEvents = 'auto'

          $captcha.classList.remove('none')
          captcha.classList.add('isActive')
          $loader.classList.add('none')
          submitFormOk.classList.remove('isActive')
        } finally {
          console.log('finally')
        }
      }
    }
  })
}

imgList.forEach((eachImg, index) => {
  imgList[index].addEventListener(`click`, () => {
    lightbox.classList.add(`isActive`)
    bigImage.src = imgList[index].src
  })
})
closeLightbox.addEventListener(`click`, () =>
  lightbox.classList.remove(`isActive`)
)
$closeLightbox.addEventListener(`click`, () =>
  $containerOurGartenInfo.classList.remove(`isActive`)
)
$closeLightboxT.addEventListener(`click`, () =>
  $containerTerms.classList.remove(`isActive`)
)
// Google Maps
function myMap() {
  let mapProp = {
    center: new google.maps.LatLng(4.604756996151846, -74.05749728291055),
    zoom: 15
  }
  let map = new google.maps.Map(document.querySelector('#googleMap'), mapProp)

  let MyCenter = new google.maps.LatLng(4.604756996151846, -74.05749728291055)
  let marker = new google.maps.Marker({
    position: MyCenter,
    icon: './img/marker.png'
  })

  marker.setMap(map)
}
