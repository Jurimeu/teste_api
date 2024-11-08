

function preencherCampos() {
    fetch('http://localhost:3000/usuarios/perfil')  // URL da sua API
    .then(response => {
        if (!response.ok) {
            throw new Error('Falha ao carregar perfil');
        }
        return response.json();
    })
    .then(dados => {
        // Preenchendo os campos com os dados do usuário
        document.getElementById('userName').value = dados.usuario.nome;
        document.getElementById('userEmail').value = dados.usuario.email;
        document.getElementById('userPassword').value = dados.usuario.senha;  // Se for realmente necessário
    })
    .catch(error => {
        console.error("Erro ao buscar dados da API:", error);
        // Exibe mensagem de erro para o usuário
        document.getElementById('userName').value = 'Erro ao carregar nome';  // Substitua com a mensagem desejada
    });
}

// Chama a função para preencher os campos assim que a página carregar
window.onload = preencherCampos;


function toggleMenu() {
    const toolbar = document.getElementById('toolbar');
    toolbar.classList.toggle('active'); // Adiciona ou remove a classe 'active'
}
