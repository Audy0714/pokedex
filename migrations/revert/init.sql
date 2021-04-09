-- Revert pokemon:init from pg

BEGIN;

DROP TABLE "type", pokemon, pokemon_type;

DROP DOMAIN posint;

COMMIT;