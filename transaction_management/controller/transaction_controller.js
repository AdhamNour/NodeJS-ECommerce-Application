import * as transactionModel from '../model/transactions_model.js';

export const createTransaction = async (req, res) => {
    const { description, order_id, payment_method } = req.body;
    await transactionModel.createTransaction(order_id, description, payment_method)
    res.status(200).json({ msg: 'transaction created successfully' })
}

export const getAllTransactions = async (req, res) => {
    const transactions = await transactionModel.getAllTransactions();
    res.status(200).json(transactions);
}

export const updateTransaction = async (req, res) => {
    const { description, order_id } = req.body;
    const { transaction_id } = req.params
    await transactionModel.updateTransaction(transaction_id, order_id, description)
    res.status(200).json({ msg: 'transaction updated successfully' })
}

export const getTransactionById = async (req, res) => {
    res.status(200).json(res.locals.transaction);
}

export const deleteTransaction = async (req, res) => {
    const { transaction_id } = req.params;
    await transactionModel.deleteTransaction(transaction_id);
    res.status(200).json({ msg: 'transaction deleted successfully' })
}