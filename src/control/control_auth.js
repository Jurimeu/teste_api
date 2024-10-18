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
        messageDiv.innerText = `Login bem-sucedido: ${data.message}`;
    } else {
        const errorData = await response.json();
        messageDiv.innerText = `Deu erro no login patrao: ${errorData.message}`;
    }
});

document.getElementById('logoutButton').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const logoutMessageDiv = document.getElementById('logoutMessage');
    if (response.ok) {
        const data = await response.json();
        logoutMessageDiv.innerText = data.message;
    } else {
        const errorData = await response.json();
        logoutMessageDiv.innerText = `Erro: ${errorData.message}`;
    }
});
