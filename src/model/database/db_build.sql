DROP TABLE IF EXISTS users, messages, challenges, categories, user_challenges, msg_report, chg_report
CASCADE;
CREATE TABLE users
(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_since TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE messages
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    body VARCHAR(250) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE challenges
(
    id BIGSERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id),
    user_id BIGINT REFERENCES users(id),
    title VARCHAR(125) NOT NULL,
    description VARCHAR(1500) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE user_challenges
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    challenge_id BIGINT REFERENCES challenges(id),
    status VARCHAR(10) CHECK (status = 'active' OR status = 'complete' OR status = 'abandon')
);
CREATE TABLE msg_report
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    message_id BIGINT REFERENCES messages(id),
    body VARCHAR(500) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE chg_report
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    challenge_id BIGINT REFERENCES challenges(id),
    body VARCHAR(500) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
INSERT INTO users
    (username, password, email)
VALUES
    ('Tinky Winky', '$2b$10$GyfG3Buz.LZ7uF6KsnaQveq.s.gibBhHXYJ8PACpcSzfrCdwn/72S', 'tinky@winky.com'),
    ('Po', '$2b$10$GyfG3Buz.LZ7uF6KsnaQveq.s.gibBhHXYJ8PACpcSzfrCdwn/72S', 'po@winky.com'),
    ('Dipsy', '$2b$10$GyfG3Buz.LZ7uF6KsnaQveq.s.gibBhHXYJ8PACpcSzfrCdwn/72S', 'dipsy@winky.com'),
    ('Lala', '$2b$10$GyfG3Buz.LZ7uF6KsnaQveq.s.gibBhHXYJ8PACpcSzfrCdwn/72S', 'lala@winky.com');

INSERT INTO messages (user_id, body)
VALUES
    (1, 'You can do it!'),
    (2, 'Great day for a walk!'),
    (3, 'Fighting!'),
    (4, 'Strut your stuff!');
INSERT INTO categories
    (name)
VALUES
    ('Fitness'),--1
    ('Nourishment'),--2
    ('Home'),--3
    ('Family'),--4
    ('Learning'),--5
    ('Mindfulness'),--6
    ('Social'),--7
    ('Romance');--8
INSERT INTO challenges
    (category_id, user_id, title, description)
VALUES
    (2, NULL, 'Morning Hydration', 'Drink water in the morning to hydrate your body. People don''t realise you sleep for approximately 8 hours without drinking water. Your body is dehydrated in the morning, get a good kickstart to the day!'),
    (5, NULL, 'Node Express', 'Go explore Node modules and Express to help make your coding life easier! Be careful of package rating and user community. Some packages can be risky and not updated!'),
    (1, NULL, 'Lunch walk', 'Have a short 5 minute walk after lunch. It will help with digestion and its always good to get some fresh air!');
INSERT INTO user_challenges
    (user_id, challenge_id, status)
VALUES
    (1, 1, 'active'),
    (2, 1, 'complete'),
    (1, 2, 'abandon');