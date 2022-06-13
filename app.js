const accordionButtons = document.querySelectorAll('.accordion__trigger');

accordionButtons.forEach(button => {
  const expanded = button.getAttribute('aria-expanded');
  const number = button.getAttribute('id').split('_').pop();
  const associatedContent = document.getElementById(
    `accordion__content_${number}`
  );

  button.addEventListener('click', () => {
    console.log('You clicked me!');
    button.parentNode.classList.add('active');
    button.setAttribute('aria-expanded', true);
    associatedContent.setAttribute('aria-hidden', false);
    associatedContent.removeAttribute('hidden');
  });
});
