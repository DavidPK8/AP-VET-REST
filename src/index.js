// Importar variable app
import app from './server.js'
// Importar la funcion connecion
import connection from './database.js'

// Haciendo uso de la funcion connection()
connection()

// Inicializar el servidor en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})