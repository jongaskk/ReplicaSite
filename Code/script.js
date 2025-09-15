document.addEventListener('DOMContentLoaded', () => {
    console.log('Página Brainly carregada!');

    const cadastrarButton = document.querySelector('.cta-cadastre-se');
    if (cadastrarButton) {
        cadastrarButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Você clicou em Cadastrar-se!');
            
        });
    }

});
