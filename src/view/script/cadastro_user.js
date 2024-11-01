document.getElementById('usuarioForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cod_rec = document.getElementById('cod_rec').value;

    try {
        const response = await fetch('http://localhost:3000/usuarios/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha, cod_rec }),
        });
        if (response.ok) {
            const newUser = await response.json();
            console.log('Usuário cadastrado:', newUser);
             window.alert("Usuário cadastrado com sucesso");
             window.location.href = 'index.html';
            // Atualize a lista de usuários ou faça outra ação
        } else {
            console.error('Erro ao cadastrar usuário');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});

function togglePassword() {
    const passwordInput = document.getElementById("senha");
    const iconShow = document.getElementById("icon-show");
    const iconHide = document.getElementById("icon-hide");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconShow.style.display = "none";
        iconHide.style.display = "inline"; // Mostra o ícone de ocultar senha
    } else {
        passwordInput.type = "password";
        iconShow.style.display = "inline"; // Mostra o ícone de mostrar senha
        iconHide.style.display = "none";
    }
}