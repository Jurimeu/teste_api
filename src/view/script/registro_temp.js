const aquarioSelecionado = JSON.parse(localStorage.getItem('aquarioSelecionado'));


if (aquarioSelecionado) {
 const idAquario = aquarioSelecionado.id;
 const nome = aquarioSelecionado.nome;
 const modelo = aquarioSelecionado.modelo;


 fetch(`http://localhost:3000/dados/relatorio/${idAquario}`)
 // Substitua {id_do_aquario} com o ID correto
  .then(response => response.json())
  .then(data => {
      console.log(data); // Verifique o formato da resposta da API

      // Seleciona o tbody da tabela onde os dados serão inseridos
      const tbody = document.querySelector('#tabela-relatorios tbody');

      // Limpa a tabela antes de adicionar novos dados
      tbody.innerHTML = '';

      // Itera sobre os dados recebidos da API e cria as linhas
      data.forEach(item => {
          // Cria uma nova linha da tabela (tr)
          const tr = document.createElement('tr');
          
          // Cria as células (td) para cada dado do item
          const tdId = document.createElement('td');
          tdId.textContent = item.aquario_id; // Exibe o ID do aquário
          tr.appendChild(tdId);
          
          const tdNome = document.createElement('td');
          tdNome.textContent = nome; // Exibe o nome do aquário
          tr.appendChild(tdNome);
          
          const tdModelo = document.createElement('td');
          tdModelo.textContent = modelo; // Exibe o modelo (se existir)
          tr.appendChild(tdModelo);
          
          const tdTemperatura = document.createElement('td');
          tdTemperatura.textContent = item.temperatura; // Exibe a temperatura
          tr.appendChild(tdTemperatura);
          
          const tdHorario = document.createElement('td');
          tdHorario.textContent = item.horario; // Exibe o horário e data
          tr.appendChild(tdHorario);
          
          // Adiciona a linha à tabela
          tbody.appendChild(tr);
      });
  })
  .catch(error => {
      console.error('Erro ao carregar os dados:', error);
  });

  
} 
  else {
  console.log('Aquário não encontrado no localStorage');
}

