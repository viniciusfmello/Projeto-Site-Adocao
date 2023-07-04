function excluirItens() {
  const secaoItens = document.getElementById('todos-anuncios');
  while (secaoItens.firstChild) {
    secaoItens.removeChild(secaoItens.firstChild);
  }
}

if (!localStorage.anuncios) {
  fetch('../json/anuncios.json')
    .then(response => response.json())
    .then(data => {
      var jsonDate = JSON.stringify(data);
      localStorage.setItem('anuncios', jsonDate);
      criarItens(data);
    });
} else {
  const jsonData = localStorage.getItem('anuncios');
  const data = JSON.parse(jsonData);
  criarItens(data);
}

function criarItens(data) {
  // Criação dos elementos
  for (let i = 0; i < data.length; i++) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4'; // Definindo a classe para criar 3 colunas

    const card = document.createElement('div');
    card.className = 'card';

    const imagemAnuncio1 = document.createElement('img');
    imagemAnuncio1.src = data[i].imagem;
    imagemAnuncio1.className = 'card-img-top';
    imagemAnuncio1.alt = 'Imagem do anúncio';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const tituloAnuncio1 = document.createElement('h5');
    const linkAnuncio1 = document.createElement('a');
    linkAnuncio1.href = '../telaDoAnuncio/index.html?id=' + i;
    tituloAnuncio1.className = 'card-title';
    tituloAnuncio1.innerHTML = data[i].nome;

    // Anexando os elementos corretamente
    linkAnuncio1.appendChild(tituloAnuncio1);
    card.appendChild(imagemAnuncio1);
    cardBody.appendChild(linkAnuncio1);
    card.appendChild(cardBody);
    colDiv.appendChild(card);

    const parentElement = document.getElementById('todos-anuncios');
    parentElement.appendChild(colDiv);
  }
}


function filtrar() {
  excluirItens();

  const todosCheckbox = document.getElementById('todos');
  const gatosCheckbox = document.getElementById('gatos');
  const cachorrosCheckbox = document.getElementById('cachorros');
  const todosPortesCheckbox = document.getElementById('todos-portes');
  const pequenoCheckbox = document.getElementById('pequeno');
  const medioCheckbox = document.getElementById('medio');
  const grandeCheckbox = document.getElementById('grande');

  const todosSelecionado = todosCheckbox.checked;
  const gatosSelecionado = gatosCheckbox.checked;
  const cachorrosSelecionado = cachorrosCheckbox.checked;
  const todosPortesSelecionado = todosPortesCheckbox.checked;
  const pequenoSelecionado = pequenoCheckbox.checked;
  const medioSelecionado = medioCheckbox.checked;
  const grandeSelecionado = grandeCheckbox.checked;

  if (todosSelecionado && todosPortesSelecionado) {
    const jsonData = localStorage.getItem('anuncios');
    const data = JSON.parse(jsonData);
    criarItens(data);
  } else {
    const jsonData = localStorage.getItem('anuncios');
    const data = JSON.parse(jsonData);
    const itensFiltrados = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const especie = item.especie.toLowerCase();
      const porte = item.porte.toLowerCase();

      if ((todosSelecionado || (gatosSelecionado && especie === 'gato') || (cachorrosSelecionado && especie === 'cachorro')) &&
        (todosPortesSelecionado || (pequenoSelecionado && porte === 'pequeno') || (medioSelecionado && porte === 'medio') || (grandeSelecionado && porte === 'grande'))) {
        itensFiltrados.push(item);
      }
    }

    criarItens(itensFiltrados);
  }
}
