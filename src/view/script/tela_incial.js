// Aqui você pode adicionar funcionalidades JavaScript no futuro
console.log("Tela inicial carregada.");
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// Armazenar chave do tema no localStorage
const storageKey = 'theme-preference';

// Função ao clicar no botão de tema
const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  setPreference();
};

// Pegar preferência do tema do localStorage ou sistema
const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
};

// Guardar tema no localStorage
const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

// Aplicar o tema no documento
const reflectPreference = () => {
  document.firstElementChild.setAttribute('data-theme', theme.value);
  document.querySelector('#theme-toggle').setAttribute('aria-label', theme.value);
};

// Inicializar tema
const theme = {
  value: getColorPreference(),
};

// Definir o tema na inicialização
reflectPreference();

// Adicionar listener para o botão de troca de tema
document.querySelector('#theme-toggle').addEventListener('click', onClick);

// Sincronizar tema do SO
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  theme.value = isDark ? 'dark' : 'light';
  setPreference();
});
