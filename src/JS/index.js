const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const information = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    marcarBotaoSelecionado(botao);
    esconderImagemAtiva();
    mostrarImagemDeFundo(indice);
    esconderInformacoesAtivas();
    mostrarInformacoes(indice);
  });
});

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
  const informacoesAtivas = document.querySelector(".informacoes.ativa");
  informacoesAtivas.classList.remove("ativa");
}

function mostrarInformacoes(indice) {
  information[indice].classList.add("ativa");
}
