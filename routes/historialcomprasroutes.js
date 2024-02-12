"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historialcomprascontroller_1 = require("../controllers/historialcomprascontroller");
class HistorialComprasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarHistorialCompras/:id', historialcomprascontroller_1.historialcomprascontroller.mostrarHistorialCompras);
        this.router.get('/listarHistorialComprasUsuario/:id', historialcomprascontroller_1.historialcomprascontroller.listarHistorialComprasUsuario);
        this.router.get('/crearHistorialCompras', historialcomprascontroller_1.historialcomprascontroller.crearHistorialCompras);
        this.router.get('/eliminarHistorialCompras/:id', historialcomprascontroller_1.historialcomprascontroller.eliminarHistorialCompras);
    }
}
const historialcomprasroutes = new HistorialComprasRoutes();
exports.default = historialcomprasroutes.router;
