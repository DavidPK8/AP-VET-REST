// Importar express
// ESMODULE
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// Importar la variable routerVeterinarios
import routerVeterinarios from './routers/veterinario_routes.js'

// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())


// Variables globales


// Rutas 
app.use('/api',routerVeterinarios)

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


// Exportar la instancia de express por medio de app
export default app