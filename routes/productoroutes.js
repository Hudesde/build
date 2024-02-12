"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productocontroller_1 = require("../controllers/productocontroller");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearProducto', productocontroller_1.productoController.crearProducto);
        this.router.put('/actualizarProducto/:id', productocontroller_1.productoController.actualizarProducto);
        this.router.delete('/eliminarProducto/:id', productocontroller_1.productoController.eliminarProducto);
        this.router.get('/mostrarProducto/:id', productocontroller_1.productoController.mostrarProducto);
        this.router.get('/mostrarProductos', productocontroller_1.productoController.mostrarProductos);
    }
}
const productoroutes = new ProductoRoutes();
exports.default = productoroutes.router;
