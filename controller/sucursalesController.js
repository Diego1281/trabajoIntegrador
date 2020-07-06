let fs = require('fs'); 
let dbSucursales = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursales = {
     index: function(req,res){
         res.set({'content-type': 'text/plain;charset=utf-8'});
         res.write('Bienvenido,estas son nuestras sucursales' + '\n');
         res.write("----------------------------------------"+'\n')
         dbSucursales.forEach(function(sucursales){
             res.write("-SUCURSAL: "+sucursales.sucursal + '\n');
             res.write("-DIRECCION: "+sucursales.direccion + '\n');
             res.write("-TELEFONO: " +sucursales.telefono + '\n');
             res.write("----------------"+ '\n')
         }),
         res.end()
     },
     detalle:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        let Sucursales = req.params.sucursal;
        dbSucursales.forEach(function(sucursal){
            if(sucursal.sucursal == Sucursales){
                res.write ("---------------------------------------------" + '\n')
                res.write ("Bienvenido a la sucursal: " + sucursal.sucursal + '\n' + "Direccion: " + sucursal.direccion + '\n' + "Telefono: " + sucursal.telefono + '\n\n') 
                res.write ("---------------------------------------------" + '\n')
                res.write("-----CONTAMOS CON ESTAS UNIDDES EN STOCK-----" + '\n')
                res.write ("---------------------------------------------" + '\n\n')
             sucursal.autos.forEach(function(autos){
                 res.write ("Total de unidades disponibles: " + sucursal.autos.length + '\n\n');
                res.write("-MARCA: " + autos.marca + '\n' + "-MODELO: " + autos.modelo + '\n' + "-AÑO: " + autos.anio + '\n' + "-COLOR " + autos.color + '\n')
                res.write("-----" + '\n')            
            })
                }
               }) 
        res.end("Lo siento no lo encontré")
    },



}
module.exports = sucursales