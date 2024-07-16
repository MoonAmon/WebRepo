const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

// with a for loop
for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', (e) => {
        screen.style.backgroundColor = e.target.id;
    });
}

// with a for .. in loop
for (const i in buttons) {
     button.addEventListener('click', (e) => {
        screen.style.backgroundColor = e.target.id;
    });
}

// with forEach loop
buttons.forEach((button) => {
     button.addEventListener('click', (e) => {
        screen.style.backgroundColor = e.target.id;
    });
})