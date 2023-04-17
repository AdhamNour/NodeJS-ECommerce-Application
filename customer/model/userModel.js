import { pool } from "../../db.js";

export const createCustomer =async (newCustomer)=>{
    const {firstName, lastName,email} = newCustomer;
    const {rows} = await pool.query("insert into customer (first_name, last_name, email) values ($1,$2,$3)",[firstName,lastName,email]);
    return rows[0];
}

export const getAllCustomers =async ()=>{
    const {rows} = await pool.query("select * from customer");
    return rows;
}

export const getCustomerById =async (id)=>{
    const {rows} = await pool.query("select * from customer where id=$1",[id]);
    if(rows.length===0)
    {
        return null;
    }
    return rows[0];
}

export const updateCustomer =async (id,newCustomer)=>{
    const {firstName, lastName,email} = newCustomer;
    console.log(firstName, lastName,email);
    const {rows} = await pool.query("update customer set first_name=$1, last_name=$2, email=$3 where id=$4",[firstName,lastName,email,id]);
    return rows[0];
}

export const deleteCustomer =async (id)=>{
    const {rows} = await pool.query("delete from customer where id=$1",[id]);
    return rows[0];
}

