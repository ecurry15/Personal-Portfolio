// copy email text on email icon click and display "copied" message --
const copyTextTool = (htmlElement) => {
  if (!htmlElement) {
    return;
  }
  let elementText = htmlElement.innerText;
  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  inputElement.parentNode.removeChild(inputElement);

}
const gmailContainer = document.getElementById('gmail-container');
document.querySelector('#gmail-container').onclick = 
function () {
  copyTextTool(document.querySelector('#gmail'));
  const copyText = document.querySelector('.copy-text');
  copyText.style.display = "flex";
  setTimeout(function() {
    copyText.style.display = "none";
  }, 2000)
}
// copy email text on email icon click and display "copied" message 

//mobile extended nav items
const navBarIcon = document.querySelector('.fa-bars');
const navBarExtentedMenu = document.querySelector('.nav-bar__extended-menu');
const extendedMenuSection = document.querySelectorAll('.extended-menu__section');
const extendedMenuClose = document.querySelector('.fa-xmark');
const isSmallMobile = window.matchMedia('(max-height: 580px)');
//mobile extended nav items

//Open mobile extended nav menu 
navBarIcon.addEventListener('pointerdown', function() {
  navBarExtentedMenu.style.display = "flex";
  navBarExtentedMenu.style.height = "250px";
  navBarExtentedMenu.style.padding = "15px 20px 0px";
  navBarExtentedMenu.style.boxShadow = "0px 0px 6px black";
  navBarExtentedMenu.style.borderTop = "1px solid #fff";
  navBarIcon.style.fontSize = "0px";
  setTimeout(() => {
    navBarIcon.style.visibility = "hidden";
  }, 400)
  if (isSmallMobile.matches == false) {
    extendedMenuClose.style.fontSize = "2rem";
  } else {
    extendedMenuClose.style.fontSize = "1.5rem";
  }
  setTimeout(() => {
    extendedMenuSection.forEach(section => {
      section.style.fontSize = "1.9rem";
      section.style.display = "flex";
    })
  }, 250);
});
//Close mobile extended nav menu 
extendedMenuClose.addEventListener('pointerdown', function() {
  navBarIcon.style.visibility = "unset";
  navBarExtentedMenu.style.height = "0px";
  navBarExtentedMenu.style.padding = "0px 20px 0px";
  navBarExtentedMenu.style.boxShadow = "none";
  navBarExtentedMenu.style.borderTop = "none";
  if (isSmallMobile.matches == false) {
    navBarIcon.style.fontSize = "1.9rem";
  } else {
    navBarIcon.style.fontSize = "1.4rem";
  }
  extendedMenuClose.style.fontSize = "0px";
  extendedMenuSection.forEach(section => {
    section.style.fontSize = "0px";
    section.style.display = "none";
  })
});

//open contact modal on contact btn press ---
const contactModalBackgroundBlur = document.querySelector('.about__modal-background-blur');
const contactModal = document.querySelector('.about__contact-modal');
const contactBtn = document.querySelector('.contact-btn');
const contactModalCloseBtn = document.querySelector('.contact-model__close');
let contactBtnWasClicked = false;

contactBtn.addEventListener('pointerdown', () => {
contactBtnWasClicked = true;
contactModalBackgroundBlur.style.display = "block";
contactModal.style.display = "flex";
});
//open contact modal on contact btn press ---

//close contact modal ---
document.addEventListener('mousedown', e => {
  let isMobile = window.matchMedia("(pointer:coarse)").matches;
  const isContactModal = e.target.matches('[data-contact-form]');
  const isContactModalCloseBtn = e.target.matches('[data-contact-close-btn]');
  //if pc close modal on either exit btn click or click outside of modal
  if (contactBtnWasClicked && !isMobile) {
    if (!isContactModal) {
      contactModalBackgroundBlur.style.display = "none";
contactModal.style.display = "none";
contactBtnWasClicked = false;
    }
    //if mobile -- only close modal on exit btn press
  } else if (contactBtnWasClicked && isMobile) {
    if (isContactModalCloseBtn) {
      contactModalBackgroundBlur.style.display = "none";
      contactModal.style.display = "none";
      contactBtnWasClicked = false;
    }
  }
});

//close contact modal ---

// send input info to email on form submit ---
function sendMail(){
  let params = {
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    message:document.getElementById('message').value,
  }
  const serviceId = "service_tkyrph6";
const templateId = "template_ebba59o";
console.log("email sent");

emailjs.send(serviceId,templateId,params).then(
  res => {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
  }
)
}
const contactSubmitBtn = document.querySelector('.contact-modal__btn');
const aboutThankYouMessage = document.querySelector('.about__contact-thankYou-message');
contactSubmitBtn.addEventListener('pointerdown', () => {
  let formIsValid = contactModal.checkValidity();
  if (!formIsValid) {
    return
  } else {
    contactModalBackgroundBlur.style.display = "none";
contactModal.style.display = "none";
contactBtnWasClicked = false;
aboutThankYouMessage.style.display = "flex";
sendMail();
setTimeout(() => {
  aboutThankYouMessage.style.display = "none";
}, "4000")
  }
});
// send input info to email on form submit ---




/* --- Morphing animation -- */
const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 5000, yoyo: true}
)
tween.start();

const tweenTwo = KUTE.fromTo(
  '#blob3',
  { path: '#blob3'},
  { path: '#blob4'},
  { repeat: 999, duration: 6000, yoyo: true}
)
tweenTwo.start();