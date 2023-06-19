//  Json

anuncios = {
  "meusAnuncios": [
    {
      "imagem": "imagens/dog.png",
      "nome": "Alfredo",
      "descricao": "Descrição do alfredo"
    },
    {
      "imagem": "imagens/dog.png",
      "nome": "Alfredo",
      "descricao": "Descrição do alfredo"
    }
  ]
}



// Criação dos elementos

for (let i = 0; i < anuncios.meusAnuncios.length; i++) {
  const divmd6 = document.createElement('div');
  divmd6.className = 'col-md-6';

  const divAnimal1 = document.createElement('div');
  divAnimal1.id = 'animal1';
  divAnimal1.className = 'text-center';

  const linkAnuncio1 = document.createElement('a');
  linkAnuncio1.href = 'anuncio.html';
  linkAnuncio1.innerHTML = anuncios.meusAnuncios[i].nome;

  const imagemAnuncio1 = document.createElement('img');
  imagemAnuncio1.src = anuncios.meusAnuncios[i].imagem;
  imagemAnuncio1.id = 'fotoanuncio';
  imagemAnuncio1.alt = 'foto';
  imagemAnuncio1.className = 'img-fluid';
  imagemAnuncio1.style.maxWidth = '240px';

  const nomeAnuncio1 = document.createElement('p');
  const linkNomeAnuncio1 = document.createElement('a');
  linkNomeAnuncio1.href = 'anuncio.html';
  linkNomeAnuncio1.id = 'nomeanuncio1';
  nomeAnuncio1.appendChild(linkNomeAnuncio1);

  // Anexando os elementos corretamente

  linkAnuncio1.appendChild(imagemAnuncio1);
  divAnimal1.appendChild(linkAnuncio1);
  divAnimal1.appendChild(nomeAnuncio1);
  divmd6.appendChild(divAnimal1);

  // Adicionando a divmd6 à página (assumindo que exista um elemento pai com ID 'parentId')
  
  const parentElement = document.getElementById('meusAnuncios');
  parentElement.appendChild(divmd6);
}