import * as paymentsModel from '../model/payments_model.js'

export const createPayments = async (req,res)=>{
    const result = await paymentsModel.createPayments(req.body)
    res.status(200).json(result)
}
export const getAllPayments = async (req, res)=>{
    const result = await paymentsModel.getAllPayments()
    res.status(200).json(result)
}

export const getPaymentById = async (req, res)=>{
    res.status(200).json(res.locals.payment)
}

export const updatePaymentById = async (req, res)=>{
    const result = await paymentsModel.updatePayment(req.params.id, req.body)
    res.status(200).json(result)
}

export const deletePaymentById = async (req, res)=>{
    const result = await paymentsModel.deletePayment(req.params.id)
    res.status(200).json(result)
}