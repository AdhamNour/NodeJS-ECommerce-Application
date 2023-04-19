import * as paymentsModel from '../model/payments_model.js'
import * as transactionsModel from '../../transaction_management/model/transactions_model.js'

export const checkCardNumber = (req, res, next) => {
    const { card_number } = req.body;
    if (!card_number) {
        return res.status(400).json({
            error: 'Card number is required'
        })
    }
    if (card_number.length !== 16) {
        return res.status(400).json({
            error: 'Card number must be 16 digits'
        })
    }
    next();
}

export const checkCCV = (req, res, next) => {
    const { cvv } = req.body;
    if (!cvv) {
        return res.status(400).json({
            error: 'CVV is required'
        })
    }
    if (cvv.length !== 3) {
        return res.status(400).json({
            error: 'CVV must be 3 digits'
        })
    }
    next();
}

export const checkExpiryDate = (req, res, next) => {
    const { card_expiry_date } = req.body;
    if (!card_expiry_date) {
        return res.status(400).json({
            error: 'Expiry date is required'
        })
    }
    next();
}

export const checkTransactionID = (req, res, next) => {
    const { transaction_id } = req.body;
    if (!transaction_id) {
        return res.status(400).json({
            error: 'Customer id is required'
        })
    }
    next();
}
export const checkTransactionIDinDB = async (req, res, next) => {
    const { transaction_id } = req.body;
    if (transaction_id) {
        const transaction = await transactionsModel.getTransactionById(transaction_id)
        if (transaction === null || transaction === undefined)
            return res.status(404).json({ msg: "Transaction not found" })
        else res.locals.transactionAmount = transaction.amount
    }
    next();
}

export const checkPaymentById = async (req, res, next) => {
    const result = await paymentsModel.getPaymentById(req.params.id)
    if (result === null || result === undefined)
        res.status(404).json({ msg: "Payment not found" })
    else res.locals.payment = result
    next();
}