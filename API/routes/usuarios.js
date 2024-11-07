const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/cadastro', (req, res) => {
        const { nome, email, senha, cod_rec } = req.body;
        db.run(`INSERT INTO usuarios (nome, email, senha, cod_rec) VALUES (?, ?, ?, ?)`,
            [nome, email, senha, cod_rec], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.status(201).json({ id: this.lastID });
            });
    });

    router.get('/perfil', (req, res) => {

        id = usuarioID;

    if (!id) {
        return res.status(401).send('Usuário não autenticado');
    }
    // Definindo a consulta SQL com SELECT e usando o usuarioId
    const query = `SELECT * FROM usuarios WHERE id = ?`;
    // Executando a consulta no banco de dados
    db.get(query, [id], (err, row) => {
        if (err) {
            return res.status(400).send(err.message);  // Erro ao executar a consulta
        }
        if (!row) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.json(row);  // Retorna o usuário em formato JSON
    });
});

    router.get('/', (req, res) => {
        db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.json(rows);
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { nome, email, senha, cod_rec } = req.body;
        db.run(`UPDATE usuarios SET nome = ?, email = ?, senha = ?, cod_rec = ? WHERE id = ?`,
            [nome, email, senha, cod_rec, id], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.send(`Usuário ${id} atualizado`);
            });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        db.run(`DELETE FROM usuarios WHERE id = ?`, id, function (err) {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.send(`Usuário ${id} deletado`);
        });
    });

    return router;
};
