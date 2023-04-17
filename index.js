import express from 'express';

import customerRoutes from './customer/routes/customer_routes.js'
const app = express();
app.use(express.json())

app.get('/', (req, res) => { res.json("Hi") })
app.use('/custmers', customerRoutes);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});