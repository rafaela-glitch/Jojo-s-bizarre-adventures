/**
 * Função para navegação suave até a parte selecionada
 * @param {string} id - O ID do elemento da seção para rolar
 */
function irParaParte(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}