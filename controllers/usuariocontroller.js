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
exports.usuariocontroller = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos

class UsuarioController {
    mostrarTodosUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query('SELECT * FROM Usuarios');
                res.json(respuesta.rows);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    mostrarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuarioID } = req.params;
            try {
                const respuesta = yield database_1.default.query('SELECT * FROM Usuarios WHERE usuarioID = $1', [usuarioID]);
                if (respuesta.rows.length > 0) {
                    res.json(respuesta.rows[0]);
                } else {
                    res.status(404).json({ 'mensaje': 'Usuario no encontrado' });
                }
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield database_1.default.query("INSERT INTO Usuarios SET ?", [req.body]);
                res.json(resp);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const resp = yield database_1.default.query("UPDATE Usuarios SET ? WHERE usuarioID = $1", [req.body, id]);
                res.json(resp);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const resp = yield database_1.default.query('DELETE FROM Usuarios WHERE usuarioID = $1', [id]);
                res.json(resp);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }

    listarUsuariosRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const resp = yield database_1.default.query('SELECT nombre, rolUsuario FROM Usuarios LEFT JOIN Roles on Usuarios.rolUsuario = Roles.rolID WHERE Usuarios.rolUsuario = $1', [id]);
                res.json(resp.rows);
            } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                res.status(500).json({ 'mensaje': 'Error interno del servidor' });
            }
        });
    }
}

exports.usuariocontroller = new UsuarioController();
