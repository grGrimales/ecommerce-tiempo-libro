# Ecommerce Tiempo Libro

### _Tienda Online de libros, creado por Grediana Rojas_

## Contenido

La finalidad de este ecommerce es generar una orden de compra. Utiliza Firebase y como base de datos firestore. Este proyecto tiene varias ramas de acuerdo a cada componente, todos los cambios se subieron a la rama principal master.

Creado con:

- JSX
- SAAS
- FIREBASE

## Demo

Si deseas ver una demostración de este proyecto, puedes visitar: [Tiempo Libro](https://grgrimales.github.io/ecommerce-tiempo-libro/)

## Como clonar

Solo necesitas ejecutar el siguiente comando:

```sh
git clone https://github.com/grGrimales/ecommerce-tiempo-libro.git
```

## Iniciar proyecto

requiere [Node.js](https://nodejs.org/) v10+ para ejecutarse.

Instale las dependencias e inicie el servidor.

```sh
npm i
npm start
```

## Components

> Esta conformado por los siguientes:

- **ItemCount:** - Su función es añadir productos al carrito. Recibe por props tres parametros el valor inicial, el stock y la función para añadir al carrito. Cuenta con dos funciones la de incement y la de decrement te permite aumentar o disminuir la cantidad de productos a añadir. Este componente es llamado en ItemDetail.
- **ItemListContainer:** Su función es mostrar el listado de productos. Recibe por props un parametro greeting para mostrar como titulo. En el se realiza el llamado a la función para mostrar los productos a traves del hook useAsync en el cual le pasamos el state setLoading para indicar si se esta cargando los productos; la función getProducts que recibe como argumento la categoria que selecciona el usuario en el menu despegable del navbar; el tercer argumento es el state donde guardaremos la respuesta de la promesa setProduct, el siguiente es la función para el catch y por útimo la dependencia categoryID.
- **ItemList:** Sun función es recorrer el listado de producto para mostrarlo; recibe por props los productos: products. Este componente es llamado en ItemListContainer.
- **Item:** Nos muestra cada producto a traves de un card; recibe por props: name, img, id, price. Este componente es llamado en ItemList.
- **ItemDetailContainer:** Su función es motrar el detalle del producto seleccionado por el usuario al hacer click en ver detalles. Realiza el llamado a la función getProductById que recibe por parametro el id del producto seleccionado, tomado a traves del useParams().
- **ItemDetail:** Su función es crear el cart con la descripcion del producto selecionado en ver Detalles. Recibe por props el productId, contiene la función handleOnAdd la cual añade el producto al carrito. Este componente es llamado en ItemDetailContainer.
- **Cart:** Nos muestra los producto agregados al carrito en caso de estar vacío el carrito mustra un mensaje indicando ello. A traves del context hacemos el llamado a diferentes varibales y funciones:
  - cart: Array con los productos agregados.
  - removeItem: Función para eliminar un producto.
  - total: State que almacena el monto total a pagar por los productos.
  - clear: Función que elimina todos los productos del carrito.
  - decrementUnits: Función para decrementar la cantidad de productos.
  - incrementUnits: Función para incrementar la cantidad de productos.
- **CartWidget:** Muestra el icon del carrito de compra y muestra la cantidad de productos agregados en total al carrito a traves de count tomado del context. Este componente es llamado en el Navbar.
- **OrdenService:** Su función es mostrar un formulario y un resumen de los productos para generar su orden de compra. Para el formulario se hace uso del hook useForm que nos premite extraer el value de los input ademas nos permite hacer un reset de los mismos. Se valida los campos del formulario a traves de los states setMessage y setError. Para generar la orden de comprar llamamos a la función createOrder verifica en la base de datos todos los productos que coincida con los del carrito por su Id y guardamos en la variable prodQuantity la propiedad quantity luego hace un batch y verifica si existe stock de cada producto añadido al carrito, una vez que hace la comprobación actualiza el stock de cada producto y genera la orden; la misma se muestra a traves de component **GeneratedOrden** caso contrario si algún producto esta fuera de stock muestra un error indicando cual producto se encuentra sin stock a traves del componente **ErrorOutOfStock**.

## Vista previa
