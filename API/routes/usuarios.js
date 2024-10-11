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
