let fs = require('fs'); //requiero el modulo fs
const autos = require('./autosController');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8')) //parseo el json

const marcas = {
    index: function(req,res){
    res.set({'content-type': 'text/plain;charset=utf-8'});
    res.write('-----Bienvenido,estas son nuestras marcas-----' + '\n');
    res.write('----------------------------------------------' + '\n');
    let lista= []
    dbConcesionarias.forEach(function(sucursal){
        sucursal.autos.forEach(function(auto){
           if (!lista.includes(auto.marca)){
              lista.push (auto.marca)}    
        })
     
      })
         lista.forEach(function(marca){
           res.write("-"+marca + '\n')
    })
         res.end()
    }, 
    id:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let Marcas = req.params.marca
        res.write('Autos ' + Marcas + " en stock")
        dbConcesionarias.forEach(function(sucursal){
            
            sucursal.autos.forEach(function(auto){
                if(auto.marca == Marcas){
                    res.write('\n\n' + auto.marca + '\n' + auto.modelo + '\n' + auto.anio + '\n') 
                }
               })
           })
        res.end()
    },
    



    
}
module.exports = marcas