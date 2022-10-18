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

const navBarIcon = document.querySelector('.fa-bars');
const navBarExtentedMenu = document.querySelector('.nav-bar__extended-menu');
const extendedMenuSection = document.querySelectorAll('.extended-menu__section');
const extendedMenuClose = document.querySelector('.fa-xmark');
navBarIcon.addEventListener('pointerdown', function() {
  navBarExtentedMenu.style.display = "flex";
  navBarExtentedMenu.style.height = "300px";
  navBarExtentedMenu.style.padding = "20px 20px 0px";
  navBarExtentedMenu.style.boxShadow = "0px 0px 6px black";
  navBarExtentedMenu.style.borderTop = "1px solid #fff";
  navBarIcon.style.fontSize = "0px";
  extendedMenuClose.style.fontSize = "2rem";
  extendedMenuSection.forEach(section => {
    section.style.fontSize = "1.9rem";
  })
})
extendedMenuClose.addEventListener('pointerdown', function() {
  navBarExtentedMenu.style.height = "0px";
  navBarExtentedMenu.style.padding = "0px 20px 0px";
  navBarExtentedMenu.style.boxShadow = "none";
  navBarExtentedMenu.style.borderTop = "none";
  navBarIcon.style.fontSize = "1.9rem";
  extendedMenuClose.style.fontSize = "0px";
  extendedMenuSection.forEach(section => {
    section.style.fontSize = "0px";
  })
})


/* --- Morphing animation -- */
const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 4000, yoyo: true}
)
tween.start();