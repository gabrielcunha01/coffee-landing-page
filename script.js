// Exemplo de uma animação simples de scroll ou interação
document.querySelector('.cta').addEventListener('click', () => {
    alert('Café fresquinho a caminho do seu setup! ☕️');
});

// Efeito simples no scroll da Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50) {
        nav.style.background = '#000';
    } else {
        nav.style.background = 'transparent';
    }
});