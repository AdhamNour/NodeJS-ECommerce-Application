import { pool } from '../../db.js'
export const getAllPayments = async () => {
    const { rows } = await pool.query("select * from payments")
    return rows
}

export const getPaymentById = async (id) => {
    const { rows } = await pool.query("select * from payments where id = $1", [id])
    return rows[0]
}

export const createPayments = async (payment) => {
    const { rows } = await pool.query("insert into payments(card_number,expiration_date,ccv,customer_id) values($1,$2,$3,$4)", [payment.card_number,payment.expiration_date,payment.cvv,payment.customer_id])
    return rows[0]
}

export const updatePayments = async (payment) => {
    const { rows } = await pool.query("update payments set card_number = $1,expiration_date = $2,ccv = $3,customer_id = $4 where id = $5", [payment.card_number,payment.expiration_date,payment.cvv,payment.customer_id,payment.id])
    return rows[0]
}

export const deletePayments = async (id) => {
    const { rows } = await pool.query("delete from payments where id = $1", [id])
    return rows[0]
}

