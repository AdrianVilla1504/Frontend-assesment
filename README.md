# Assesment Frontend

# 1. Proyecto
Construir una aplicación web la cual consta de tres páginas:

- Home
- Product Detail
- About
- La aplicación debe tener un menú que le permita al usuario navegar entre estas páginas.

### Requerimientos
- Usar Flexbox CSS.
- El proyecto debe tener configurado ESLint y que tus archivos no tengan problemas con estos.
- El código del proyecto debe estar en un repositorio público de tu autoría.
- Bonus: Implementar tu CSS con BEM o módulos de CSS.
 
## Home Page
Esta página tendrá la responsabilidad de listar una serie de productos que debes obtener consumiendo la api de Fake Store API.

Para mostrar estos productos debes crear un componente llamada ProductCard el cual tendrá como propiedades id, title, image las cuales tienen que estar renderizadas. Este componente tiene la particularidad de permitir ir al detalle del producto en otra página (http://localhost:3000/detalle/:id) en la cual se debe renderizar toda la información del producto en detalle de forma visualmente agradable.

{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

Además el componente ProductCard solo debe permitir ir a la página de detalle siempre y cuando un tiempo random configurado de forma aleatoria no se haya vencido. El tiempo restante debe mostrarse en pantalla como una cuenta regresiva para actualizarse cada segundo.

## Ejemplos:

- ProductCard-1: Tiene un tiempo máximo para ir al detalle de 1 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
- ProductCard-2: Tiene un tiempo máximo para ir al detalle de 3 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
- ProductCard-3: Tiene un tiempo máximo para ir al detalle de 1 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.

## Example

Product detail Page
Renderizar la información del producto y permitir navegar a la página de inicio o la del perfil.

## About Page
Debes mostrar en esta pantalla tu información personal:

- Nombre
- Descripción
- Imagen
- Lista de 3 cosas que hayas aprendido en este programa
- Correo
- Link a tu github
