function exibirMensagem(mensagem) {
  const messageContainer = document.getElementById('message-container');
  messageContainer.style.display = 'block';
  messageContainer.innerHTML = mensagem;
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

  if (usuarios[username] && usuarios[username].password === password) {
    exibirMensagem('Login Bem Sucedido!');
    localStorage.setItem("UsuarioLogado", username);
    setTimeout(function() {
      window.location.href = '../TelaPrincipal/index.html';
    }, 2000);
  } else {
    exibirMensagem('Usuário ou Senha Incorretos!');
  }
}
  
  function registerRedirect() {
    window.location.href = 'registro.html';
  }
  
  function loginRedirect() {
    window.location.href = 'login.html';
  }
  
  function registro() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const email = document.getElementById('email').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
  
    if (usuarios.hasOwnProperty(username)) {
      exibirMensagem('O nome de usuário já está em uso. Por favor, escolha outro nome.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      exibirMensagem('Por favor, insira um e-mail válido.');
      return;
    }
  
    const novoUsuario = {
      username: username,
      password: password,
      email: email
    };
  
    usuarios[username] = novoUsuario;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    exibirMensagem('Registro bem-sucedido!');
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('email').value = '';
  }