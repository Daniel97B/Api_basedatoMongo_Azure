//* declaramos mongoose
const mongoose = require('mongoose');
//* Importamos mongooseDelete 
const mongooseDelete = require("mongoose-delete")
//? declaramos estructura 
const RegistroScheme = new mongoose.Schema(
    //? declaramos estructura de la tabla
    {
        //? establecemos cada uno de los atributos que utilizaremos 
        name: {
            type: String
        },
        apellido: {
            type: String
        },
        documento: {
            type: Number
        },
        //? establecemos que email es string y unique con el fin de que no se repita
        email: {
            type: String,
            },
        //? establecmos los roles y definimos que cuando se cree un usser aparezca por defecto Invitado
        role: {
            type: ['aprenidz', 'funcionario', 'gestor', 'seguridad', 'invitado'],
            default: 'invitado',
        },
        confirmacion:{
            type:Boolean
        },
        imgid:{
            type: mongoose.Types.ObjectId
        }


    },
    //? Registramos creacion y actualizacion
    {
        timestamps: true,
        versionKey: false
    }
);

/**
 * Implementar metodo propio  con  relacion a storage
 */

//?creamos metodo 
RegistroScheme.statics.findAllData = function(){
    const joinData = this.aggregate ([
        {
            $lookup: {
                from:"storages",
                localField:"imgid",
                foreignField:"_id",
                as:"RgEntrada",
                
            }
        },
        {
            $unwind:"$RgEntrada"
        }

    
    ])
    return joinData
};
RegistroScheme.statics.findOneData = function(id){
    const joinData = this.aggregate ([
        {
            $match:{
                _id:mongoose.Types.ObjectId(id)
            }
        },
        {
        // Creamos una realcion en la cual regsitro se relacion con el id 
        $lookup:{
            from:"storages",
            // viscamos campo a relacionar
            localField:"imgid",
            // Detemonamos un id
            foreignField:"_id",
            // Creamos un alias
            as:"RgEntrada"
        },
    },
        {
            $unwind:"$RgEntrada"
        },
        

    ])
    console.log( joinData );
    return joinData
}


//?Utilizamos el esquema de este documento para sobre escribir metodos
RegistroScheme.plugin(mongooseDelete,{ overrideMeethods:"all"});

//! exportamos modelo de mongoose y ENviamos
module.exports = mongoose.model('registro', RegistroScheme);