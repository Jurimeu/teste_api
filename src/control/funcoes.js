const form = document.getElementById('usuarioForm');
const usuarioList = document.getElementById('usuarioList');

// Função para buscar usuários
const fetchUsuarios = async () => {
    try {
        const response = await fetch('http://localhost:3000/');
        if (!response.ok) {
            throw new Error('Erro na rede');
        }
        const usuarios = await response.json();

        usuarioList.innerHTML = '';
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = ` Seu nome e: (${usuario.nome}), Seu email e: (${usuario.email}) E sua senha e: (${usuario.senha})`;
            usuarioList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
};

// Adicionar novo usuário
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar usuário');
        }

        fetchUsuarios(); // Atualizar a lista após adicionar
        form.reset(); // Limpar o formulário
        window.alert("Cadastrou");
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        window.alert("Deu erro");
    }
});
