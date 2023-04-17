import * as userModule from '../model/userModel.js'

export const createCustomer = async (req, res, next) => {
    const { firstName, lastName, Email } = req.body;
    console.log(req.body);
    await userModule.createCustomer(req.body);
    res.status(200).json({
        message: 'Customer created successfully'
    })
}

export const getCustomerById = async (req, res) => {

    res.status(200).json(res.locals.customer)
}
export const deleteCustomerById = async (req, res) => {
    const { id } = req.params;
    await userModule.deleteCustomer(id);
    res.status(200).json({
        message: 'Customer deleted successfully'
    })
}
export const updateCustomerById = async (req, res) => {
    const { id } = req.params;
    await userModule.updateCustomer(id, req.body);
    res.status(200).json({
        message: 'Customer updated successfully'
    })
}

export const checkCustomerById = async (req, res, next) => {
    const { id } = req.params;
    const customer = await userModule.getCustomerById(id);
    if (customer === null) return res.status(404).json({ message: "customer not found" });
    res.locals.customer = customer;
    next();
}

export const getAllCustomers = async (req, res, next) => {
    const customers = await userModule.getAllCustomers();
    res.status(200).json(customers)
}