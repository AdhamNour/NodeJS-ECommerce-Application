import * as productModel from '../model/products_model.js'

export const createProduct = async (req,res) => {
    const { product_name, product_price } = req.body;
    console.log(product_name,product_price)
    const product = await productModel.createProduct({name: product_name, price:product_price })
    res.status(200).json({
        msg: 'Product created successfully', product
    })
}

export const getAllProducts = async (req,res) => {
    const products = await productModel.getAllProducts()
    res.status(200).json(products)
}

export const getProductById = async (req,res) => {
    res.status(200).json(res.locals.product)
}

export const updateProduct = async (req,res) => {
    const { product_name, product_price } = req.body;
    const product = await productModel.updateProduct(req.params.id, {name: product_name, price:product_price })
    
    res.status(200).json({
        msg: 'Product updated successfully'
    })
}

export const deleteProduct = async (req,res) => {
    const product = await productModel.deleteProduct(req.params.id)
    res.status(200).json({
        msg: 'Product deleted successfully'
    })
}
