const express = require('express');
const router = express.Router();

global.usuarioId = null; // Variável global para armazenar o ID do usuário logado

module.exports = (db) => {
    // Rota para fazer login
    router.post('/login', (req, res) => {
        const { email, senha } = req.body;

        db.get(`SELECT * FROM usuarios WHERE email = ? AND senha = ?`, [email, senha], (err, row) => {
            if (err || !row) {
                return res.status(401).json({ message: 'E-mail ou senha incorretos!' });
            }
            usuarioId = row.id; // Armazena o ID do usuário logado
            res.status(200).json({ message: `Bem-vindo, ${row.nome}!`, usuarioId });
        });
    });

    // Rota para fazer logout
    router.post('/logout', (req, res) => {
        if (usuarioId !== null) {
            usuarioId = null; // Limpa a variável do ID do usuário logado
            return res.status(200).json({ message: 'Usuário desconectado.' });
        }
        res.status(400).json({ message: 'Nenhum usuário está logado.' });
    });

    return router;
};
