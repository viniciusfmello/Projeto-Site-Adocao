const carrossel = document.querySelector('.carrossel');
      const carrosselImagens = document.querySelectorAll('.carrossel-imagem');
      let indiceAtual = 0;

      function mudarFoto() {
        indiceAtual++;
        if (indiceAtual === carrosselImagens.length) {
          indiceAtual = 0;
        }
        carrossel.style.transform = `translateX(${-indiceAtual * 100}%)`;
      }

    
    // Retrieve data from localStorage
    var jsonData = localStorage.getItem('dadosFormulario');

    if (jsonData) {
      // Convert the JSON string back to a JavaScript object
      var data = JSON.parse(jsonData);

      // Populate the HTML elements with the data
      
      document.getElementById('titulo').textContent = data.tituloAnuncio;
      document.getElementById('especie').textContent = data.especieAnimal;
      document.getElementById('raca').textContent = data.racaAnimal;
      document.getElementById('descricao').textContent = data.descricao;
      document.getElementById('cep').textContent = data.cep;
      document.getElementById('telefone').textContent = data.telefoneContato;
    }