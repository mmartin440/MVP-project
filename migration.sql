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