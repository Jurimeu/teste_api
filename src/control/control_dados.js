document.getElementById('dadosForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const temperatura = document.getElementById('temperatura').value;
    const horario = document.getElementById('horario').value;
    const aquario_id = document.getElementById('aquario_id').value;

    try {
        const response = await fetch('http://localhost:3000/dados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ temperatura, horario, aquario_id }),
        });
        if (response.ok) {
            const newDados = await response.json();
            console.log('Dados cadastrados:', newDados);
             window.alert("Dados cadastrado com sucesso");
            // Atualize a lista de dados ou faça outra ação
        } else {
            console.error('Erro ao cadastrar dados');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Função para listar dados
async function listarDados() {
    try {
        const response = await fetch('http://localhost:3000/dados');
        const dados = await response.json();
        const dadosList = document.getElementById('dadosList');
        dadosList.innerHTML = '';
        dados.forEach(dado => {
            const div = document.createElement('div');
            div.textContent = `Temperatura: ${dado.temperatura}, Horário: ${dado.horario}`;
            dadosList.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao listar dados:', error);
    }
}

// Chamar a função ao carregar a página
window.onload = listarDados;
