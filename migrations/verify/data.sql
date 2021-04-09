-- Verify pokemon:data on pg

BEGIN;

SELECT id, "name", attaque, defense FROM pokemon;

SELECT "name" FROM "type";

SELECT pokemon_numero FROM pokemon_type;

ROLLBACK;