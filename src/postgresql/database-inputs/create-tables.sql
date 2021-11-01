CREATE TABLE books (
    id serial PRIMARY kEY,
    title VARCHAR ( 50 ) UNIQUE NOT NULL,
    year INT NOT NULL
);