"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesventascontroller_1 = require("../controllers/reportesventascontroller");
class ReportesVentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarReportesVentas/:id', reportesventascontroller_1.reportesventascontroller.mostrarReportesVentas);
        this.router.get('/listarReportesVentasFecha/:id', reportesventascontroller_1.reportesventascontroller.listarReportesVentasFecha);
        this.router.get('/crearReportesVentas', reportesventascontroller_1.reportesventascontroller.crearReportesVentas);
        this.router.get('/actualizarReportesVentas/:id', reportesventascontroller_1.reportesventascontroller.actualizarReportesVentas);
        this.router.get('/eliminarReportesVentas/:id', reportesventascontroller_1.reportesventascontroller.eliminarReportesVentas);
    }
}
const reportesventasroutes = new ReportesVentasRoutes();
exports.default = reportesventasroutes.router;
