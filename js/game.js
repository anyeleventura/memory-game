const grid = document.querySelector('.game-grid');

const characters = [
    'bob1',
    'bob2',
    'bob3',
    'bob4',
    'ghost',
    'lmc1',
    'plk1',
    'ptc1'
];

function createElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

function checkCards(){
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
};

function revealCard({ target }){
    if(target.parentNode.className.includes('reveal-card')){
        return;
    };

    if(firstCard === ''){

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
        
    }else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    };
}

function createCard(character){

    const card = createElement('div', 'game-card');
    const front = createElement('div', 'face game-front');
    const back  = createElement('div', 'face game-back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back); 
    
    card.addEventListener('click', revealCard);

    card.setAttribute('data-character', character);

    return card;
}

function loadGame(){

    const duplicateCharacters = [ ...characters, ...characters ];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}
loadGame();