/**
 * Rola a página suavemente até o id do elemento selecionado
 * @param {string} sectionId - ID da seção de destino
 */
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}