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