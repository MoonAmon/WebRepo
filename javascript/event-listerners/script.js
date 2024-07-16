const button = document.querySelector('button');
const paragraph = document.querySelector('p');

paragraph.textContent = 'Surprise!';
paragraph.style.color = 'gray';
paragraph.remove();

button.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.currentTarget);
})