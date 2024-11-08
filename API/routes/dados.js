const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    function obterDataHoraAtual() {
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const ano = dataAtual.getFullYear();
        const horas = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    
        // Formata a data e hora como uma string ISO
        const dataHoraFormatada = `${ano}-${mes}-${dia} ${horas}:${minutos}`;
        return dataHoraFormatada;
    }
    

    router.post('/', (req, res) => {

        const horario = obterDataHoraAtual();

        const { temperatura, aquario_id } = req.body;
        db.run(`INSERT INTO dados (temperatura, horario, aquario_id) VALUES (?, ?, ?)`,
            [temperatura, horario, aquario_id], function (err) {
                if (err) {
                    return res.status(400).send(err.message);
                }
                res.status(201).json({ id: this.lastID });
            });
    });

    router.get('/relatorio/:id_aquario', (req, res) => {
        const { id_aquario } = req.params; // Pega o parâmetro id_aquario da URL
    
        // Consulta para pegar os dados do aquário
        db.all(`SELECT aquario_id, temperatura, horario FROM dados WHERE aquario_id = ?`, [id_aquario], (err, rows) => {
            if (err || !rows || rows.length === 0) {
                return res.status(404).json({ message: 'Dados não encontrados para esse aquário.' });
            }
    
            // Se encontrou dados, retorna os resultados
            res.status(200).json(rows);  // Envia os dados encontrados como um array de objetos
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
