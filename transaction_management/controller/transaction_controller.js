import * as transactionModel from '../model/transactions_model.js';

export const createTransaction = async (req, res) => {
    const { description, order_id, payment_method } = req.body;
    await transactionModel.createTransaction(order_id,description,payment_method)
    res.status(200).json({ msg: 'transaction created successfully' })
}

export const getAllTransactions = async (req, res) => {
    const transactions = await transactionModel.getAllTransactions();
    res.status(200).json(transactions);
}