document.getElementById('trocarImagem').addEventListener('click', function() {
    const img = document.getElementById('imagem');
    const imagens = ['img/img1.png', 'img/img2.png'];
    const currentSrc = img.getAttribute('src');
    const currentIndex = imagens.indexOf(currentSrc);

    // Avança para a próxima imagem ou volta para a primeira
    img.src = imagens[(currentIndex + 1) % imagens.length];
});
