update users
set username = $2
where user_id = $1;

select * from users
where user_id = $1;