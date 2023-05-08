CREATE SEQUENCE seq_zoo START 1;

CREATE TABLE IF NOT EXISTS public."Zoo"(
	"Cod_Zoologico" integer default nextval('seq_zoo'),
	"Nombre" CHARACTER varying(60) not null,
	"Tamanio" numeric(5,2) not null,
	"Ciudad"  CHARACTER varying(60) not null,
	"Presupuesto" numeric(7,2) not null,
	PRIMARY KEY ("Cod_Zoologico")
);

CREATE SEQUENCE seq_esp START 1;

CREATE TABLE IF NOT EXISTS public."Especie"(
    "Cod_Especie" integer default nextval('seq_esp'),
    "Familia" character varying(60) NOT NULL,
    "Extincion" character varying(2) NOT NULL,
    "Nombre_Comun" character varying(60) NOT NULL,
    "Nombre_Cientifico" character varying NOT NULL,
    PRIMARY KEY ("Cod_Especie")
);

CREATE SEQUENCE seq_ani START 1;

CREATE TABLE IF NOT EXISTS public."Animal"(
    "Cod_Animal" integer default nextval('seq_ani'),
    "Pais" character varying(60) NOT NULL,
    "Sexo" char NOT NULL,
    "Continente" character varying(60) NOT NULL,
    "Anio" integer NOT NULL,
    "Cod_Especie" integer NOT NULL,
    "Cod_Zoologico" integer NOT NULL,
    PRIMARY KEY ("Cod_Animal"),
	FOREIGN KEY ("Cod_Especie") REFERENCES "Especie"("Cod_Especie"),
    FOREIGN KEY ("Cod_Zoologico") REFERENCES "Zoo"("Cod_Zoologico")
);
