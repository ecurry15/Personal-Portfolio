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




const projectImgContainer = document.getElementById('projectImgConatiner');
const projectDescription = document.getElementById('projectDescription');
const descriptionViewMore = document.getElementById('descriptionViewMore');
const projectDescriptionClose = document.getElementById('projectDescriptionClose');

descriptionViewMore.addEventListener('pointerdown', function() {
  projectImgContainer.style.height = "38%";
  projectDescription.style.maxHeight = "170px";
  projectDescription.style.whiteSpace = "normal";
  projectDescriptionClose.style.display = "block";
  descriptionViewMore.style.display = "none";
  projectDescriptionClose.style.display = "block";
});
projectDescriptionClose.addEventListener('pointerdown', function() {
  descriptionViewMore.style.display = "block";
  projectImgContainer.style.height = "50%";
  projectDescription.style.maxHeight = "30px";
  projectDescription.style.whiteSpace = "nowrap";
  projectDescriptionClose.style.display = "none";
});

/* --- Morphing animation -- */
const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 4000, yoyo: true}
)
tween.start();