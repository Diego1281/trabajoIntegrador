const express = require ('express');

const app = express ();
app.listen(3030, () => console.log('Server running in 3030 port'));


const rutaAutos = require('./routes/autos'); //requiero el modulo main
const rutaHome = require('./routes/home'); //requiero el modulo heroes
const rutaSucursales = require('./routes/sucursales'); 
const rutaMarcas = require('./routes/marcas'); 


app.use('/autos',rutaAutos);
app.use('/',rutaHome);
app.use('/sucursales',rutaSucursales);
app.use('/marcas',rutaMarcas);