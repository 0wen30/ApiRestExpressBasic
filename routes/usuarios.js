const { Router } = require("express");

const { usuariosGet,usuariosPost,usuariosPut,usuariosDelete } = require("../controllers/usuarios.controller");

const router = Router();

router.get('/:id?',usuariosGet);

router.post('/',usuariosPost);

router.put('/:id?',usuariosPut);

router.delete('/:id?',usuariosDelete);

module.exports = router;