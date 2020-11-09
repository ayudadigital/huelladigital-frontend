# :sos: Frontend Huella positiva

## :up: Levantando el proyecto

Para que los formularios y las peticiones funcionen correctamente es necesario levantar el back-end. Este paso es opcional.

### :back: Ejecutando el Backend 

Para levantar el backend, son necesarias 3 dependencias globales: [Docker](https://www.docker.com/) (y [docker compose](https://docs.docker.com/compose/install/)), [Java](https://www.java.com/es/) y [Maven para java](https://maven.apache.org/). Con estas dependencias instaladas, se procede a clonar el [repositorio del backend](https://github.com/ayudadigital/huelladigital-backend). 
Lo siguiente será levantar el archivo `docker-compose.yml`, localizado en la ruta `{ruta-backend}/backend/docker/local/docker-compose.yml`. Se levanta con el comando 

```bash
docker-compose up -d
```

Con el soporte de los contenedores, es posible ejecutar el back-end. Para ello, se ejecuta la siguiente instrucción en el directorio `backend` del proyecto.

```bash
mvn clean compile spring-boot:run
```

Para que esto sea posible se debe haber configurado correctamente la variable de entorno `$path`. 

### :rocket: Levantando el front-end.

La única dependencia necesaria para ello es [NodeJS](https://nodejs.org/en/)

Simplemente se ha de ejecutar en este directorio dos instrucciones

```bash
npm install
npm run start
```

Con ello ya estaría disponible la vista en el navegador. :link: http://localhost:3000.

Existen otras uitilidades disponibles para probar y desplegar el código:

#### `npm test`

Ejecuta los tests funcionales con Jest.

#### `npm test:e2e`

Ejecuta los tests end 2 end con Cypress. La configuración de estos tests se encuentra en el directorio `e2e`

#### `npm new:fc`

Crea un nuevo componente funcional en la ruta especificada. La configuración mínima de un `fc` consta de un fichero `.tsx`, el `index.ts` y otro `.scss`.

#### `npm run new:hook`

Crea un *hook* en el directorio `hooks` con el nombre especificado.

#### `npm run storybook`

Se lanza la utilidad `storybook` para testear los componentes React y sus vistas. [Más info](https://storybook.js.org/docs/react/get-started/introduction)

#### `npm run build`

Construye la aplicación para el entorno de producción en el directorio `build`. 

#### `npm run eject`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:e2e`
Launches the cypress with test end to end runner in the interactive watch mode.<br />
See more information about [cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

### `npm run new:fc`

Create a new functional component in the specified path, inside a directory with the specified component name.<br />
You can add the arguments `name` and `path` to not use the interactive cli.

### `npm run new:hook`

Create a new hook abstraction inside `hooks` directory with the specified hook name.<br />
**Remember** to use the prefix `use`.

### `npm run storybook`

Run storybook to display all the .stories.tsx.<br />
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

Si no se está conforme con la configuración de `build`, se puede ejecutar esta orden para eliminar una dependencia del proyecto.