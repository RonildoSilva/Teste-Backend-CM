-- DROP DATABASE company_control_api;

-- CREATE DATABASE company_control_api;

CREATE TABLE IF NOT EXISTS companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR  NOT NULL
);

INSERT INTO companies (name) VALUES ('Warner Bros');
INSERT INTO companies (name) VALUES ('Sony Pictures Motion Picture Group');
INSERT INTO companies (name) VALUES ('Walt Disney Studios');
INSERT INTO companies (name) VALUES ('Universal Pictures');
INSERT INTO companies (name) VALUES ('20th Century Fox');
INSERT INTO companies (name) VALUES ('Paramount Pictures');
INSERT INTO companies (name) VALUES ('Lionsgate Films');
INSERT INTO companies (name) VALUES ('The Weinstein Company');
INSERT INTO companies (name) VALUES ('Metro-Goldwyn-Mayer Studios');
INSERT INTO companies (name) VALUES ('DreamWorks Pictures');

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR  NOT NULL,
    company_id INTEGER  NOT NULL
);

ALTER TABLE products
	ADD FOREIGN KEY (company_id) REFERENCES companies(id);

INSERT INTO products (name, company_id) VALUES ('Harry Potter e as Relíquias da Morte - Parte 2', 1);
INSERT INTO products (name, company_id) VALUES ('O Senhor dos Anéis: O Retorno do Rei', 1);
INSERT INTO products (name, company_id) VALUES ('Batman: O Cavaleiro das Trevas Ressurge', 1);
INSERT INTO products (name, company_id) VALUES ('O Hobbit: Uma Jornada Inesperada', 1);

INSERT INTO products (name, company_id) VALUES ('Jumanji: Welcome to the Jungle', 2);
INSERT INTO products (name, company_id) VALUES ('Spider-Man', 2);
INSERT INTO products (name, company_id) VALUES ('Spider-Man: Far From Home', 2);

INSERT INTO products (name, company_id) VALUES ('MEET THE ROBINSONS', 3);
INSERT INTO products (name, company_id) VALUES ('THE SWORD IN THE STONE', 3);
INSERT INTO products (name, company_id) VALUES ('MEET THE ROBINSONS', 3);
INSERT INTO products (name, company_id) VALUES ('TREASURE PLANET', 3);

INSERT INTO products (name, company_id) VALUES ('Scarface', 4);
INSERT INTO products (name, company_id) VALUES ('Army Of Darkness', 4);
INSERT INTO products (name, company_id) VALUES ('17 TOKIA Mockingbird', 4);
INSERT INTO products (name, company_id) VALUES ('American Pie', 4);
INSERT INTO products (name, company_id) VALUES ('Furious 7', 4);

INSERT INTO products (name, company_id) VALUES ('ttt', 5);
INSERT INTO products (name, company_id) VALUES ('ttt', 6);
INSERT INTO products (name, company_id) VALUES ('ttt', 7);
INSERT INTO products (name, company_id) VALUES ('ttt', 8);
INSERT INTO products (name, company_id) VALUES ('ttt', 9);
INSERT INTO products (name, company_id) VALUES ('ttt', 10);
