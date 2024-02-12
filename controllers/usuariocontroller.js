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
    /*public async existeUsuario(req: Request, res: Response): Promise <void>
    {
        const {correo,password} = req.params;
        let consulta="SELECT contraseniaUsuario FROM Usuarios WHERE correo =
        '"+correo+"'";
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0)
        {
        bcrypt.compare(password, respuesta[0].password, (err, resEncriptar)
        
        =>
        
        {
        res.json(resEncriptar);
        return;
    })
    }
    else
    res.json(false);
    }-->*/
    mostrarTodosUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("YA ESTAMOS AQUI");
            const respuesta = yield database_1.default.query('SELECT * FROM Usuarios');
            res.json(respuesta);
        });
    }
    mostrarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuarioID } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM Usuarios WHERE usuarioID = ?', [usuarioID]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Usuario no encontrado' });
        });
    }
    //aqui va el crud
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const resp = yield database_1.default.query("INSERT INTO Usuarios set ?", [req.body]);
            res.json(resp);
            //res.json(null);
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params);
            console.log(id);
            const resp = yield database_1.default.query("UPDATE Usuarios set ? WHERE usuarioID = ?", [req.body, id]);
            res.json(resp);
            //res.json(null);
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM Usuarios WHERE usuarioID = ${id}`);
            res.json(resp);
        });
    }
    listarUsuariosRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`SELECT nombre, rolUsuario FROM  Usuarios LEFT JOIN Roles on Usuarios.rolUsuario = Roles.rolID WHERE Usuarios.rolUsuario = ${id};`);
            res.json(resp);
            //if(resp.length>0){
            //    res.json(resp);
            //    return ;
            //}
            //res.status(404).json({'mensaje': 'No hay usuarios en ese rol'});
        });
    }
}
exports.usuariocontroller = new UsuarioController();
