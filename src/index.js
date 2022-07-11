const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()


const app = express()
app.use(cors())




const nombre = process.env.NOMBRE || 'Anónimo'

app.get('/',(req, res) =>{
    res.status(200).json({
        error:false,
        mensaje:'Estás en la api de ' + nombre,
        puerto:"process.env.PORT"

    })
})




app.listen(process.env.PORT,()=>{
    console.log('Escuchando en el puerto '+ process.env.PORT + ' del ordenador de '+ nombre)
})