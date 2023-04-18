import { getProductById } from "../model/products_model.js";

export const checkProductById = async (req, res, next) => {
    const { id } = req.params;
    const product = await getProductById(id);
    if (product === null || product === undefined) return res.status(404).json({ message: "product not found" });
    console.log(product)
    res.locals.product = product;
    next();
}