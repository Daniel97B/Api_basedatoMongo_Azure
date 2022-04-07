const models ={
    registroModel: require('./nosql/registro'),
    registrosalidaModel: require('./nosql/regsalida'),
    storageModel: require('./nosql/storage'),
    fototempModel: require('./nosql/FotoTemp'),
    userModel: require('./nosql/users'),
    perfilModel: require('./nosql/perfil')
}

//! exportamos rutas
module.exports = models