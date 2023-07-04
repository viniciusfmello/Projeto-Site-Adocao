const jsonData = localStorage.getItem('anuncios');
const data = JSON.parse(jsonData);

const parametrosUrl = new URLSearchParams(window.location.search);
const itemId = parametrosUrl.get("id");

document.getElementById("imagem-anuncio").src = data[itemId].imagem;
document.getElementById("nome-animal").innerHTML = data[itemId].nome;
document.getElementById("nome-doador").innerHTML = data[itemId].nomeDoador;
document.getElementById("especie").innerHTML = data[itemId].especie;
document.getElementById("raca").innerHTML = data[itemId].raca;
document.getElementById("descricao").innerHTML = data[itemId].descricao;
document.getElementById("cep").innerHTML = data[itemId].cep;
document.getElementById("telefone").innerHTML = data[itemId].telefone;
