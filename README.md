# Preguntas de Assesment

## 5 Ceremonias de Scrum mas importantes

--El Sprint Planning al comienzo del Sprint
--Daily Scrums a diario
--Un Sprint Review al final del Sprint para inspeccionar el incremento realizado.
--Y, finalmente, una Retrospectiva para inspeccionar el equipo y levantar mejoras que se apliquen en el siguiente Sprint.
--Adicionalmente se ha incorporado también una reunión de Grooming o Refinement, que sirve para, dentro del Sprint, afinar y aclarar ciertas historias de usuario que pudieron quedar pendientes durante el Sprint Planning.

## ¿Qué son los wireframes?

En el diseño web, un wireframe o un diagrama wireframe es una representación visual en escala de grises de la estructura y funcionalidad de una sola página web o pantalla de aplicación móvil. Los wireframes se usan en las primeras etapas del proceso de desarrollo con el fin de establecer la estructura básica de una página antes de agregar el contenido y el diseño visual, y se puede crear con papel, directamente en HTML/CSS o con aplicaciones de software.

Herramientas que se pueden usar para hacer wireframes:

-- Papel y lapiz (manual)
-- Figma (digital)
-- Ludichart (digital)

## Diferencia entre Var, let y Const

**Let** permite reasignar un valor a una variable, tiene scope limitado, donde se declara, por ejemplo si se declara solo dentro de una funcion, la variable declarada con let tendra scope solo dentro de la funcion.

**Const** permite asignar un solo valor a la variable, y no deja rasignarlo, por lo tanto se puede usar solo una vez dentro de un scope determinado.

**Var** tiene scope global, por ende si lo declaro inclusive dentro de una funcion, y declaro otra variable fuera de esa funcion con su nombre sea con **let** o **const** tendria conflicto. la diferencia entre ellos es que el scope de var es global, mientras que **cons** y **let** son de scope local. Var permite reasignar suva

## 3 Comandos para crear una nueva rama llamada rama-1 son:

-- git checkout -b rama-1
-- git checkout -b rama-1
-- git switch -c rama-1

## Diferencia entre git merge y git rebase:


Merge "mezcla" de cierta manera los commits realizados de la rama que se juntara con el ultimo realizados en la rama principal, mientras que rebase lo "sobrepone" encima de estos.

Merge unifica las ramas, sin eliminarlas lo que crea una confirmacion de fusion conteniendo los historiales de las 2 ramas, por lo tanto al realizarlo, el pryecto quedaria con una estructura de ramas.

Git rebaes unifica las ramas cuando se hace commit eliminando los ya realizados que son innecesarios, dejando el historial de proyecto de manera lineal

## Diferencia entre pull y Pull request:

El comando **git pull** es usado para "halar" o actualizar un repositorio local. con la ultimos commits realizados hechos en un repositorio remoto. **Pull request** es utilizado en un repositorio remoto, para realizar actualizaciones a este, desde una rama subyacente de la principal (sea develop, o main), se utiliza para hacer una solicitud de cambios al equipo de trabajo, especificando los cambios a realizar en el commit realizado, para posteriormente unificar las ramas(merge, rebase), en el caso de github.

## DOM virtual:

DOM es escencialmente una interfaz de plataforma que proporciona un conjunto estandar de objetos para representar documentos HTML, XHTML y XML, en modelo estandar sobre como pueden combinarse dichos objetos, y una interfaz estandar para acceder a ellos y manipularlos. Virtual Dom, vendria siento una representacion del DOM, la cual queda en memoria, y mantiene sincronizada con el DOM real.

Esta es utilizada para la optimizacion del consumo de recursos de procesamiento del lado del cliente, ya que interpreta cambios y calculas cuales en si son necesarios para el renderizado.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
