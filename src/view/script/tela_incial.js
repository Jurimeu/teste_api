// Aqui você pode adicionar funcionalidades JavaScript no futuro

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
            
            // Criando um contêiner para a imagem e o texto
            const contentContainer = document.createElement('div');
            contentContainer.className = 'content-container'; // Classe opcional para estilização
            
            // Criando a imagem
            const img = document.createElement('img');
            const imagem = aquario.modelo;

            switch (imagem){
                case 'esfera':
                    img.src = '../img/Aquario_esfera.jpg';
                    break;
                case 'quadrado':
                    img.src = '../img/Aquario_quadrado.jpg';
                    break;
                case 'retangulo':
                    img.src = '../img/Aquario_retangulo.jpg';
                    break;
                default:
                    console.log('Modelo nao encontrado');
            }
            
            img.alt = aquario.nome; // Texto alternativo
            img.className = 'imgCard'; // Adiciona a classe da imagem
            
            // Criando o texto
            const nome = document.createElement('p');
            nome.textContent = aquario.nome; // Nome do aquário
            
            // Adicionando a imagem e o texto ao contêiner
            contentContainer.appendChild(img);
            contentContainer.appendChild(nome);
            
            // Adicionando o contêiner ao card
            card.appendChild(contentContainer);
            
            // Adicionando o card ao container principal
            aquariosList.appendChild(card);
            
            // Adicionando um evento de clique no card
            card.addEventListener('click', () => {
                // Você pode usar o localStorage ou sessionStorage para passar dados entre páginas
                // Exemplo com localStorage:
                localStorage.setItem('aquarioSelecionado', JSON.stringify(aquario));
                
                // Redirecionar para a página de detalhes
                window.location.href = 'tela_aquario.html'; // Aqui você coloca o caminho da sua página de detalhes
            });
        });
    } catch (error) {
        console.error('Erro ao listar aquários:', error);
    }
}

// Chama a função ao carregar a página
listarAquarios();


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
      window.location.href = 'login.html';
  } else {
      const errorData = await response.json();
      logoutMessageDiv.innerText = `Erro: ${errorData.message}`;
  }
});
