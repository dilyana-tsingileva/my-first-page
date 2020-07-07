const firstButton = document.querySelector('.first-button');
const list = document.querySelector('.list-2');

firstButton.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'Oranges';

    list.appendChild(li);
});

const lastButton = document.querySelector('.last-button');
lastButton.addEventListener('click', function () {
    alert("Goodbye!")
});