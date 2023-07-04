if (!localStorage.anuncios) {
  fetch("../json/anuncios.json")
    .then((response) => response.json())
    .then((data) => {
      var jsonDate = JSON.stringify(data);
      localStorage.setItem("anuncios", jsonDate);
      criarItens(data);
    });
} else {
  const jsonData = localStorage.getItem("anuncios");
  const data = JSON.parse(jsonData);
  criarItens(data);
}

document.getElementById("usuario-logado").innerHTML = localStorage.UsuarioLogado;

function criarItens(data) {
  const parentElement = document.getElementById("meusAnuncios");

  for (let i = 0; i < data.length; i++) {
    if (localStorage.UsuarioLogado == data[i].nomeDoador) {
      const divmd6 = document.createElement("div");
      divmd6.className = "col-md-6";

      const divAnimal1 = document.createElement("div");
      divAnimal1.className = "animal-container small";

      const linkAnuncio1 = document.createElement("a");
      linkAnuncio1.href = "anuncio.html";

      const imagemAnuncio1 = document.createElement("img");
      imagemAnuncio1.src = data[i].imagem;
      imagemAnuncio1.alt = "foto";
      imagemAnuncio1.className = "img-fluid animal-image";

      const nomeAnuncio1 = document.createElement("h4");
      nomeAnuncio1.className = "animal-name";
      const linkNomeAnuncio1 = document.createElement("p");
      linkNomeAnuncio1.href = "anuncio.html";
      linkNomeAnuncio1.innerHTML = data[i].nome;
      nomeAnuncio1.appendChild(linkNomeAnuncio1);

      const btnExcluir = document.createElement("button");
      btnExcluir.className = "btn-excluir";
      btnExcluir.innerHTML = "Excluir Anúncio";

      // Adicione um manipulador de evento para excluir o anúncio
      btnExcluir.addEventListener("click", () => {
        excluirAnuncio(i);
      });

      // Anexando os elementos corretamente
      linkAnuncio1.appendChild(imagemAnuncio1);
      divAnimal1.appendChild(linkAnuncio1);
      divAnimal1.appendChild(nomeAnuncio1);
      divAnimal1.appendChild(btnExcluir);
      divmd6.appendChild(divAnimal1);

      // Adicionando divmd6 à página
      parentElement.appendChild(divmd6);
    }
  }
}

function excluirAnuncio(index) {
  // Obtenha a lista de anúncios do armazenamento local
  const jsonData = localStorage.getItem("anuncios");
  const data = JSON.parse(jsonData);

  // Remova o anúncio da lista pelo índice
  data.splice(index, 1);

  // Atualize o armazenamento local com a lista de anúncios atualizada
  localStorage.setItem("anuncios", JSON.stringify(data));

  // Remova o elemento HTML correspondente ao anúncio
  const elementoAnuncio = document.getElementById("meusAnuncios").children[index];
  if (elementoAnuncio) {
    elementoAnuncio.remove();
  }
}