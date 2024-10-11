const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/cadastro', (req, res) => {
        const { codigo, modelo, temperatura, imagem } = req.body;
    
        if (!usuarioId) {
            return res.status(401).json({ message: 'Usuário não autenticado.' });
        }
    
        db.run(`INSERT INTO aquario (codigo, modelo, temperatura, imagem, usuario_id) VALUES (?, ?, ?, ?, ?)`,
            [codigo, modelo, temperatura, imagem, usuarioId], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.status(201).json({ id: this.lastID });
            });
    });
    

    router.get('/', (req, res) => {
        db.all(`SELECT * FROM aquario`, [], (err, rows) => {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.json(rows);
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { codigo, modelo, temperatura, imagem, usuario_id } = req.body;
        db.run(`UPDATE aquario SET codigo = ?, modelo = ?, temperatura = ?, imagem = ?, usuario_id = ? WHERE id = ?`,
            [codigo, modelo, temperatura, imagem, usuario_id, id], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.send(`Aquário ${id} atualizado`);
            });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        db.run(`DELETE FROM aquario WHERE id = ?`, id, function (err) {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.send(`Aquário ${id} deletado`);
        });
    });

    return router;
};
