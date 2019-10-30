create table users (
    user_id serial primary key,
    username varchar(100),
    password varchar(350)
);

create table dogs (
    dogs_id serial primary key,
    breed text,
    size text,
    indoor_outdoor boolean,
    hunting boolean,
    playful boolean,
    hypoallergenic boolean,
    fur_type text,
    description text,
    image varchar(350)
);

create table results (
    results_id serial primary key,
    user_id int references users(user_id),
    dogs_id int references dogs(dogs_id),
    dog_id_1 integer,
    dog_id_2 integer,
    dog_id_3 integer
);