import { getProductById } from "../model/products_model";

export const checkCustomerById = async (req, res, next) => {
    const { id } = req.params;
    const product = await getProductById(id);
    if (product === null) return res.status(404).json({ message: "product not found" });
    res.locals.product = product;
    next();
}