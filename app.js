const questions = document.querySelectorAll('.accordion h2 button');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.parentElement.nextElementSibling;

    if(question.parentElement.classList.contains('open')) {
      closeFAQ(question, answer);
    } else {
      // Only allow one open Q & A at a time
      questions.forEach((openQuestion) => {
        const openAnswer = openQuestion.parentElement.nextElementSibling;
        closeFAQ(openQuestion, openAnswer);
      });
      openFAQ(question, answer);
    }
  });
});

function closeFAQ(question, answer) {
  // Update attributes and remove style on question
  question.parentElement.classList.remove('open');
  question.setAttribute('aria-expanded', false);
  
  // Update attributes and remove style on answer
  answer.classList.remove('open-active');
  answer.setAttribute('hidden', '');
}

function openFAQ(question, answer) {
  // Update attributes and add style to question
  question.parentElement.classList.add('open');
  question.setAttribute('aria-expanded', true);

  // Update attributes and add style to answer
  answer.classList.add('open-active');
  answer.removeAttribute('hidden');
}
