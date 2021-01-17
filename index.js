const express = require('express');
const morgan = require('morgan'); // Sirve para verificar cosas. 
const app = express();
const actores = require('./routes/actores'); //Obtenemos la ruta de actores
require('dotenv').config();


app.use(morgan('dev')); // dev puede cambiar con diferentes 

//midelwars
app.use(express.json());

//Routes
app.use('/api',actores);

app.get('/',(req,res)=>{
    res.send("<h1>Bienvenido a NPM</h1>");
});

app.get('/estudiante',(req,res)=>{
    let estudiantes = [];
    estudiantes.push({nombre:"Samuel",apellido:"Villegas"});
    res.json(estudiantes);
});

//Variables de entorno
app.set('port',process.env.PORT || 5000); // Si existe PORT sino 5000 Asignar variable

app.listen(app.get('port'),() =>{
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`);
});