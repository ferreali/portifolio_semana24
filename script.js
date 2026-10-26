// Seleciona todos os cartões de fotografia da galeria.
const imagens = document.querySelectorAll(".image");

// Percorre cada cartão para configurar os eventos de interação.
imagens.forEach((imagem) => {
    // Função que alterna o destaque da fotografia selecionada.
    function alternarDestaque() {
        // Adiciona a classe se ela não existir ou remove se já existir.
        const selecionada = imagem.classList.toggle("selecionada");

        // Atualiza o atributo acessível que informa se o cartão está selecionado.
        imagem.setAttribute("aria-pressed", String(selecionada));
    }

    // Ao clicar com o mouse, destaca ou desmarca a fotografia.
    imagem.addEventListener("click", alternarDestaque);

    // Permite usar Enter ou Espaço para interagir com o cartão pelo teclado.
    imagem.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault(); // Evita que a tecla Espaço role a página.
            alternarDestaque();
        }
    });
});
