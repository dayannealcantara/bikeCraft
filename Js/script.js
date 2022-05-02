// Ativar links do menu
const links = document.querySelectorAll('.navMenu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

// Ativar links do orçamento

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametro.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');

  console.log(ativa);
  pergunta.setAttribute('aria-expanded', 'true');
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// Galeria de imagens

const galeria = document.querySelectorAll('.bikesImg img');
const galeriaContainer = document.querySelector('.bikesImg');

function trocarImagem(event) {
  const img = event.currentTarget;
  galeriaContainer.prepend(img);
}
function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);
