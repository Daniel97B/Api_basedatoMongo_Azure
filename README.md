# Documentacion Gym Style BACK 🧑🏻‍💻
## Descripcion 📃:
_API que tendra toda la gestion logica o idea de negocio de la actualizacion v2 de la aplicacion del gymStyle._

## Inicializar API 🤯:
Esta API REST esta basada en TypeScript para el tipado estricto y paquetes npm para el proyecto node.

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar la carpeta de distribucion o despliegue del proyecto:
    * tsc -w

 * Para iniciar el servidor de express:
    * modo de desarrollo: npm run dev
    * modo de produccion: npm start

## Estructura de carpetas 📂:
_Una estructura de carpetas simple y entendible para un entorno backend en una API REST_
```
    |_Archivos principales
    |__Controller
        |__Archivos de controladores
    |__Database
        |__Archivo de configuracion DB
    |__Environment
        |__Archivo para el control de las variables de entorno
    |__Helper
        |__Archivos para ayudas (helper)
    |__Interface
        |__Archivos de posibles interfaces de carga o posteo
    |__Middlewares
        |__Archivos para diferrentes validadores (middleware)
    |__Router
        |__Archivos de las diferentes rutas para el control de los endpoints
```
## Configuracion de rutas 📡:
Todas las rutas estan definidas segun el schema a utilizar despues del |/v1/api_gym/user/|.

* URL desarrollo: 
   ```http://localhost/v1/api_gym/user/```

* URL produccion:
    ``` https://gym-style-api.herokuapp.com/v1/api_gym/user/ ```
    
* Documentacion de los servicios endpoint de la API REST:
  ``` https://documenter.getpostman.com/view/14362863/UUxtGWqU ```
## Recomendaciones 👀:
* Leer la documentacion interna de cada archivo para entender el proceso de la API
* Revisar siempre las respuestas del servidor
* Revisar las dependencias del package.json
* Revisar las configuraciones del tsconfig.json
---
Nicolas Duarte | Samuel Cano | Javier Eudoro 🎉
