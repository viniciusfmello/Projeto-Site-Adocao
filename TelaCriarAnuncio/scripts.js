    // Função para enviar os dados
    function enviarDados() {
        // Obter os valores dos campos do formulário
        var nome = document.getElementById('nome-input').value;
        var titulo = document.getElementById('titulo-input').value;
        var especie = document.getElementById('especie-select').value;
        var raca = document.getElementById('raca-input').value;
        var descricao = document.getElementById('descricao-input').value;
        var cep = document.getElementById('cep-input').value;
        var telefone = document.getElementById('telefone-input').value;
        
  
        // Verificar se todos os campos estão preenchidos
        if (nome && titulo && especie && descricao && cep && telefone) {
          // Criar um objeto JSON com os dados
          var data = {
            "tituloAnuncio": titulo,
            "especieAnimal": especie,
            "racaAnimal": raca,
            "descricao": descricao,
            "cep": cep,
            "telefoneContato": telefone
          };
  
          // Converter o objeto JSON em uma string
          var jsonData = JSON.stringify(data);
  
          // Armazenar os dados no localStorage
          localStorage.setItem('dadosFormulario', jsonData);
  
          // Exibir o JSON no console
          console.log(jsonData);
  
          // Redirecionar para outra página após um breve intervalo
          setTimeout(function() {
            window.location.href = "index.html";
          }, 1000); // Redireciona após 1 segundo (1000 milissegundos)
  
          // Desabilitar o botão de envio após o envio do formulário
          var submitButton = document.getElementById('submit-button');
          submitButton.disabled = true;
          submitButton.textContent = "Enviado";
        } else {
          alert("Por favor, preencha todos os campos do formulário.");
        }
      }
  
      // Adicionar um listener para o evento de envio do formulário
      var form = document.getElementById('myForm');
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        enviarDados();
      });
  
      document.addEventListener('DOMContentLoaded', function() {
        // Recuperar os dados do localStorage
        var jsonData = localStorage.getItem('dadosFormulario');
  
        if (jsonData) {
          // Converter a string JSON de volta para um objeto JavaScript
          var data = JSON.parse(jsonData);
  
          // Exibir os dados recuperados na página
          document.getElementById('titulo').textContent = data.tituloAnuncio;
          document.getElementById('especie').textContent = data.especieAnimal;
          document.getElementById('raca').textContent = data.racaAnimal;
          document.getElementById('descricao').textContent = data.descricao;
          document.getElementById('cep').textContent = data.cep;
          document.getElementById('telefone').textContent = data.telefoneContato;
  
          // Desabilitar o botão de envio se o formulário já foi enviado
          var submitButton = document.getElementById('submit-button');
          submitButton.disabled = true;
          submitButton.textContent = "Enviado";
        }
      });