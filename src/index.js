const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

// Creamoe el servidor
const app = express();

// Coneectamos a la BD
conectarDB();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Activamos el soporte URL-encoded
app.use(cors())

app.use('/api/productos', require('./routes/producto'))

// Definimos ruta-principal
// app.get('/', (req, res)=>{
//     res.send("Hola mundo")
// })

app.listen(4000,()=>{
    console.log('Listen on port 4000')
})


