select *
from users_dogs ud
join users u on ud.user_id = u.user_id
join dogs d on ud.dogs_id = d.dogs_id
where ud.user_id = $1;