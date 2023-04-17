import { pool } from '../../db.js'
export const getAllProducts = async () => {
    const { rows } = await pool.query("select * from products")
    return rows
}

export const getProductById = async (id) => {
    const { rows } = await pool.query("select * from products where id = $1", [id])
    return rows[0]
}

export const createProduct = async (product) => {
    
    const { rows } = await pool.query("insert into product(name,price) values($1,$2)", [product.name, product.price])
    return rows[0]
}

