#Proyecto AngularJS con Spring Boot

Este es un proyecto que combina AngularJS en el frontend con Bootstrap CSS para crear una aplicación web. En el backend, se utiliza Java con Spring Boot. El proyecto también incluye servicios, autenticación basada en tokens, y utiliza RxJS para gestionar las solicitudes asincrónicas.

##Credenciales de uso

Para acceder a la aplicación, puedes utilizar las siguientes credenciales:
`
    Email: yo-programo@correo.com
    Contraseña: 123qwe
`
Asegúrate de usar estas credenciales para iniciar sesión y explorar la funcionalidad de la aplicación.
Despliegue del backend

El backend de la aplicación se encuentra desplegado en Render. Sin embargo, ten en cuenta que debido a la capa gratuita en Render, el servidor no está siempre disponible. 

##Instrucciones de ejecución

Para ejecutar la aplicación en tu entorno local, sigue estos pasos:
Requisitos previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:

    * Node.js
    * Angular CLI
    * Java
   
###Instrucciones

    Clona el repositorio:

    bash

git clone [URL_DEL_REPOSITORIO]

####Navega a la carpeta del proyecto:

bash

cd nombre-del-proyecto

####Instala las dependencias del frontend:
`
npm install
`
####Inicia el servidor frontend:
`
ng serve
`


##Funcionalidades
El portfolio dispone de una página principal donde se puede ver la información que se trae desde el backend. La aplicación tiene función de autenticación y permanencia por token. Una vez dentro, contiene un dashboard que es réplica de la página principal donde se puede realizar operaciones CRUD.
