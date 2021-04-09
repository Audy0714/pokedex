-- Revert pokemon:data from pg

BEGIN;

TRUNCATE pokemon_type, "type", pokemon;

COMMIT;
