import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();
const PORT = 8080;

//  Para usar JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Rutas de productos y carritos

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

//  Servidor

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
