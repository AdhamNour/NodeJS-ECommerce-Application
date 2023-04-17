import { pool } from "../../db.js";

export const getAllOrders =async ()=>{
    const {rows} = await pool.query("SELECT * FROM orders");
    return rows;
}

export const getOrderById =async (id)=>{
    const {rows} = await pool.query("SELECT * FROM orders WHERE id = $1",[id]);
    return rows;
}

export const createOrder =async (order)=>{
    const {rows} = await pool.query("INSERT INTO orders(customer_id,product_id,QUANTITY) VALUES($1,$2,$3)",[order.customer_id,order.product_id,order.QUANTITY]);
    return rows;
}

export const updateOrder =async (id,order)=>{
    const {rows} = await pool.query("UPDATE orders SET customer_id=$1,product_id=$2,QUANTITY=$3 WHERE id=$4",[order.customer_id,order.product_id,order.QUANTITY,id]);
    return rows;
}

export const deleteOrder =async (id)=>{
    const {rows} = await pool.query("DELETE FROM orders WHERE id = $1",[id]);
    return rows;
}