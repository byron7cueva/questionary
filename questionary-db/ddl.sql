CREATE USER "qs_admin"
WITH PASSWORD 'md5456b7016a916a4b178dd72b947c152b7';

/* Create the database */
CREATE DATABASE "questionary"
WITH OWNER "qs_admin"
ENCODING "UTF8"
LC_COLLATE = "en_US.UTF-8"
LC_CTYPE = "en_US.UTF-8";

/* Create sequences */
CREATE SEQUENCE IF NOT EXISTS course_course_id_seq
START 1
MINVALUE 1;

CREATE SEQUENCE IF NOT EXISTS question_question_id_seq
START 1
MINVALUE 1;

/* Create tables */
CREATE TABLE IF NOT EXISTS course (
  course_id INTEGER NOT NULL DEFAULT nextval('course_course_id_seq'),
  name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS question (
  question_id INTEGER NOT NULL DEFAULT nextval('question_question_id_seq'),
  course_id INTEGER NOT NULL,
  question VARCHAR(400) NOT NULL,
  answere TEXT NOT NULL
);

/* Primary keys */
ALTER TABLE course ADD CONSTRAINT pk_course PRIMARY KEY (course_id);
ALTER TABLE question ADD CONSTRAINT pk_question PRIMARY KEY (question_id);

/* Foreign keys */
ALTER TABLE question ADD CONSTRAINT fk_course_question FOREIGN KEY (course_id) REFERENCES course(course_id);

/* User Develop */
CREATE USER "qs_develop"
WITH PASSWORD 'md5107d38c2720cc0e505547085796f2725';
ALTER USER qs_develop WITH NOSUPERUSER;

REVOKE CONNECT ON DATABASE questionary FROM PUBLIC;
REVOKE ALL PRIVILEGES ON DATABASE questionary FROM qs_develop;
GRANT CONNECT ON DATABASE questionary TO qs_develop;
GRANT USAGE ON SCHEMA public TO qs_develop;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO qs_develop;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO qs_develop;