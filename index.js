import express from 'express';

import customerRoutes from './customer/routes/customer_routes.js'
import productsCatalogRoute from './products/routes/products_routes.js'
import ordersRoutes from './order_management/router/order_router.js'
import cartsRoutes from './shopping_cart/router/cart_router.js'
import paymentsRoutes from './payment_managment/router/payments_route.js'
import transaction_router from './transaction_management/router/transaction_router.js'
const app = express();
app.use(express.json())

app.use('/custmers', customerRoutes);
app.use('/products', productsCatalogRoute);
app.use('/orders', ordersRoutes);
app.use('/carts', cartsRoutes);
app.use('/payments', paymentsRoutes);
app.use('/transactions',transaction_router)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});