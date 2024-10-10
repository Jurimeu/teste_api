const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        const { temperatura, horario, aquario_id } = req.body;
        db.run(`INSERT INTO dados (temperatura, horario, aquario_id) VALUES (?, ?, ?)`,
            [temperatura, horario, aquario_id], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.status(201).json({ id: this.lastID });
            });
    });

    router.get('/', (req, res) => {
        db.all(`SELECT * FROM dados`, [], (err, rows) => {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.json(rows);
        });
    });

    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { temperatura, horario, aquario_id } = req.body;
        db.run(`UPDATE dados SET temperatura = ?, horario = ?, aquario_id = ? WHERE aquario_id = ?`,
            [temperatura, horario, aquario_id, id], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.send(`Dados do aquário ${id} atualizados`);
            });
    });

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        db.run(`DELETE FROM dados WHERE aquario_id = ?`, id, function (err) {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.send(`Dados do aquário ${id} deletados`);
        });
    });

    return router;
};
