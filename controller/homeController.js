
let fs = require('fs');
let dbConcesionarias = JSON.parse (fs.readFileSync('./data/concesionarias.json', 'utf-8'))


       const home = {
           index: function(req,res){
             //res.set({'content-type': 'text/plain;charset=utf-8'}); 
             res.write("----Bienvenidos al home----" + '\n');
            res.write ("---------------------------" + '\n')
             res.write('Sucursales' + '\n');
             res.write("----------" +'\n')
             dbConcesionarias.forEach(function(sucursales){
                 res.write("-" + sucursales.sucursal + '\n'  )
                 
             }),
             res.end("---------")
           },
            
    }



       
           
    
            

        
            
           
        
        
        
    
 
       

module.exports = home;
