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
navBarIcon.addEventListener('pointerdown', function() {
  navBarExtentedMenu.style.display = "flex";
  navBarExtentedMenu.style.height = "300px";
  navBarExtentedMenu.style.padding = "20px 20px 0px";
  navBarExtentedMenu.style.boxShadow = "0px 0px 6px black";
  navBarIcon.style.color = "#175887";
  extendedMenuSection.forEach(section => {
    section.style.fontSize = "1.9rem";
  })
})




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