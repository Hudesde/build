"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compracontroller_1 = require("../controllers/compracontroller");
class CompraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearCompra', compracontroller_1.compracontroller.crearCompra);
        this.router.get('/mostrarComprasFecha/:id', compracontroller_1.compracontroller.mostrarComprasFecha);
        this.router.get('/mostrarComprasUserID/:id', compracontroller_1.compracontroller.mostrarComprasUserID);
        this.router.get('/mostrarCompra/:id', compracontroller_1.compracontroller.mostrarCompra);
        this.router.delete('/eliminarCompra/:id'), compracontroller_1.compracontroller.eliminarCompra;
    }
}
const compraroutes = new CompraRoutes();
exports.default = compraroutes.router;
