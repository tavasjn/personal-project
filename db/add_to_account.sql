select * from users
join users_dogs on users_dogs.user_id = users.user_id
join dogs on dogs.dogs_id = users_dogs.dogs_id
where users.user_id = $1