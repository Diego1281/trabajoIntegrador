const fs = require ('fs')
let sucursales = {
    db: './data/theaters.json',
    titulo : " Sucursales \n",
    leerJSON : function (){
        let theatersJSON = fs.readFileSync (this.db , 'utf-8');
        let theaters = JSON.parse (theatersJSON);
        return theaters
    },
    cantidad : function (){
        return this.leerJSON().total_theaters
    },
    listarSalas : function (){
        let theaters = this.leerJSON();
        let teatros = ( theaters.theaters)
        return teatros
    }

} ;
module.exports = sucursales