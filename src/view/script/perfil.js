function toggleMenu() {
    const toolbar = document.getElementById('toolbar');
    toolbar.classList.toggle('active'); // Adiciona ou remove a classe 'active'
}

  // Seleciona os elementos
  const editableTitle = document.getElementById('editable-title');
  const editIcon = document.getElementById('edit-icon');
  const saveBtn = document.getElementById('save-btn');

  // Função para habilitar edição ao clicar no ícone de lápis
  editIcon.addEventListener('click', () => {
      editableTitle.contentEditable = "true"; // Habilita edição
      editableTitle.focus(); // Foca no título
      saveBtn.classList.add('active'); // Mostra o botão salvar
      editIcon.style.display = 'none'; // Oculta o ícone de lápis
  });

  // Habilita o botão "Salvar" quando houver alterações no título
  editableTitle.addEventListener('input', () => {
      saveBtn.disabled = false;
  });

  // Função para salvar o conteúdo do título
  saveBtn.addEventListener('click', () => {
      const updatedTitle = editableTitle.innerText;

      // Aqui você pode salvar o título atualizado, por exemplo, enviando via AJAX para um servidor
      console.log('Título atualizado:', updatedTitle);

      // Desabilita edição e botão após salvar
      editableTitle.contentEditable = "false"; 
      saveBtn.disabled = true;
      saveBtn.classList.remove('active'); // Oculta o botão salvar
      editIcon.style.display = 'inline'; // Mostra o ícone de lápis

      // Mensagem de sucesso (opcional)
      alert('Título salvo com sucesso!');
  });