#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE books (
        id serial PRIMARY kEY,
        title VARCHAR ( 50 ) UNIQUE NOT NULL,
        year INT NOT NULL
    );
    INSERT INTO books(id, title, year)
    VALUES (1, 'Rogerios do mundo', 2001);

    INSERT INTO books(id, title, year)
    VALUES (2, 'Rogerios do mundo2', 2002);

    INSERT INTO books(id, title, year)
    VALUES (3, 'Rogerios do mundo3', 2003);

    INSERT INTO books(id, title, year)
    VALUES (4, 'Rogerios do mundo4', 2004);

    INSERT INTO books(id, title, year)
    VALUES (5, 'Rogerios do mundo5', 2005);
EOSQL