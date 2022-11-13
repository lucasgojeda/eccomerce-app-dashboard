## Dashboard App

### _Panel de administración para un e-commerce_

![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1662149689/Portafolio/DashboardApp/1_pak7lt.jpg)

Este proyecto es parte del que al principio fue uno mucho más grande pero decidí dividir su frontend en dos partes para que todo quede mucho más ordenado, facil de mantener y de realizar cambios, el proyecto en si es un e-commerce el cuál consta de las siguientes partes:

- Frontend del usuario, e-commerce en si.
    * React js.
    * Redux toolkit (acciones mediante custom hooks).
- Frontend del administrador/moderador.
    * React js.
    * Redux toolkit (acciones mediante custom hooks).
- Backend.
    * Node js - Express.
    * MongoDb - Mongoose.

#### Roles, funcionabilidades y permisos.

Existen dos roles posibles en el dashboard **Administrador** y **Moderador**.

##### **Administrador**
Este es el rol más importante y el cuál cuenta con las funcionalidades y permisos más relevantes en la aplicación, dichos permisos le sirven para monitorear y controlar las acciones del/los moderador/es.

Para iniciar sesión como administrador una vez que estamos en la pagina de login debemos dar click en el botón de administrador y nos cargará las credenciales en los inputs del formulario, y luego debemos dar click en el botón de iniciar sesión.
![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1668310995/Portafolio/DashboardApp/login_admin_nvjqrt.jpg)

###### Permisos y funcionalidades:
- Crear, editar y enviar productos a la papelera e incluso eliminarlos.
- Crear, editar y enviar usuarios a la papelera e incluso eliminarlos.
    - Cabe destacar que puede asignarle a dichos usuarios su rol.
        - Usuario.
        - Moderador.
        - Administrador.
- Monitorear desde la sección de registros toda acción relacionada a productos y usuarios realizada por si mismo, otro administrador o por moderadores.
- Si un producto es eliminado primero será enviado a la papelera y desde ahí solo el administrador puede eliminarlos permanentemente, lo mismo pasa con los usuarios solo que el administrador es el unico capaz de enviarlos a la papelera en el caso de los usuarios.
- Marcar como enviados los pedidos de los productos por parte de clientes desde la sección de ventas.
- Puede ver las estadisticas de la cantidad de productos, usuarios, ventas, registros.

##### **Moderador**
Este rol es más para un ayudante o colaborador en el dashboard, tiene permisos suficientes para realizar actividades colaborativas de suma importancia pero que en la mayoria de sus casos de cometer un error quedará registrado y si elimina algún producto por error, ese error no será permanente.

Para iniciar sesión como moderador una vez que estamos en la pagina de login debemos dar click en el botón de moderador y nos cargará las credenciales en los inputs del formulario, y luego debemos dar click en el botón de iniciar sesión.
![Image text](https://res.cloudinary.com/the-kings-company/image/upload/v1668310995/Portafolio/DashboardApp/login_mod_h6bm8k.jpg)

###### Permisos y funcionalidades:
- Crear, editar y enviar productos a la papelera.
- Marcar como enviados los pedidos de los productos por parte de clientes desde la sección de ventas.
- Puede ver solo las estadisticas de la cantidad de productos y de ventas en la pagina de inicio.

## Installation



Primero instalamos las dependencias y luego iniciamos el servidor local.

```sh
cd eccomerce-app-dashboard
npm i
npm run dev
```

Cabe destacar que debemos contar con la siguiente variable de entorno configurada.

```sh
VITE_REACT_APP_API_URL= 'Backend URL'
```




