
document.addEventListener("DOMContentLoaded", () => {
  const exams = document.querySelectorAll('#ex .exam');
  const doneMsg = document.getElementById('done');
  let current = 0;

  exams.forEach((exam, index) => {
    const correct = exam.dataset.win;
    const explanation = exam.dataset.exp;
    const answers = exam.querySelectorAll('.ans');
    const nextBtn = exam.querySelector('.next');
    const expBox = exam.querySelector('.exp');

    answers.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled || nextBtn.style.display === 'inline-block') return;

        const userAnswer = btn.dataset.ans;
        if (userAnswer === correct) {
          btn.classList.add('win');
          expBox.textContent = explanation;
          nextBtn.style.display = 'inline-block';
          answers.forEach(b => {
            b.disabled = true;
            if (b !== btn && !b.classList.contains('win')) {
              b.classList.add('lose');
            }
          });
        } else {
          btn.classList.add('lose');
          btn.disabled = true;
        }
      });
    });

    nextBtn.addEventListener('click', () => {
      exam.classList.remove('go');
      current++;
      if (current < exams.length) {
        exams[current].classList.add('go');
      } else {
        doneMsg.style.display = 'block';
      }
    });
  });
});
