const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/cadastro', (req, res) => {
        const { nome, codigo, modelo } = req.body;
    
        if (!usuarioId) {
            return res.status(401).json({ message: 'Usuário não autenticado.' });
        }
    
        db.run(`INSERT INTO aquario (nome, codigo, modelo, usuario_id) VALUES (?, ?, ?, ?)`,
            [nome, codigo, modelo, usuarioId], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.status(201).json({ id: this.lastID });
            });
    });
    

   router.get('/', (req, res) => {
    const query = `SELECT * FROM aquario WHERE usuario_id = ?`;
    db.all(query, [usuarioId], (err, rows) => {
        if (err) {
            return res.status(400).send(err.message);
        }

        res.json(rows);
    });
});

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { nome, codigo, modelo, usuario_id } = req.body;
        db.run(`UPDATE aquario SET nome = ?, codigo = ?, modelo = ?, usuario_id = ? WHERE id = ?`,
            [nome, codigo, modelo, usuario_id, id], function (err) {
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
