function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
  
    if (usuarios[username] && usuarios[username].password === password) {
      alert('Login bem-sucedido!');
      window.location.href = '../TelaPrincipal/index.html';
    } else {
      alert('Usuário ou senha incorretos!');
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
    const birthdate = document.getElementById('birthdate').value;
  
    // Verifica a idade mínima de 18 anos
    const currentDate = new Date();
    const selectedDate = new Date(birthdate);
    const age = currentDate.getFullYear() - selectedDate.getFullYear();
    const monthDiff = currentDate.getMonth() - selectedDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < selectedDate.getDate())) {
      age--;
    }
  
    if (age < 18) {
      alert('É necessário ter 18 anos ou mais para realizar o registro.');
      return; 
    }
  
    // Verifica se o nome de usuário já está em uso
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
    if (usuarios.hasOwnProperty(username)) {
      alert('O nome de usuário já está em uso. Por favor, escolha outro nome.');
      return; 
    }
  
    // Verifica se o e-mail tem um formato de email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    // Cria o novo usuário
    const novoUsuario = {
      username: username,
      password: password,
      email: email,
      birthdate: birthdate
    };
  
   
    usuarios[username] = novoUsuario;
  
    // Salva o user novo no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    alert('Registro bem-sucedido!');
  }
  