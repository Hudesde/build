"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallecarritocompracontroller_1 = require("../controllers/detallecarritocompracontroller");
class DetalleCarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarDetalleCarrito/:id', detallecarritocompracontroller_1.detallecarritocontroller.mostrarDetalleCarritoUsuario);
        this.router.get('/crearDetalleCarrito', detallecarritocompracontroller_1.detallecarritocontroller.crearDetalleCarrito);
        this.router.get('/actualizarDetalleCarrito/:id', detallecarritocompracontroller_1.detallecarritocontroller.actualizarDetalleCarrito);
        this.router.get('/eliminarDetalleCarrito/:id', detallecarritocompracontroller_1.detallecarritocontroller.actualizarDetalleCarrito);
    }
}
const detallecarritoroutes = new DetalleCarritoRoutes();
exports.default = detallecarritoroutes.router;
