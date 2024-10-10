document.getElementById('aquarioForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const codigo = document.getElementById('codigo').value;
    const modelo = document.getElementById('modelo').value;
    const temperatura = document.getElementById('temperatura').value;
    const imagem = document.getElementById('imagem').value;
    const usuario_id = document.getElementById('usuario_id').value;

    try {
        const response = await fetch('http://localhost:3000/aquario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo, modelo, temperatura, imagem, usuario_id }),
        });
        if (response.ok) {
            const newAquario = await response.json();
            console.log('Aquário cadastrado:', newAquario);
            // Atualize a lista de aquários ou faça outra ação
        } else {
            console.error('Erro ao cadastrar aquário');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Função para listar aquários
async function listarAquarios() {
    try {
        const response = await fetch('http://localhost:3000/aquario');
        const aquarios = await response.json();
        const aquariosList = document.getElementById('aquariosList');
        aquariosList.innerHTML = '';
        aquarios.forEach(aquario => {
            const div = document.createElement('div');
            div.textContent = `ID: ${aquario.id}, Código: ${aquario.codigo}, Modelo: ${aquario.modelo}`;
            aquariosList.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao listar aquários:', error);
    }
}

// Chamar a função ao carregar a página
window.onload = listarAquarios;
