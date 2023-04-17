import { pool } from "../../db.js";

export const getAllcarts =async ()=>{
    const {rows} = await pool.query("SELECT * FROM carts");
    return rows;
}

export const getcartById =async (id)=>{
    const {rows} = await pool.query("SELECT * FROM carts WHERE id = $1",[id]);
    return rows;
}

export const createcart =async (cart)=>{
    const {rows} = await pool.query("INSERT INTO carts(customer_id,product_id,QUANTITY) VALUES($1,$2,$3)",[cart.customer_id,cart.product_id,cart.QUANTITY]);
    return rows;
}

export const updatecart =async (id,cart)=>{
    const {rows} = await pool.query("UPDATE carts SET customer_id=$1,product_id=$2,QUANTITY=$3 WHERE id=$4",[cart.customer_id,cart.product_id,cart.QUANTITY,id]);
    return rows;
}

export const deletecart =async (id)=>{
    const {rows} = await pool.query("DELETE FROM carts WHERE id = $1",[id]);
    return rows;
}