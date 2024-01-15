// Exportar Router de Express
import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'
import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';
// Crerar una instancia de Router()
const router = Router()

// Importar los metodos del controlador
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

// Definir las rutas
// Ruta para login
router.post("/login", login);

// Ruta para registro
router.post('/registro',validacionVeterinario,registro)

// Ruta para confirmar token
router.get("/confirmar/:token", confirmEmail);

// Ruta para direccionar a la lista de veterinarios
router.get("/veterinarios", listarVeterinarios);

// Ruta para recuperar el password
router.get("/recuperar-password", recuperarPassword);

// Ruta para enviar el token de la recuperacion del password
router.get("/recuperar-password/:token", comprobarTokenPasword);

// Ruta para crear un nuevo password
router.post("/nuevo-password/:token", nuevoPassword);

// Rutas Privadas

// Ruta para acceder al perfil
router.get("/perfil", verificarAutenticacion,perfil);

// Ruta para actualizar el password
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)

// Ruta para observar el detalle del usuario
router.get("/veterinario/:id", verificarAutenticacion,detalleVeterinario);

// Ruta para actualizar el perfil
router.put("/veterinario/:id", verificarAutenticacion,actualizarPerfil);

// Exportar la variable Router
export default router