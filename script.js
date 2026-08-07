/**
 * Função para rolar suavemente até a seção correspondente quando clicada no menu
 * @param {string} idParte - O ID da seção para onde a tela deve rolar
 */
function navegarPara(idParte) {
    const elemento = document.getElementById(idParte);
    
    if (elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn(`Elemento com ID '${idParte}' não foi encontrado.`);
    }
}