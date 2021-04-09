-- Verify pokemon:init on pg

BEGIN;

SELECT * FROM pokemon;

SELECT * FROM pokemon_type;

SELECT * FROM "type";

ROLLBACK;
