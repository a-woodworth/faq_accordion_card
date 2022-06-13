const accordionHeaders = [...document.querySelectorAll('.accordion h2')];
const accordionButtons = document.querySelectorAll('.accordion__trigger');

accordionButtons.forEach(button => {
  const number = button
    .getAttribute('id')
    .split('_')
    .pop();

  const associatedContent = document.getElementById(
    `accordion__content_${number}`
  );
});

// button.addEventListener('click', () => {
//   button.classList.toggle()
// });


