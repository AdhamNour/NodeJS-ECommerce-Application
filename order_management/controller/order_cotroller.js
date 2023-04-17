import * as orderModel from '../model/orders_model.js'

export const getAllOrders = async (req,res)=>{
    const result = await orderModel.getAllOrders();
    res.status(200).json(result)
}

export const getOrderById = async (req,res)=>{
    const result = await orderModel.getOrderById(req.params.id);
    res.status(200).json(result)
}

export const createOrder = async (req,res)=>{
    const result = await orderModel.createOrder(req.body);
    res.status(201).json(result)
}

export const updateOrder = async (req,res)=>{
    const result = await orderModel.updateOrder(req.params.id,req.body);
    res.status(200).json(result)
}

export const deleteOrder = async (req,res)=>{
    const result = await orderModel.deleteOrder(req.params.id);
    res.status(200).json(result)
}
