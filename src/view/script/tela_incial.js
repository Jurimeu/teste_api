// Aqui você pode adicionar funcionalidades JavaScript no futuro
console.log("Tela inicial carregada.");

async function listarAquarios() {
    try {
        const response = await fetch('http://localhost:3000/aquario');
        const aquarios = await response.json();
        const aquariosList = document.getElementById('aquariosList');
        aquariosList.innerHTML = '';

        aquarios.forEach(aquario => {
            const card = document.createElement('div');
            card.className = 'project-card'; // Usando a classe project-card
            
            // Criando uma imagem padrão
            const img = document.createElement('img');

            img.src = '../img/Aquario_esfera.jpg'; // URL da imagem padrão
            
            img.alt = aquario.nome; // Texto alternativo
            img.className = 'imgCard'; // Adiciona a classe da imagem
            
            // Criando o texto
            const nome = document.createElement('p');
            nome.textContent = aquario.nome; // Nome do aquário

            // Adicionando a imagem e o texto ao card
            card.appendChild(img);
            card.appendChild(nome);

            // Adicionando o card ao container
            aquariosList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao listar aquários:', error);
    }
}

// Chama a função ao carregar a página
listarAquarios();
