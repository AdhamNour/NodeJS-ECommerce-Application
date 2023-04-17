CREATE TABLE customer(
    id SERIAL NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    email character varying(255),
    PRIMARY KEY(id)
);