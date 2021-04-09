-- Deploy pokemon:init to pg

BEGIN;

-- CREATE DOMAIN
CREATE DOMAIN posint AS int CHECK (VALUE > 0);

-- CREATE TABLE POKEMON
CREATE TABLE pokemon (
    id int NOT NULL,
    "name" text NOT NULL,
    pv posint NOT NULL,
    attaque posint NOT NULL,
    defense posint NOT NULL,
    attaque_spe posint NOT NULL,
    defense_spe posint NOT NULL,
    vitesse posint NOT NULL,
    numero posint NOT NULL
);

-- CREATE TABLE TYPE
CREATE TABLE "type" (
    id int NOT NULL,
    "name" text NOT NULL,
    color text NOT NULL
);

-- CREATE TABLE POKEMON_TYPE
CREATE TABLE pokemon_type (
    id int NOT NULL,
    pokemon_numero posint NOT NULL,
    "type_id" posint NOT NULL
);

COMMIT;
