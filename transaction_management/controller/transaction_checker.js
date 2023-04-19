import { pool } from "../../db.js";
import * as transactionModel from '../model/transactions_model.js';


export const checkOrderId = async (req, res, next) => {
    const { order_id } = req.body;
    if (!order_id) {
        return res.status(400).json({
            status: 400,
            message: 'order_id is required'
        })
    }
    next();
}

export const checkOrderinDB = async (req, res, next) => {
    const { order_id } = req.body;
    if (order_id) {
        const { rowCount } = await pool.query("select * from orders where id=$1", [order_id]);
        if (rowCount <= 0) {
            return res.status(404).json({
                status: 404,
                message: 'order not found'
            })
        }
    }
    next();
}

export const checkTransactionInDB = async (req, res, next) => {
    const { transaction_id } = req.params;
    if (transaction_id) {
        const transaction= await transactionModel.getTransactionById(transaction_id);
        if (!transaction) {
            return res.status(404).json({
                status: 404,
                message: 'transaction not found'
            })
        }
        res.locals.transaction = transaction;
    }
    next();
}
