"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soporteclientecontroller_1 = require("../controllers/soporteclientecontroller");
class SoporteClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarConsulta/:id', soporteclientecontroller_1.soporteclientecontroller.mostrarConsulta);
        this.router.get('/listarSoporteClienteUsuario/:id', soporteclientecontroller_1.soporteclientecontroller.listarSoporteClienteUsuario);
        this.router.get('/crearSoporteCliente', soporteclientecontroller_1.soporteclientecontroller.crearSoporteCliente);
        this.router.get('/actualizarSoporteCliente/:id', soporteclientecontroller_1.soporteclientecontroller.actualizarSoporteCliente);
        this.router.get('/eliminarSoporteCliente/:id', soporteclientecontroller_1.soporteclientecontroller.eliminarSoporteClienteID);
    }
}
const soporteclienteroutes = new SoporteClienteRoutes();
exports.default = soporteclienteroutes.router;
