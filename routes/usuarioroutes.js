"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariocontroller_1 = require("../controllers/usuariocontroller");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarUsuario/:id', usuariocontroller_1.usuariocontroller.mostrarUsuario);
        this.router.get('/mostrarTodosUsuarios', usuariocontroller_1.usuariocontroller.mostrarTodosUsuarios);
        this.router.post('/crearUsuario', usuariocontroller_1.usuariocontroller.crearUsuario);
        this.router.put('/actualizarUsuario/:id', usuariocontroller_1.usuariocontroller.actualizarUsuario);
        this.router.delete('/eliminarUsuario/:id', usuariocontroller_1.usuariocontroller.eliminarUsuario);
        this.router.get('/listarUsuariosRol/:id', usuariocontroller_1.usuariocontroller.listarUsuariosRol);
    }
}
const usuarioroutes = new UsuarioRoutes();
exports.default = usuarioroutes.router;
