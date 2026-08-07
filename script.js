/**
 * Realiza a rolagem suave até a parte selecionada pelo usuário
 * @param {string} partId - O ID da seção de destino
 */
function scrollToPart(partId) {
    const element = document.getElementById(partId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}