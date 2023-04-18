# NodeJS E-Commerce Demo REST API

this is Demo form createing REST API for an E-Commerce Application

## Features
The Application supports adding,updating removing any of theses entities
- Customers
- Payments
- Orders
- Carts
- Products

## Technologies Used
- ExpressJS
- NodeJS
- PostgreSQL

## Get Started
- CLone the repo to your machine
- install PostgreSQL
- create nodejs_ecommerce database
- create the following tables

```sql
CREATE TABLE carts(
    id SERIAL NOT NULL,
    customer_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL DEFAULT 1,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    PRIMARY KEY(id),
    CONSTRAINT carts_customer_id_fkey FOREIGN key(customer_id) REFERENCES customer(id),${snap}CONSTRAINT carts_product_id_fkey FOREIGN key(product_id) REFERENCES product(id)
);
```
```sql
CREATE TABLE customer(
    id SERIAL NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    email character varying(255),
    PRIMARY KEY(id)
);
```

```sql
CREATE TABLE orders(
    id SERIAL NOT NULL,
    customer_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    PRIMARY KEY(id),
    CONSTRAINT orders_customer_id_fkey FOREIGN key(customer_id) REFERENCES customer(id),${snap}CONSTRAINT orders_product_id_fkey FOREIGN key(product_id) REFERENCES product(id)
);
```
```sql
CREATE TABLE payments(
    id SERIAL NOT NULL,
    card_number character varying(255),
    cvv character(3),
    expiration_date character(5),
    customer_id integer,
    PRIMARY KEY(id),
    CONSTRAINT payments_customer_id_fkey FOREIGN key(customer_id) REFERENCES customer(id)
);
```
```sql
CREATE TABLE product(
    id SERIAL NOT NULL,
    create_time date,
    name character varying(255),
    price integer,
    PRIMARY KEY(id)
);
```

then run the following command
```shell
npm start
```