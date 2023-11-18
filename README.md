# La Tienda del Vinilo

<p> Proyecto para tienda virtual, pagina web para venta de articulos musicales, especializada en vinilos </p>

<p>La aplicacion consistira en la creacion de un e-commerce online</p>

### Requerimientos:

- Vue3
- NodeJs 18 LTS
- Servidor en MongoDB
- npm

### Instalacion

- Al momento de clonar el repositorio en la carpeta raiz ejecutar: `npm install`
  - esto decargara las dependencias necesarias para que el programa funcione
 
- Luego ejecutar con: `npm run dev`

Si todo salio correcto, deberia estar en: `localhost:3000`


# Taller express js
 
Carlos: 
- get: products
- get: search by id
- post: add item to cart
- put: edit product
- delete: item from cart

Diferencia con los contratos: 
- listar productos devuelve un campo adicional llamado, "imgUrl"
- search el endpoint que aparece en los contratos para "search" es "/", el endpoint correspondiente es "/products/:id", existen dos endpoint para search ":id", ":name"
- edit product es un POST en vez de PUT. El endpoint no es "/addProduct" es un POST "/products"
- add product el endpoint no es "/cart" es "/users/user/cart/:rut"
- delete product from cart no existe como contrato pero se agrego

Camila:
-get: user wishlist
-get: user previous purchases
-post: add item to wishlist
-put: edit user
-delete: remove item from wishlist

Diferencia con los contratos:
-Endpoints:
GET /wishlist => /users/user/:rut/wishlist
GET /user/:rut/previouspurchases => /users/user/:rut/previouspurchases
POST (no existe) => /users/user/:rut/wishlist
PATCH /admin => PUT /admin/user/:rut/editUser
DELETE (no existe) => /users/user/:rut/wishlist
