DROP TABLE IF EXISTS user, message, challenge, category, user_challenge, msg_report, chg_report
CASCADE;

CREATE TABLE user
(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL,
    user_since TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE message
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES user(id),
    body VARCHAR(250) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

CREATE TABLE challenge
(
    id BIGSERIAL PRIMARY KEY,
    category_id INT REFERENCES category(id),
    user_id BIGINT REFERENCES user(id),
    title VARCHAR(125) NOT NULL,
    description VARCHAR(1500) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE category
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE user_challenge
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES user(id),
    challenge_id BIG INT REFERENCES challenge(id),
    status VARCHAR(10) DEFAULT 'active'
);

CREATE TABLE msg_report
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES user(id),
    message_id BIGINT REFERENCES message(id),
    body VARCHAR(500) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE chg_report
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES user(id),
    challenge_id BIGINT REFERENCES challenge(id),
    body VARCHAR(500) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO user (username, password, email) VALUES ('Tinky Wiky', 'password123', 'tinky@winky.com'),
('Po', 'password123', 'po@winky.com'),
('Dipsy', 'password123', 'dipsy@winky.com'),
('Lala', 'password123', 'lala@winky.com');

INSERT INTO message (user_id, body) VALUES (1, 'You can do it!'),
(2, 'Great day for a walk!'),
(3, 'Fighting!'),
(4, 'Strut your stuff!');

INSERT INTO category (name) VALUES ('Fitness'), --1
('Nourishment'), --2
('Home'), --3
('Family'), --4
('Learning'), --5
('Mindfulness'), --6
('Social'), --7
('Romance'); --8

INSERT INTO challenge (category_id, user_id, title, description) VALUES (2, NULL, 'Morning Hydration', 'Drink water in the morning to hydrate your body. People don''t realise you sleep for approximately 8 hours without drinking water. Your body is dehydrated in the morning, get a good kickstart to the day!'), 
(5, NULL, 'Node Express', 'Go explore Node modules and Express to help make your coding life easier! Be careful of package rating and user community. Some packages can be risky and not updated!'), 
(1, NULL, 'Lunch walk', 'Have a short 5 minute walk after lunch. It will help with digestion and its always good to get some fresh air!');