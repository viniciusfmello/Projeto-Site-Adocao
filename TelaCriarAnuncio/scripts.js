document.getElementById('nome-input').value = localStorage.UsuarioLogado;

function enviarDados() {
  var nome = document.getElementById('nome-input').value;
  var titulo = document.getElementById('titulo-input').value;
  var especie = document.getElementById('especie-select').value;
  var raca = document.getElementById('raca-input').value;
  var descricao = document.getElementById('descricao-input').value;
  var cep = document.getElementById('cep-input').value;
  var telefone = document.getElementById('telefone-input').value;
  var porte = document.getElementById('porte-select').value;

  var fotoInput = document.getElementById('foto-input');
  var foto = fotoInput.files[0];

  if (nome && titulo && especie && descricao && cep && telefone && foto) {
    var jsonData = localStorage.getItem('anuncios');
    var anuncios = [];

    if (jsonData) {
      anuncios = JSON.parse(jsonData);
    }

    var reader = new FileReader();
    reader.onload = function(event) {
      var fotoBase64 = event.target.result;

      var novoAnuncio = {
        "imagem": fotoBase64,
        "nome": titulo,
        "descricao": descricao,
        "cep": cep,
        "telefone": telefone,
        "raca": raca,
        "especie": especie,
        "porte": porte,
        "nomeDoador": nome
      };

      anuncios.push(novoAnuncio);

      var novoJsonData = JSON.stringify(anuncios);

      localStorage.setItem('anuncios', novoJsonData);

      console.log(jsonData);

      setTimeout(function() {
        window.location.href = "index.html";
      }, 1000);

      var submitButton = document.getElementById('submit-button');
      submitButton.disabled = true;
      submitButton.textContent = "Enviado";
    };

    reader.readAsDataURL(foto);
    window.location.href = '../TelaPrincipal/index.html';
  } else {
    alert("Por favor, preencha todos os campos do formulário e selecione uma imagem.");
  }
}

var form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  enviarDados();
});

document.addEventListener('DOMContentLoaded', function() {
  var jsonData = localStorage.getItem('dadosFormulario');

  if (jsonData) {
    var data = JSON.parse(jsonData);

    document.getElementById('titulo').textContent = data.tituloAnuncio;
    document.getElementById('especie').textContent = data.especieAnimal;
    document.getElementById('raca').textContent = data.racaAnimal;
    document.getElementById('descricao').textContent = data.descricao;
    document.getElementById('cep').textContent = data.cep;
    document.getElementById('telefone').textContent = data.telefoneContato;

    var submitButton = document.getElementById('submit-button');
    submitButton.disabled = true;
    submitButton.textContent = "Enviado";
  }
});
