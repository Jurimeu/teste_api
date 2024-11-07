function preencherCampos() {
    fetch('http://localhost:3000/usuarios/perfil')  // URL da sua API
        .then(response => response.json())
        .then(dados => {
            document.getElementById('userName').value = dados.nome;
            document.getElementById('userEmail').value = dados.email;
            document.getElementById('userPassword').value = dados.senha;
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
}

// Chama a função para preencher os campos assim que a página carregar
window.onload = preencherCampos;


function toggleMenu() {
    const toolbar = document.getElementById('toolbar');
    toolbar.classList.toggle('active'); // Adiciona ou remove a classe 'active'
}
