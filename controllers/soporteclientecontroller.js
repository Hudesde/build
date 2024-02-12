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
exports.soporteclientecontroller = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class SoporteClienteController {
    mostrarConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM SoporteCliente WHERE consultaID = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'SeguimientoPedidos no encontrado' });
        });
    }
    listarSoporteClienteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query('SELECT * FROM SoporteCliente WHERE consultaID = ?', [id]);
            res.json(resp);
            if (resp.length > 0) {
                res.json(resp[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'SeguimientoPedidos no encontrado' });
        });
    }
    //aqui va el crud
    crearSoporteCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const resp = yield database_1.default.query("INSERT INTO SoporteCliente set ?", [req.body]);
            res.json(resp);
            //res.json(null);
        });
    }
    actualizarSoporteCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params);
            console.log(id);
            const resp = yield database_1.default.query("UPDATE SoporteCliente set ? WHERE SoporteCliente = ?", [req.body, id]);
            res.json(resp);
            //res.json(null);
        });
    }
    eliminarSoporteClienteID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM SoporteCliente WHERE SoporteCliente = ${id}`);
            res.json(resp);
        });
    }
}
exports.soporteclientecontroller = new SoporteClienteController();
