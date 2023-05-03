-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."Autobuses"
(
    "Cód.Bus" serial NOT NULL,
    "Kilometraje" numeric(7, 2) NOT NULL,
    "Matrícula" "char" NOT NULL,
    "Plazas" integer NOT NULL,
    "Modelo" "char" NOT NULL,
    PRIMARY KEY ("Cód.Bus")
);

CREATE TABLE IF NOT EXISTS public."Conductor"
(
    "Cód.Conductor" serial NOT NULL,
    "DNI" "char" NOT NULL,
    "Nombre" character varying(60) NOT NULL,
    "Salario" numeric(6, 2) NOT NULL,
    "Edad" integer NOT NULL,
    "Teléfono" numeric(9) NOT NULL,
    "Experiencia" integer NOT NULL,
    PRIMARY KEY ("Cód.Conductor")
);

CREATE TABLE IF NOT EXISTS public."Lugares"
(
    "Cód.Lugares" serial NOT NULL,
    "Nombres" character varying NOT NULL,
    PRIMARY KEY ("Cód.Lugares")
);

CREATE TABLE IF NOT EXISTS public."Rutas"
(
    "Cód.Ruta" serial NOT NULL,
    "Cód.Conductor" integer NOT NULL,
    "Cód.Bus" integer NOT NULL,
    "Cód.Lugar" integer NOT NULL,
    "Fecha" date NOT NULL,
    PRIMARY KEY ("Cód.Ruta")
);

ALTER TABLE IF EXISTS public."Rutas"
    ADD CONSTRAINT "FK_rutas_autobuses" FOREIGN KEY ("Cód.Bus")
    REFERENCES public."Autobuses" ("Cód.Bus") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Rutas"
    ADD CONSTRAINT "FK_rutas_lugares" FOREIGN KEY ("Cód.Lugar")
    REFERENCES public."Lugares" ("Cód.Lugares") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Rutas"
    ADD CONSTRAINT "Fk_rutas_conductores" FOREIGN KEY ("Cód.Conductor")
    REFERENCES public."Conductor" ("Cód.Conductor") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;