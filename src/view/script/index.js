const correctEmail = "usuario@exemplo.com";
const correctPassword = "senha123";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === correctEmail && password === correctPassword) {
        // Redirecionar para a tela inicial
        window.location.href = "tela_inicial.html"; // Substitua pelo seu arquivo
    } else {
        document.getElementById("errorMessage").textContent = "E-mail ou senha incorretos.";
    }
});
