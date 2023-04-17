import * as productModel from '../model/products_model.js'
export const createProduct = async (req,res) => {
    const { product_name, product_price } = req.body;
    const product = await productModel.createProduct({name: product_name, price:product_price })
    res.status(200).json({
        msg: 'Product created successfully', product
    })
}