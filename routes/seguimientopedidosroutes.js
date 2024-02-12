"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seguimientopedidoscontroller_1 = require("../controllers/seguimientopedidoscontroller");
class SeguimientoPedidosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarSeguimientoPedidos/:id', seguimientopedidoscontroller_1.seguimientopedidoscontroller.mostrarSeguimientoPedidos);
        this.router.get('/listarSeguimientoPedidosUsuario/:id', seguimientopedidoscontroller_1.seguimientopedidoscontroller.listarSeguimientoPedidosUsuario);
        this.router.get('/crearSeguimientoPedidos', seguimientopedidoscontroller_1.seguimientopedidoscontroller.crearSeguimientoPedidos);
        this.router.get('/actualizarSeguimientoPedidos/:id', seguimientopedidoscontroller_1.seguimientopedidoscontroller.actualizarSeguimientoPedidos);
        this.router.get('/eliminarSeguimientoPedidos/:id', seguimientopedidoscontroller_1.seguimientopedidoscontroller.eliminarSeguimientoID);
    }
}
const seguimientopedidosroutes = new SeguimientoPedidosRoutes();
exports.default = seguimientopedidosroutes.router;
