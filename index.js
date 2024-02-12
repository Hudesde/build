"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//import { validarToken } from './middleware/auth'
const swagger_json_1 = __importDefault(require("./swagger.json"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const usuarioroutes_1 = __importDefault(require("./routes/usuarioroutes"));
const productoroutes_1 = __importDefault(require("./routes/productoroutes"));
const compraroutes_1 = __importDefault(require("./routes/compraroutes"));
const carritocomprasroutes_1 = __importDefault(require("./routes/carritocomprasroutes"));
const detallecarritoroutes_1 = __importDefault(require("./routes/detallecarritoroutes"));
const detallecompraroutes_1 = __importDefault(require("./routes/detallecompraroutes"));
const historialcomprasroutes_1 = __importDefault(require("./routes/historialcomprasroutes"));
const seguimientopedidosroutes_1 = __importDefault(require("./routes/seguimientopedidosroutes"));
const soporteclienteroutes_1 = __importDefault(require("./routes/soporteclienteroutes"));
const reportesventasroutes_1 = __importDefault(require("./routes/reportesventasroutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); //decodifca las url
    }
    routes() {
        this.app.use('/api/', indexroutes_1.default);
        this.app.use('/api/Usuarios', usuarioroutes_1.default);
        this.app.use('/api/Productos', productoroutes_1.default);
        this.app.use('/api/Compras', compraroutes_1.default);
        this.app.use('/api/CarritoCompras', carritocomprasroutes_1.default);
        this.app.use('/api/DetalleCarrito', detallecarritoroutes_1.default);
        this.app.use('/api/DetalleCompra', detallecompraroutes_1.default);
        this.app.use('/api/HistorialCompras', historialcomprasroutes_1.default);
        this.app.use('/api/ReportesVentas', reportesventasroutes_1.default);
        this.app.use('/api/SeguimientoPedidos', seguimientopedidosroutes_1.default);
        this.app.use('/api/SoporteCliente', soporteclienteroutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
