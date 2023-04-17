import express from 'express';

import customerRoutes from './customer/routes/customer_routes.js'
import productsCatalogRoute from './products/routes/products_routes.js'
const app = express();
app.use(express.json())

app.use('/custmers', customerRoutes);
app.use('/products', productsCatalogRoute);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});