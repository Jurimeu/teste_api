const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Importar o pacote cors

const app = express();
app.use(cors()); // Adicionar o middleware cors
app.use(express.json());
const port = 3000;

// Criar ou abrir o banco de dados SQLite
const db = new sqlite3.Database('./comidas.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Criar a tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS comidas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    gostosas TEXT,
    suculentas TEXT,
    image_url TEXT
);`);

// Rota GET para buscar todas as comidas
app.get('/', (req, res) => {
    db.all(`SELECT * FROM comidas`, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.send(rows);
    });
});

// Rota POST para adicionar uma nova comida
app.post('/', (req, res) => {
    const { gostosas, suculentas, image_url } = req.body;
    db.run(`INSERT INTO comidas (gostosas, suculentas, image_url) VALUES (?, ?, ?)`, [gostosas, suculentas, image_url], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).send({ id: this.lastID, gostosas, suculentas, image_url });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
