# Consumo de SOAP con NODE JS y EXPRESS

_Es un consumo de los servicios https://ws.footballpool.dataaccess.eu/info.wso?WSDL_
_Esto fue lo que se realizó en sí:_
_ENPOINT_
_Consulta a todos los registros sin pasar parámetros al XML: Team Names_
_Consulta a pasando un parámetro al XML: GameScoreResult_
_Consulta a pasando dos parámetro al XML: ResultsAllGamesResult_
_Testing básico con jest_
_Docker composer_

## Iniciemos 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Tener instalado lo siguiente:_
_Node (en mi caso trabajé con la Versión 14)_
_Npm o Yarn_


### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutándose_

_1. Clonar el proyecto_
_2. ingresar a la carperta "cd "nombre del proyecto"_
_3. ejecutar NPM install o YARN install_
_5. Crear archivo .env por fuera de las carpertas_
_6. en el archivo .env creado, colocar los parámetros que se encientran en el env.example_
_7. correr el proyecto con npm start_
_8. descargar los enpoint de postman adjunto en en mismo proyecto_
_9. realizar pruebas_

### Configuración 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes configurar para tener un entorno de desarrollo ejecutandose_

_1. Después de realizar la instalación se explica un poco la configuración_

![Configurar ENV]


_3. importar la collection de postman adjunto en el proyecto_
![Configurar Postman]



_4. Realizar pruebas del consumo de los servicios_
![Pruebas "Response"]


## Construido con 🛠️

NODEJS, EXPRESS, y una que otras librerías que se ven instaladas en el package.json_

## Autores ✒️

* **Diego Perea** 

## Licencia 📄

_Free_

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Da las gracias públicamente 🤓.
