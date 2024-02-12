"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallecompracontroller_1 = require("../controllers/detallecompracontroller");
class DetalleCompraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarDetalleCompra/:id', detallecompracontroller_1.detallecompracontroller.mostrarDetalleCompra);
        this.router.get('/crearDetalleCompra/', detallecompracontroller_1.detallecompracontroller.crearDetalleCompra);
        this.router.get('/actualizarDetalleCompra/:id', detallecompracontroller_1.detallecompracontroller.actualizarDetalleCompra);
        this.router.get('/eliminarDetalleCompra/:id', detallecompracontroller_1.detallecompracontroller.eliminarDetalleCompra);
    }
}
const detallecompraroutes = new DetalleCompraRoutes();
exports.default = detallecompraroutes.router;
