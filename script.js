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
});




{
  "cliente_id": 1025,
  "data_cadastro": "2026-03-16",
  "ativo": true,
  "perfil": {
    "nome_completo": "Ana Silva Santos",
    "cpf": "123.456.789-00",
    "data_nascimento": "1992-05-20",
    "contatos": {
      "email": "ana.silva@email.com",
      "telefone": "+55 11 98888-7777"
    }
  },
  "endereco": {
    "logradouro": "Rua das Flores",
    "numero": "123",
    "complemento": "Apto 42",
    "bairro": "Jardim Paulista",
    "cidade": "São Paulo",
    "estado": "SP",
    "cep": "01234-567"
  },
  "preferencias": [
    "notificacoes_email",
    "newsletter",
    "modo_escuro"
  ]
}


import json

# 1. Representação dos dados (em formato de string/texto)
dados_cliente_json = '''
{
  "cliente_id": 1025,
  "perfil": {
    "nome_completo": "Ana Silva Santos",
    "contatos": {
      "email": "ana.silva@email.com"
    }
  },
  "ativo": true
}
'''

# 2. Convertendo a string JSON para um Dicionário Python
dados = json.loads(dados_cliente_json)

# Agora podemos acessar os dados como se fosse uma pasta organizada
nome = dados["perfil"]["nome_completo"]
email = dados["perfil"]["contatos"]["email"]

print(f"Processando cadastro de: {nome}")
print(f"E-mail de contato: {email}")

# 3. Salvando as informações em um arquivo físico (.json)
with open('cadastro_cliente.json', 'w', encoding='utf-8') as arquivo:
    json.dump(dados, arquivo, indent=4, ensure_ascii=False)

print("\nArquivo 'cadastro_cliente.json' criado com sucesso!")
