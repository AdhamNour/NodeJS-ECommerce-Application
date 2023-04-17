import * as cartModel from '../model/carts_model.js'

export const getAllcarts = async (req,res)=>{
    const result = await cartModel.getAllcarts();
    res.status(200).json(result)
}

export const getcartById = async (req,res)=>{
    const result = await cartModel.getcartById(req.params.id);
    res.status(200).json(result)
}

export const createcart = async (req,res)=>{
    const result = await cartModel.createcart(req.body);
    res.status(201).json(result)
}

export const updatecart = async (req,res)=>{
    const result = await cartModel.updatecart(req.params.id,req.body);
    res.status(200).json(result)
}

export const deletecart = async (req,res)=>{
    const result = await cartModel.deletecart(req.params.id);
    res.status(200).json(result)
}
