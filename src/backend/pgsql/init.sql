DROP DATABASE IF EXISTS ebridge;
CREATE DATABASE ebridge;

\c ebridge;

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    firstname varchar NOT NULL,
    lastname varchar NOT NULL,
    email varchar NOT NULL,
    role varchar check (priv in ('PHARM', 'COS', 'ADMIN'))
);

INSERT INTO users (
    firstname,
    lastname,
    email,
    priv
) VALUES (
    'yevgeny',
    'bulochnik',
    'yevgeny.bulochnik@gmail.com',
    'ADMIN'
)
