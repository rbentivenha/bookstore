create table address (
	postal_code TEXT PRIMARY KEY,
	street_name TEXT,
	street_num TEXT,
	city TEXT
);

create table users (
	cpf TEXT PRIMARY KEY,
	fname TEXT,
	Lname TEXT,
	email TEXT,
	creation_date TIMESTAMPTZ DEFAULT Now(),
	bdate DATE,
	phone TEXT,
	Postal_code TEXT CONSTRAINT employee_fk REFERENCES ADDRESS (postal_code),
	user_type TEXT
);

create table employee (
	user_id TEXT CONSTRAINT employee_fk REFERENCES USERS (cpf),
	salary NUMERIC,
	pis TEXT
);

create table extra_hours (
	user_id TEXT CONSTRAINT extra_hours_fk REFERENCES USERS (cpf),
	date DATE NOT NULL,
	amount NUMERIC NOT NULL
);

create table products (
	id SERIAL PRIMARY KEY,
	Price NUMERIC NOT NULL,
	Title TEXT NOT NULL,
	Descrip TEXT,
	Status INTEGER NOT NULL
);

create table sell (
	id SERIAL PRIMARY KEY,
	product_id INTEGER CONSTRAINT sell_product_fk REFERENCES products (id),
	client_id TEXT CONSTRAINT sell_client_fk REFERENCES users (cpf),
	employee_id TEXT CONSTRAINT sell_empl_fk REFERENCES users (cpf)
);

insert into address (postal_code, street_name, street_num, city)
values ('18600000', 'Rua Teste 01', '45', 'Botucatu');

insert into address (postal_code, street_name, street_num, city)
values ('17000100', 'Rua Teste 02', '45', 'Bauru');

insert into users (cpf, fname, lname, email, bdate, phone, postal_code, user_type)
values ('00000000000', 'Admin', 'Teste 01', 'Teste@email', '1990-12-29', '1400000000', '18600000', 'ADMIN');

insert into users (cpf, fname, lname, email, bdate, phone, postal_code, user_type)
values ('11111111111', 'Cliente', 'Teste 01', 'Teste@email', '1989-12-29', '1400000000', '17000100', 'CLIENT');

insert into employee (user_id, salary, pis)
values ('00000000000', 2000, '12345678');
insert into extra_hours (user_id, date, amount)
values ('00000000000', '2020-05-12', 5.2);

insert into products (price, title, descrip, status)
values (35.2, 'Livro teste', 'Livro muito lido', 0);

insert into products (price, title, descrip, status)
values (42.9, 'Produto teste', 'Tesoura', 1);

insert into sell (product_id, client_id, employee_id)
values (2, '11111111111', '00000000000');
