const icon = document.querySelectorAll('.icon');

icon.forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const iconImg = this.querySelector('.icon-img');
        const question = this.querySelector('.question');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            iconImg.style.transform = 'rotate(0deg)';
            question.classList.remove('question-active');
        } else {
            const openAnswer = document.querySelector('.answer[style="display: block;"]');
            if (openAnswer) {
                openAnswer.style.display = 'none';
                openAnswer.previousElementSibling.querySelector('.icon-img').style.transform = 'rotate(0deg)';
                openAnswer.previousElementSibling.querySelector('.question').classList.remove('question-active');
            }
            answer.style.display = 'block';
            iconImg.style.transform = 'rotate(180deg)';
            question.classList.add('question-active');
        }
    });
});


