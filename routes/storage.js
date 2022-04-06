//* Importamos y guardamos express, router en una variable
const { Router } = require('express');
const express = require('express');

//* Importamos middleware
const uploadMiddleware =require('../utils/handleStorage');
const router = express.Router();
//* Importamos funcion del controlador 
const {getItems, createItems, deleteItems, updateItems, getItem} = require('../controllers/storage');
const { text } = require('express');
//* Importamos validate
const {validatorGetItem} = require ('../validators/registro')

//* Importamos  authMiddleware
const {authMiddleware} = require("../middleware/session");

// * Importamos checkrol
const checkRol = require('../middleware/rol');

//? Mostrar lista de datos 
router.get('/', getItems);

//? Creamos ruta para optener detalle de un dato almacenado en la DB
router.get('/:id',authMiddleware,checkRol(['aprenidz', 'funcionario', 'gestor', 'seguridad', 'invitado']),validatorGetItem,getItem);

//? Creamos ruta para eliminar datos de la base de datos
router.delete('/:id',authMiddleware,checkRol(['aprenidz', 'funcionario', 'gestor', 'seguridad', 'invitado']),validatorGetItem,deleteItems);

//? implementamos ruta de middleware para subir un archivo en una peticionenviar utilizar en caso de se envien varios datos usar multi

// router.post('/',uploadMiddleware.single("FileMy"), createItems);

router.post('/', authMiddleware, checkRol(['aprenidz', 'funcionario', 'gestor', 'seguridad', 'invitado']),uploadMiddleware.single("Myfile"), createItems);



//! exportamos rutas
module.exports = router;