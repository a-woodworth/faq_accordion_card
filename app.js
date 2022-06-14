const accordionHeaders = document.querySelectorAll('.accordion h2 button');

Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
  let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = () => {
    let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    accordionHeader.setAttribute('aria-expanded', !expanded);
    accordionHeader.parentElement.classList.toggle('open');
    target.hidden = expanded;
    target.classList.toggle('open-active'); 

    if (target.classList.contains('open-active')) {
      target.setAttribute('aria-hidden', false);
    } else {
      target.setAttribute('aria-hidden', true);
    }
  }
});
