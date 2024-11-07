 // Pega o aquário do localStorage
 const aquarioSelecionado = JSON.parse(localStorage.getItem('aquarioSelecionado'));

 if (aquarioSelecionado) {
     // Preenche os dados na página de detalhes
     document.getElementById('nomeAquario').textContent = aquarioSelecionado.nome;
     document.getElementById('modeloAquario').textContent = aquarioSelecionado.modelo;
     document.getElementById('codigoAquario').textContent = aquarioSelecionado.codigo;

     /*
     
     document.getElementById('nomeAquario').textContent = aquarioSelecionado.nome;
     
     */



     const imagem = aquarioSelecionado.modelo;
     let imgSrc = '';

     switch (imagem) {
         case 'esfera':
             imgSrc = '../img/Aquario_esfera.jpg';
             break;
         case 'quadrado':
             imgSrc = '../img/Aquario_quadrado.jpg';
             break;
         case 'retangulo':
             imgSrc = '../img/Aquario_retangulo.jpg';
             break;
         default:
             imgSrc = '../img/default.jpg';
     }

     document.getElementById('imagemAquario').src = imgSrc;
 } else {
     alert("Aquário não encontrado!");
 }