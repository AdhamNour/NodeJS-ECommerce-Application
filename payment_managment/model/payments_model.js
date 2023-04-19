import { pool } from '../../db.js'
export const getAllPayments = async () => {
    const { rows } = await pool.query("select * from payments")
    return rows
}

export const getPaymentById = async (id) => {
    const { rows } = await pool.query("select * from payments where id = $1", [id])
    return rows[0]
}

export const createPayments = async (transaction_id, card_number, expiry_date, transactionAmount) => {
    const { rows } = await pool.query("insert into payments(transaction_id,card_number,card_expriry_date,amount) values($1,$2,$3,$4)", [transaction_id, card_number, expiry_date, transactionAmount])
    return true
}

export const updatePayment = async (id,
    transaction_id,
    card_number,
    expiry_date,
    transactionAmount
) => {
    const { rows } = await pool.query("update payments set card_number = $3,card_expriry_date = $4,amount = $5,transaction_id = $2 where id = $1", [
        id,
        transaction_id,
        card_number,
        expiry_date,
        transactionAmount
    ])
    return rows[0]
}

export const deletePayment = async (id) => {
    const { rows } = await pool.query("delete from payments where id = $1", [id])
    return rows[0]
}


