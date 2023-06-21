-- create a table
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name varchar(10),
  gender varchar(2),
  course varchar(5)
);
-- insert some values
INSERT INTO students VALUES (1, 'Ryan', 'M','cse');
INSERT INTO students VALUES (2, 'Joanna', 'F','ece');
insert into students VALUES (3,'Ruth','F','eee');
insert into students VALUES (4,'Raj','M','cse');
insert into students VALUES (5,'Saran','M','eee');
insert into students VALUES (6,'prethi','f','it');

CREATE table prof(
name varchar(20),
course varchar(5)
);

insert into prof VALUES('kannan','eee');
insert into prof VALUES('KR','ece');
insert into prof VALUES('Subha','cse');
insert into prof values('karthi','it');

select*from prof;

select name from prof;

select name from prof where course ='ece';

select "-----AGGREGATE function-----" as statements;

select count(*) from students;

select count(course='cse') from students;

select avg(name) from prof;

select max(id) from students;

select "------Sorting------" as statements;

select name,course from students order by name asc,course desc;

select name from prof order by name desc;

select id,gender from students order by id asc,gender desc;

select "=-------JOINS------=" as statements;

select course from students inner join prof on students.course=prof.course;

select course from students left join prof on students.course=prof.course;

select course from students cross join prof;