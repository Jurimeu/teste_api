const express = require('express'); // importa o express
const sqlite3 = require('sqlite3').verbose(); // importa os comandos pra usar o SQLite
const cors = require('cors'); // Importar o pacote cors

const app = express();
app.use(cors()); // Adicionar o middleware cors
app.use(express.json());
const port = 3000;

// Criar ou abre o banco de dados SQLite (neste tete é usuarios.db)
const db = new sqlite3.Database('./usuarios.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Criar a tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);`);

// Rota GET para buscar todas usuarios
app.get('/', (req, res) => {
    db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send(rows);
    });
});

// Rota POST para adicionar uma nova comida
app.post('/', (req, res) => {
    const { nome, email, senha } = req.body;
    db.run(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, senha], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).send({ id: this.lastID, nome, email, senha });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
