const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

function validateInput({ target }){

    if(target.value.trim().length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

function handleSubmit(){
    event.preventDefault();
    localStorage.setItem('player', input.value.trim());
    window.location.href = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);