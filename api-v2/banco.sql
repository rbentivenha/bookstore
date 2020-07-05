create table address (
	postal_code TEXT PRIMARY KEY,
	street_name TEXT,
	street_num TEXT,
	city TEXT
);

create table users (
	cpf TEXT PRIMARY KEY,
	fname TEXT,
	lname TEXT,
	email TEXT,
	creation_date TIMESTAMPTZ DEFAULT Now(),
	bdate DATE,
	phone TEXT,
	postal_code TEXT CONSTRAINT address_fk REFERENCES ADDRESS (postal_code),
	user_type TEXT
);

create table employee (
	ucpf TEXT CONSTRAINT employee_fk REFERENCES USERS (cpf),
	salary NUMERIC,
	pis TEXT PRIMARY KEY
);

create table extra_hours (
	epis TEXT CONSTRAINT extra_hours_fk REFERENCES employee (pis),
	date DATE NOT NULL,
	amount NUMERIC NOT NULL
);

create table products (
	id SERIAL PRIMARY KEY,
	regid INTEGER CONSTRAINT products_reg_fk REFERENCES item_reg (id),
	price NUMERIC NOT NULL,
	title TEXT NOT NULL,
	descrip TEXT
);

create table sale (
	id SERIAL PRIMARY KEY,
	pid INTEGER CONSTRAINT sale_product_fk REFERENCES products (id),
	ucpf TEXT CONSTRAINT sale_client_fk REFERENCES users (cpf),
	epis TEXT CONSTRAINT sale_empl_fk REFERENCES employee (pis)
);

create table item_reg (
	id SERIAL PRIMARY KEY,
	epis TEXT CONSTRAINT ir_empl_fk REFERENCES employee (pis),
	regdate TIMESTAMPTZ DEFAULT Now()
);

create table items_sale (
	said INTEGER CONSTRAINT is_sale_fk REFERENCES sale (id),
	pid INTEGER CONSTRAINT is_product_fk REFERENCES products (id),
	saledate TIMESTAMPTZ DEFAULT Now()
);

insert into address (postal_code, street_name, street_num, city)
values ('18600000', 'Rua Teste 01', '45', 'Botucatu');
insert into address (postal_code, street_name, street_num, city)
values ('17000000', 'Rua Teste 02', '45', 'Bauru');

insert into users (cpf, fname, lname, email, bdate, phone, postal_code, user_type)
values ('u000', 'Raquel', 'da Silva', 'Teste@email', '1990-12-29', '1400000000', '18600000', 'ADMIN');
insert into users (cpf, fname, lname, email, bdate, phone, postal_code, user_type)
values ('u001', 'Rubens', 'Gomez', 'Teste@email', '1990-12-29', '1400000000', '18600000', 'CLIENT');


insert into employee (uid, salary, pis)
values ('u000', 2000, '12345678');
insert into extra_hours (uid, date, amount)
values ('u000', '2020-05-12', 5.2);

insert into products (price, title, descrip)
values (35.2, 'Livro teste', 'Livro muito lido');
insert into products (price, title, descrip)
values (42.9, 'Produto teste', 'Tesoura');

insert into sale (pid, ucpf, epis)
values (2, 'u001', '12345678');

insert into item_reg (epis, regdate)
values ('12345678', Now())

insert into items_sale (epis, pid, saledate)
values ('12345678', 2, Now())

