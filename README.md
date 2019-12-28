## Instalación

### Setup para desarrollo

1. Una vez descargado el proyecto, abre la carpeta que git creó y ejecuta `npm install` para instalar las dependencias.

### Setup para producción

El servidor cuenta con la configuración para instalarlo en un servidor de
producción. Para preparar el proyecto para esto, se necesita hacer lo siguiente:

1. Ejecuta `npm install` para instalar las dependencias del proyecto.
2. Abre el archivo `next.config.js` que se encuentra en la raíz del proyecto.
3. Cambia el valor de `BACKEND_URL` para adaptarlo al servidor
4. Comenta o elimina las lineas que corresponden al next-config del servidor de
   pruebas y descomenta las lineas correspondientes al servidor de producción.
5. Ejecuta `npm run build` en una linea de comandos para compilar el proyecto
6. Finalmente, ejecuta `npm run start` en la misma linea de comandos para
   que next ejecute los archivos compilados.

## Pruebas

Para ejecutar las pruebas, es necesario haber instalado el proyecto como se menciona en la sección de [Setup para desarrollo](#Setup-para-desarrollo). Una vez hecho esto el siguiente comando prueba la aplicación por completo:

`npm test`

También es posible ejecutar solo pruebas para los archivos que cambiaron recientemente, para esto se utiliza el comando

`npm run test:watch`

## Estructura del proyecto

En la siguiente tabla podrás encontrar cómo están distribuidas las páginas dentro de la aplicación:

| Carpeta           | Descripción                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| src/pages/        | Usada por Next.js para definir las páginas de la aplicación                                                  |
| src/components/   | Aquí se definen los componentes globales de la aplicación (componentes que se utilizan en más de una página) |
| src/utils/        | En esta carpeta se definen funciones o utilidades que pueden utilizarse globalmente en la aplicación         |
| \*/\_\_tests\_\_/ | Pruebas automáticas creadas con React Testing Library y Jest                                                 |
| \*/\_\_mocks\_\_/ | Mocks de módulos creados para usarse con React Testing Library y Jest                                        |

## Herramientas

Aquí se presentan un listado de herramientas que este proyecto utiliza:

### Desarrollo de aplicación

- _[Next Js](https://nextjs.org/)_: Herramienta de desarrollo de React para aplicaciones renderizadas en servidor
- _[Styled Components](https://www.styled-components.com/)_: Usado para estilizar los componentes en el proyecto
- _[Formik](https://jaredpalmer.com/formik/)_ y _[Yup](https://github.com/jquense/yup)_: Manejo y validación de formularios, respectivamente.

### Dev-tools

- _[Husky](https://github.com/typicode/husky)_: Usado para agregar _hooks_ a Git
- _[React-testing-library](https://github.com/testing-library/react-testing-library)_ y _[Jest](https://jestjs.io/)_: Testing automático
- _[Prettier](https://prettier.io/)_: Formatea el código automáticamente para mantenerlo dentro de un estándar.
