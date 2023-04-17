import * as userModule from '../model/userModel.js'
export const checkCustomerById = async (req, res, next) => {
    const { id } = req.params;
    const customer = await userModule.getCustomerById(id);
    if (customer === null) return res.status(404).json({ message: "customer not found" });
    res.locals.customer = customer;
    next();
}