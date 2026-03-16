// Seleciona o formulário
const form = document.getElementById('form-cadastro');

// Evento de envio
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // 1. Captura os valores dos campos
    const novoUsuario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        nascimento: document.getElementById('nascimento').value
    };

    // 2. Busca a lista de usuários já salvos ou cria uma vazia
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // 3. Adiciona o novo usuário à lista
    listaUsuarios.push(novoUsuario);

    // 4. Salva de volta no LocalStorage (convertendo para texto)
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

    // 5. Feedback e Limpeza
    alert('Usuário cadastrado com sucesso!');
    form.reset();
    
    // Opcional: Mostra no console para você ver o "banco de dados"
    console.log("Lista Atualizada:", listaUsuarios);
{
    
});


// Salvando
localStorage.setItem('cadastro_cliente', JSON.stringify(cliente));

// Lendo depois
const salvo = JSON.parse(localStorage.getItem('cadastro_cliente'));
console.log(salvo.nome); // "Ana Silva Santos"
