import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: "5432",
  database: "nodejs_ecommerce",
});