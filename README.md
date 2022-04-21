# Documentacion ScanCam BACK-END 🧑🏻‍💻
## Descripcion 📃:
_API que tendra toda la gestion logica o idea de negocio de la aplicacion ScanCam._

## Inicializar API 🤯:
Esta API REST esta construida en NodeJs y express y como base de datos utilizamos MongoDB, empleando reconocicmiento facial que nos ofrece Microsoft azure y demas librerías para el buen funcionamiento.

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar el servidor de express:
    * modo de desarrollo: npm run dev
    * modo de produccion: npm start

## Estructura de carpetas 📂:
_Una estructura de carpetas simple y entendible para un entorno backend en una API REST_
```
    |_Archivos principales
    |__Config
        |__Archivo de configuracion DB
    |__Controller
        |__Archivos de controladores
    |__Middlewares
        |__Archivos para diferrentes validadores (middleware)
    |__Models
        |__Archivos de modelos de la DB.
    |__Routes
        |__Archivos de las diferentes rutas para el control de los endpoints
    |__Helper
        |__Archivos para ayudas (helper)
    |__Validators
        |__Archivo para el control de las variables de entorno
    
```
## Configuracion de rutas 📡:
Todas las rutas estan definidas segun el schema a utilizar despues del |/api/|.

* URL desarrollo: 
   ```http://localhost:3001/```

* URL produccion:
    ``` https://apiscancam01.herokuapp.com/```
    
* Documentacion de los servicios endpoint de la API REST:
  ``` https://documenter.getpostman.com/view/20115348/UVyn3JrP ```
## Recomendaciones 👀:
* Leer la documentacion interna de cada archivo para entender el proceso de la API
* Revisar siempre las respuestas del servidor
* Revisar las dependencias del package.json
* Revisar las configuraciones
---
Javier Rey| Ivan Barón 🎉
