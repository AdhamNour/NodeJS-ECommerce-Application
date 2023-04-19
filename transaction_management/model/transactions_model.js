import { pool } from '../../db.js'

export const createTransaction = async (orderId, description, payment_method) => {
    // console.log(`insert into   transactions (description,amount,order_id,payment_method) select '${description}' as description,   sum(orders.quantity * product.price) as amount,   orders.id as order_id,   '${payment_method}' as payment_method from   orders   INNER join product on orders.product_id = product.id where   orders.id = $1 GROUP BY   orders.id;`.toString())
    await pool.query(`insert into   transactions (description,amount,order_id,payment_method) select '${description}' as description,   sum(orders.quantity * product.price) as amount,   orders.id as order_id,   '${payment_method}' as payment_method from   orders   INNER join product on orders.product_id = product.id where   orders.id = $1 GROUP BY   orders.id;`.toUpperCase().toString(), [orderId])
    return true;
}

export const getAllTransactions = async () => {
    const { rows } = await pool.query(`select * from transactions;`)
    return rows
}

export const getTransactionById = async (id) => {
    const { rows } = await pool.query(`select * from transactions where id = $1;`, [id])
    return rows[0]
}

export const deleteTransaction = async (id) => {
    await pool.query(`delete from transactions where id = $1;`, [id])
    return true
}

export const updateTransaction = async (transactionId, orderId, description) => {
    const transaction = await getTransactionById(transactionId)
    if (transaction.order_id !== orderId)
        await pool.query('UPDATE   transactions set   order_id = subqury.order_id,   amount = subqury.amount from   (     select       orders.id as order_id,       sum(orders.quantity * product.price) as amount     from       orders       INNER join product on orders.product_id = product.id     where       orders.id = $1     GROUP BY       orders.id   ) subqury where id =$2;'.toUpperCase().toString(), [orderId, transactionId])
    if (description)
        await pool.query('UPDATE   transactions set   description = $1 where id =$2;'.toUpperCase().toString(), [description, transactionId])
    return true;
}