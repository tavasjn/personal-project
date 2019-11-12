-- select *
-- from users_dogs ud
-- join users u on ud.user_id = u.user_id; 

insert into users_dogs (
    user_id,
    dogs_id
) values (
    $1,
    $2
);