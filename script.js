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


// 1. O Objeto original (como se estivesse vindo de um formulário)
const cliente = {
    id: 1025,
    nome: "Ana Silva Santos",
    email: "ana.silva@email.com",
    ativo: true
};

// 2. Transformando o Objeto em uma STRING JSON (para enviar para um servidor)
// O 'null, 2' serve para deixar o texto bonitinho/identado no console
const clienteJSON = JSON.stringify(cliente, null, 2);

console.log("Dados prontos para envio:");
console.log(clienteJSON);

// 3. O caminho inverso: Transformando uma STRING JSON em Objeto (quando você recebe dados)
const dadosRecebidos = '{"id": 1025, "nome": "Ana Silva Santos", "ativo": true}';
const objetoCliente = JSON.parse(dadosRecebidos);

// Agora você acessa as propriedades normalmente
console.log(`\nBem-vinda de volta, ${objetoCliente.nome}!`);
