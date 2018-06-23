DROP DATABASE IF EXISTS ebridge;
CREATE DATABASE ebridge;

\c ebridge;

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    firstname varchar NOT NULL,
    lastname varchar NOT NULL,
    email varchar NOT NULL,
    role varchar check (role in ('PHARM', 'COS', 'ADMIN'))
);

INSERT INTO users (
    firstname,
    lastname,
    email,
    role
) VALUES (
    'yevgeny',
    'bulochnik',
    'yevgeny.bulochnik@gmail.com',
    'ADMIN'
);

CREATE TABLE IF NOT EXISTS menu_items (
    id serial PRIMARY KEY,
    link varchar NOT NULL,
    link_path varchar NOT NULL
);

INSERT INTO menu_items (
    link,
    link_path
) VALUES (
    'Bridge Designer',
    '/bridgedesigner'
), (
    'Analytics',
    '/analytics'
);
