/*
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
    });

    
    if (response.ok) {
        const data = await response.json();
        window.alert(`Login bem-sucedido: ${data.message}`);
    } else {
        const errorData = await response.json();
        window.alert(`Deu erro no login patrao: ${errorData.message}`);
    }
}); 

*/

