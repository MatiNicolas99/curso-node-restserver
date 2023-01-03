//Hay personas que le colocan usuarios.controller.js


const { response, request, query } = require('express');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre, apikey} = req.query;
    res.json({
        msg: 'GET API - controlador',
        q, 
        nombre, 
        apikey
    });
}

const usuariosPut = (req, res = response) => {
    const {id}= req.params;

    res.json({ 
        msg: 'PUT API - controlador',
        id,
    });
};

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.status(201).json({ 
        msg: 'POST API - controlador',
        nombre, 
        edad
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - controlador'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API - controlador'
    });
}

module.exports = {
        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch
    };