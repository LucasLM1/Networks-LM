window.sr = ScrollReveal({ reset: true });

const elements = [
    document.querySelector('header'),
    document.querySelector('.social-network__linkedin'),
    document.querySelector('.social-network__github'),
    document.querySelector('.social-network__instagram'),
    document.querySelector('.curriculum'),
    document.querySelector('footer'),
]

var cascading = {
    duration: '2500',
    origin: 'top',
    distance: '25px'
}

sr.reveal(elements, cascading)

sr.reveal('.social-network__linkedin', {
    delay: 1000,
})

sr.reveal('.social-network__github',{
    delay: 1500,
})

sr.reveal('.social-network__instagram',{
    delay: 2000
})

sr.reveal('.curriculum',{
    delay: 2500
})

sr.reveal('footer',{
    delay: 3000
})

const typing = document.querySelector('[data-js="typing"]');

const messages = [
    'Desenvolvido por: Lucas M. Souza',
    'Entre em contato comigo através de uma das minhas redes sociais', 
    'Obrigado por visitar ❤️'
];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacters = '';

const type = () => {
    if(messageIndex === messages.length){
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    if(currentCharacters.length === currentMessage.length){
        messageIndex++
        characterIndex = 0
    }
}
setInterval(type, 200)