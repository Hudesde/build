"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.historialcomprascontroller = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos

class HistorialComprasController {
    mostrarHistorialCompras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const respuesta = yield database_1.default.query('SELECT * FROM historialcompras WHERE historialID = $1', [id]);
                if (respuesta.rows.length > 0) {
                    res.json(respuesta.rows[0]);
                } else {
                    res.status(404).json({ 'mensaje': 'HistorialCompras no encontrado' });
                }
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    listarHistorialComprasUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const resp = yield database_1.default.query('SELECT * FROM historialcompras LEFT JOIN usuarios ON historialcompras.usuarioID = usuarios.usuarioID WHERE usuarios.usuarioID = $1', [id]);
                res.json(resp.rows);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    // Aquí va el CRUD
    crearHistorialCompras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield database_1.default.query("INSERT INTO historialcompras SET ?", [req.body]);
                res.json(resp);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    eliminarHistorialCompras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const resp = yield database_1.default.query('DELETE FROM historialcompras WHERE historialID = $1', [id]);
                res.json(resp);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }
}

exports.historialcomprascontroller = new HistorialComprasController();
