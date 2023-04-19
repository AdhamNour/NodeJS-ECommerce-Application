import {pool} from '../../db.js'

export const createTransaction = async (orderId,description,payment_method)=>{
    // console.log(`insert into   transactions (description,amount,order_id,payment_method) select '${description}' as description,   sum(orders.quantity * product.price) as amount,   orders.id as order_id,   '${payment_method}' as payment_method from   orders   INNER join product on orders.product_id = product.id where   orders.id = $1 GROUP BY   orders.id;`.toString())
    await  pool.query(`insert into   transactions (description,amount,order_id,payment_method) select '${description}' as description,   sum(orders.quantity * product.price) as amount,   orders.id as order_id,   '${payment_method}' as payment_method from   orders   INNER join product on orders.product_id = product.id where   orders.id = $1 GROUP BY   orders.id;`.toUpperCase().toString(),[orderId])
    return true;
}

export const getAllTransactions = async ()=>{
    const {rows} = await pool.query(`select * from transactions;`)
    return rows
}