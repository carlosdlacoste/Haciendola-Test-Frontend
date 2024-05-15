# Frontend de la Aplicación de Gestión de Usuarios y Productos

Este es el frontend de una aplicación de gestión de usuarios y productos, desarrollado en ReactJS y Bootstrap. Proporciona una interfaz de usuario para la autenticacion de usuarios y manejo de productos.
## Requisitos

- React.js
- Bootstrap
- react-dom
- react-router-dom


## Instalación

1. Clona este repositorio en tu máquina local:

    [git clone https://github.com/carlosdlacoste/Haciendola-Test-Backend.git](https://github.com/carlosdlacoste/Haciendola-Test-Frontend.git)

2. Instala las dependencias del proyecto:

    npm install

## Configuración de la Base de Datos

1. Crea una base de datos PostgreSQL en tu servidor local o en la nube.

2. Abre el archivo `package.json` y configura los parámetros de conexión a tu backend.

```json
 "proxy": "http://localhost:5000",
 ```

## Ejecución del Servidor

1. Ejecuta el siguiente comando para iniciar el servidor:

    npm run start

    El servidor se ejecutará en http://localhost:3000 por defecto.

## Creacion de Usuarios
1. Debes llenar la tabla Users directamente desde un sercicio como Postman o similar a traves de la siguiente ruta y siguiendo el modelo propuesto de Users en el backend

    http://localhost:5000/api/users

## Autenticación de Usuarios

1. Ingresa las credenciales de tu usuario, esto generará un token y podras usar la app sin problemas en caso contrario no podras acceder a las distintas vistas del frontend

## CRUD Productos

1. Crear Productos

    Accede al hacer click al boton agregar producto y te redirigirá al form correspondiente y una vez creado veras el cambio reflejado en la tabla de productos en la vista Products

2. Leer Productos

    Una vez autenticado el usuario podras ver tu tabla de productos inicial la cual representa la data que proviene del archivo Excel

3. Modificar Producto

    Puedes actualizar el producto al hacer click en el registro de la tabla correspondiente y esto te llevara a una nueva vista con un form que contiene unicamente la informacion de dicho producto. Alli se pueden modificar uno o mas campos y luego al hacer click en el boton Guardar Cambios, dicha informacion se actualiza y te redirige nuevamente a la tabla Productos con la informacion actualizada, ahora aparecera como ultimo registro de la tabla.

4. Eliminar Producto

    Puedes eliminar un producto en la misma vista del formulario de actualizacion, donde encontraras un boton eliminar y al hacer click te redirigira a la tabla productos nuevamente, pero el registro eliminado desaparecerá.

