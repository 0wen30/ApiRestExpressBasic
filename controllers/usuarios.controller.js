const { response,request } = require("express");
const pool = require('../data/config');

const usuariosGet = (req=request, res=response) => {
    res.json({method:'get'})
}

const usuariosPost = (req=request, res=response) => {
    res.json({method:'post'})
}

const usuariosPut = (req=request, res=response) => {
    res.json({method:'put'})
}

const usuariosDelete = (req=request, res=response) => {
    res.json({method:'delete'})
}

module.exports = {
    usuariosGet,usuariosPost,usuariosPut,usuariosDelete
}
