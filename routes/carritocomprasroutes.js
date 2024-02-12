"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritocomprascontroller_1 = require("../controllers/carritocomprascontroller");
class CarritoComprasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCarritoCompras/:id', carritocomprascontroller_1.carritocomprascontroller.mostrarCarritoCompras);
        this.router.post('/crearCarritoCompras', carritocomprascontroller_1.carritocomprascontroller.crearCarritoCompras);
        this.router.put('/actualizarCarritoCompras/:id', carritocomprascontroller_1.carritocomprascontroller.actualizarCarritoCompras);
        this.router.delete('/eliminarCarritoCompras/:id'), carritocomprascontroller_1.carritocomprascontroller.eliminarCarritoCompras;
    }
}
const carritocomprasroutes = new CarritoComprasRoutes();
exports.default = carritocomprasroutes.router;
