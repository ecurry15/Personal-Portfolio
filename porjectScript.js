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
const descriptionViewMore = document.querySelectorAll('.project-card__description-more');
const projectDescriptionClose = document.querySelectorAll('.projectDescriptionClose');

const expandDescription = (card) => {
document.querySelector(`.project-card__img-container.${card}`).style.height = "38%";
document.querySelector(`.project-card__description.${card}`).style.maxHeight = "170px";
document.querySelector(`.project-card__description.${card}`).style.whiteSpace = "normal";
document.querySelector(`.projectDescriptionClose.${card}`).style.display = "block";
document.querySelector(`.project-card__description-more.${card}`).style.display = "none";
};
const closeDescription = (card) => {
  document.querySelector(`.project-card__img-container.${card}`).style.height = "50%";
  document.querySelector(`.project-card__description.${card}`).style.maxHeight = "30px";
  document.querySelector(`.project-card__description.${card}`).style.whiteSpace = "nowrap";
  document.querySelector(`.projectDescriptionClose.${card}`).style.display = "none";
  document.querySelector(`.project-card__description-more.${card}`).style.display = "block";
  };
  


descriptionViewMore.forEach(e => {
e.addEventListener('pointerdown', function() {
  if (e.classList.contains('one')) {
    expandDescription("one");
  } else if (e.classList.contains('two')) {
    expandDescription("two");
  } else if (e.classList.contains('three')) {
    expandDescription("three");
  } else if (e.classList.contains('four')) {
    expandDescription("four");
  }
});
})


projectDescriptionClose.forEach(e => {
  e.addEventListener('pointerdown', function() {
    if (e.classList.contains('one')) {
      closeDescription("one");
    } else if (e.classList.contains('two')) {
      closeDescription("two");
    } else if (e.classList.contains('three')) {
      closeDescription("three");
    } else if (e.classList.contains('four')) {
      closeDescription("four");
    }
  });
})


/* --- Morphing animation -- */
const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 4000, yoyo: true}
)
tween.start();