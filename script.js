// Alternar entre as telas de Login e Cadastro
function toggleTelas() {
    document.getElementById('cadastro-box').classList.toggle('hidden');
    document.getElementById('login-box').classList.toggle('hidden');
}

// Função para Salvar Cadastro
function cadastrar() {
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;

    if (user === '' || pass === '') {
        alert("Preencha todos os campos!");
        return;
    }

    // Salva as informações como um objeto no LocalStorage
    // Usamos o nome do usuário como 'chave' para permitir múltiplos usuários
    localStorage.setItem(user, pass);
    
    alert("Cadastro realizado com sucesso!");
    toggleTelas(); // Vai para a tela de login
}

// Função para Validar Login
function login() {
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;

    // Busca a senha associada ao usuário no LocalStorage
    const senhaSalva = localStorage.getItem(user);

    if (senhaSalva && senhaSalva === pass) {
        alert("Login realizado! Redirecionando...");
        window.location.href = "livros20.html"; // Redireciona para sua página
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
