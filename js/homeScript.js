//Method to get a set value for vh -- fixes mobile vh problem ---
let vh = window.innerHeight * 0.01;
// set custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// copy email text on email icon click and display "copied" message 
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


// --- Morphing animation -- 
const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 4000, yoyo: true}
)
tween.start();