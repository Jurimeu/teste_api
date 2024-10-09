/*
const express = require('express'); // importa o express
const sqlite3 = require('sqlite3').verbose(); // importa os comandos pra usar o SQLite
const cors = require('cors'); // Importar o pacote cors

const app = express();
app.use(cors()); // Adicionar o middleware cors
app.use(express.json());
const port = 3000;

// Criar ou abre o banco de dados SQLite (neste teste é usuarios.db)
const db = new sqlite3.Database('./proje_aqua.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados Aquario.');

        // Ativar suporte a chaves estrangeiras
        db.run(`PRAGMA foreign_keys = ON;`, (err) => {
            if (err) {
                console.error('Erro ao ativar chaves estrangeiras:', err.message);
            } else {
                console.log('Chaves estrangeiras ativadas.');
            }
        });
    }
});

// Criar a tabela se não existir
db.run(`
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    cod_rec TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS aquario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT NOT NULL,
    modelo TEXT NOT NULL,
    temperatura TEXT NOT NULL,
    imagem TEXT NOT NULL,
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS dados (
    temperatura TEXT NOT NULL,
    horario TEXT NOT NULL,
    aquario_id INTEGER,
    FOREIGN KEY (aquario_id) REFERENCES aquario(id) ON DELETE CASCADE
);
`);

// Rota GET para buscar todos os usuarios
app.get('/', (req, res) => {
    db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send(rows);
    });
});

// Rota POST para adicionar um novo usuario
app.post('/', (req, res) => {
    const { nome, email, senha, cod_rec } = req.body; // Certifique-se de incluir cod_rec aqui
    db.run(`INSERT INTO usuarios (nome, email, senha, cod_rec) VALUES (?, ?, ?, ?)`, [nome, email, senha, cod_rec], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).send({ id: this.lastID, nome, email, senha, cod_rec });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/
