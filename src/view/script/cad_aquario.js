document.getElementById('aquarioForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const modelo = document.getElementById('modelo').value;
    

    try {
        const response = await fetch('http://localhost:3000/aquario/cadastro', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, codigo, modelo }), // Removido usuario_id
        });
        if (response.ok) {
            const newAquario = await response.json();
            console.log('Aquário cadastrado:', newAquario);
            window.alert("Aquário cadastrado com sucesso");
            window.location.href = 'tela_inicial.html';
        } else {
            const errorData = await response.json();
            console.error('Erro ao cadastrar aquário:', errorData.message);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
    
});
