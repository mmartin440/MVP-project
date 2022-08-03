DROP TABLE IF EXISTS owner , cars; 

CREATE TABLE owner (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    email TEXT NOT NULL UNIQUE , 
    phone_number TEXT
); 

CREATE TABLE cars (
    id SERIAL,
    model TEXT,
    make TEXT,
    year NUMERIC(4,0),
    miles TEXT, 
    description TEXT, 
    price MONEY,
    owner_id INTEGER, 
    FOREIGN KEY(owner_id) REFERENCES owner(id) ON DELETE CASCADE 
); 

INSERT INTo owner (name, email, phone_number) VALUES ('Becky', '33becky@gmail.com', '233-564-1334'); 
INSERT INTo owner (name, email, phone_number) VALUES ('charles', 'charlesiscool@gmail.com', '543-356-2342'); 
INSERT INTo owner (name, email, phone_number) VALUES ('John', 'john2244@gmail.com', '234-673-2032'); 

INSERT INTO cars (model, make, year, miles, description, price, owner_id) VALUES ('corolla', 'toyota', 2016, '700 ', 'good condtion',15000, 1);
INSERT INTO cars (model, make, year, miles, description, price, owner_id) VALUES ('civic', 'honda', 2020, '700 ', 'good condtion',20000, 2);
INSERT INTO cars (model, make, year, miles, description, price, owner_id) VALUES ('wagoneer', 'jeep', 2022, '1000 ', 'good condtion',5000, 3);
INSERT INTO cars (model, make, year, miles, description, price, owner_id) VALUES ('ranger', 'ford', 2010, '1700', 'good condtion',1000, 1);
