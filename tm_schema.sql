create table if not exists roles (
  id serial not null primary key,
  label varchar(50) not null
);

create table if not exists users (
  id serial not null primary key,
  email varchar(255) not null,
  password varchar(255) not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  role_id smallint not null,
  foreign key (role_id) references roles(id)
);

create table if not exists teams (
  id serial not null primary key,
  name varchar(255) not null,
  manager_id serial not null,
  foreign key (manager_id) references users(id)
);

create table member_of (
  team_id serial not null,
  user_id serial not null,
  primary key (team_id, user_id),
  foreign key (team_id) references teams(id) on delete cascade,
  foreign key (user_id) references users(id) on delete cascade
);

create table if not exists working_times (
  user_id serial not null,
  id serial not null,
  arrival timestamp not null,
  departure timestamp,
  primary key (user_id, id),
  foreign key (user_id) references users(id) on delete cascade
);

create table if not exists work_periods (
  team_id serial not null,
  user_id serial not null,
  arrival timestamp not null,
  departure timestamp not null,
  primary key (team_id, user_id, arrival, departure),
  foreign key (team_id) references member_of(team_id) on delete cascade,
  foreign key (user_id) references member_of(user_id) on delete cascade
);

insert into roles (label) values
('Employee'),
('Manager'),
('Administrator');
create extension pgcrypto;
insert into users (email, password, first_name, last_name, role_id) values ('admin@admin.com', crypt('admin', gen_salt('bf')), 'John', 'Doe', 3);