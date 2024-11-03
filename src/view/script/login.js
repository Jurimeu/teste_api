document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
    });

    const messageDiv = document.getElementById('message');
    if (response.ok) {
        const data = await response.json();
        
        window.location.href = 'tela_inicial.html';
    } else {
        const errorData = await response.json();
        window.alert("Algo esta errado e nao foi possivel realizar login");
    }
});
