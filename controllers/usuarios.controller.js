const { response, request } = require("express");
const conexion = require('../data/config');

const usuariosGet = (req = request, res = response) => {
    if (req.query.id) {
        conexion.query(`SELECT * FROM users where id=${req.query.id}`, (error, result) => {
            if (error) console.log(error)
            res.json(result)
        });
    } else {
        conexion.query('SELECT * FROM users', (error, result) => {
            if (error) console.log(error)
            res.json(result)
        });
    }
}

const usuariosPost = (req = request, res = response) => {
    conexion.query(`INSERT INTO users (name,email) values("${req.body.name}","${req.body.email}")`, (error, result) => {
        if (error) throw error;
        res.status(201).res.json(result);
    });
}

const usuariosPut = (req = request, res = response) => {
    conexion.query(`UPDATE users SET name="${req.body.name}", email="${req.body.email}"  WHERE id="${req.query.id}"`, (error, result) => {
        if (error) throw error;
        res.status(201).res.json(result)
    });
}

const usuariosDelete = (req = request, res = response) => {
    conexion.query(`DELETE FROM users WHERE id="${req.query.id}"`, (error, result) => {
        if (error) console.log(error)
        res.json(result)
    });
}

module.exports = {
    usuariosGet, usuariosPost, usuariosPut, usuariosDelete
}
