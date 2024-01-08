// Importar mongoose
import mongoose from 'mongoose'

// Permitir que solo los campos dentro del Schema  de la base de datos sean almacenados
mongoose.set('strictQuery', true)

// Crear una funcion llamada connection
const connection = async()=>{
    try {
        // Establece la conexion con la base de datos
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        // Presentar la conexion en consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        // Capturar el error en la conexion
        console.log(error);
    }
}

// Exportar la funcion connection
export default  connection