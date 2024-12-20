    // Seleciona os elementos do botão de hambúrguer, menu e botão de fechar
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');

    // Abrir o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

   /*
 // Fechar o menu ao clicar no botão "X"
    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });
   */