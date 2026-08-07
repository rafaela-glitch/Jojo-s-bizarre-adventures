// Função para rolar suavemente até a parte selecionada no menu
function scrollToPart(partId) {
    const element = document.getElementById(partId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}