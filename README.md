# NodeJS E-Commerce Demo REST API

this is Modular Application that provides  REST API for an E-Commerce 

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
    transaction_id integer NOT NULL,
    card_number character(16) NOT NULL,
    card_expriry_date date NOT NULL,
    status character varying(255),
    amount numeric NOT NULL,
    description character varying(255),
    created_on date NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    CONSTRAINT payments_transaction_id_fkey FOREIGN key(transaction_id) REFERENCES transactions(id)
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
```sql
CREATE TABLE transactions(
    id SERIAL NOT NULL,
    description character varying(255),
    created_on date NOT NULL DEFAULT now(),
    amount integer NOT NULL,
    order_id integer NOT NULL,
    payment_method character varying(255) NOT NULL,
    status character varying(255),
    PRIMARY KEY(id),
    CONSTRAINT transactions_order_id_fkey FOREIGN key(order_id) REFERENCES orders(id)
);
```

then run the following command
```shell
npm start
```