import { pool } from '../../db.js'
export const getAllProducts = async () => {
    const { rows } = await pool.query("select * from product")
    return rows
}

export const getProductById = async (id) => {
    const { rows } = await pool.query("select * from product where id = $1", [id])
    return rows[0]
}

export const createProduct = async (product) => {
    
    const { rows } = await pool.query("insert into product(name,price) values($1,$2)", [product.name, product.price])
    return rows[0]
}

export const updateProduct = async (id, product) => {
    const { rows } = await pool.query("update product set name = $1, price = $2 where id = $3", [product.name, product.price, id])
    console.log(rows)
    return rows[0]
}

export const deleteProduct = async (id) => {
    const { rows } = await pool.query("delete from product where id = $1", [id])
    return rows[0]
}

