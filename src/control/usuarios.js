document.getElementById('usuarioForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cod_rec = document.getElementById('cod_rec').value;

    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha, cod_rec }),
        });
        if (response.ok) {
            const newUser = await response.json();
            console.log('Usuário cadastrado:', newUser);
            // Atualize a lista de usuários ou faça outra ação
        } else {
            console.error('Erro ao cadastrar usuário');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Função para listar usuários
async function listarUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/usuarios');
        const usuarios = await response.json();
        const usuariosList = document.getElementById('usuariosList');
        usuariosList.innerHTML = '';
        usuarios.forEach(usuario => {
            const div = document.createElement('div');
            div.textContent = `ID: ${usuario.id}, Nome: ${usuario.nome}, Email: ${usuario.email}`;
            usuariosList.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
    }
}

// Chamar a função ao carregar a página
window.onload = listarUsuarios;
