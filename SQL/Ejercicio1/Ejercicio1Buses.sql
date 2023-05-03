--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-05-03 16:57:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16577)
-- Name: Autobuses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Autobuses" (
    "Cod_Bus" integer NOT NULL,
    "Kilometraje" numeric(7,2) NOT NULL,
    "Matricula" character varying(8) NOT NULL,
    "Plazas" integer NOT NULL,
    "Modelo" character varying(20) NOT NULL
);


ALTER TABLE public."Autobuses" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16582)
-- Name: Conductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Conductor" (
    "Cod_Conductor" integer NOT NULL,
    "DNI" character varying(10) NOT NULL,
    "Nombre" character varying(60) NOT NULL,
    "Salario" numeric(6,2) NOT NULL,
    "Edad" integer NOT NULL,
    "Teléfono" numeric(9,0) NOT NULL,
    "Experiencia" integer NOT NULL
);


ALTER TABLE public."Conductor" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16588)
-- Name: Lugares; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Lugares" (
    "Nombres" character varying NOT NULL,
    "Cod_Lugares" integer NOT NULL
);


ALTER TABLE public."Lugares" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16587)
-- Name: Lugares_Cod_Lugares_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Lugares_Cod_Lugares_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Lugares_Cod_Lugares_seq" OWNER TO postgres;

--
-- TOC entry 3351 (class 0 OID 0)
-- Dependencies: 216
-- Name: Lugares_Cod_Lugares_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Lugares_Cod_Lugares_seq" OWNED BY public."Lugares"."Cod_Lugares";


--
-- TOC entry 219 (class 1259 OID 16597)
-- Name: Rutas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rutas" (
    "Cod_Conductor" integer NOT NULL,
    "Cod_Bus" integer NOT NULL,
    "Cod_Lugar" integer NOT NULL,
    "Fecha" date NOT NULL,
    "Cod_Ruta" integer NOT NULL
);


ALTER TABLE public."Rutas" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16596)
-- Name: Rutas_Cod_Ruta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Rutas_Cod_Ruta_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Rutas_Cod_Ruta_seq" OWNER TO postgres;

--
-- TOC entry 3352 (class 0 OID 0)
-- Dependencies: 218
-- Name: Rutas_Cod_Ruta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Rutas_Cod_Ruta_seq" OWNED BY public."Rutas"."Cod_Ruta";


--
-- TOC entry 3186 (class 2604 OID 16591)
-- Name: Lugares Cod_Lugares; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Lugares" ALTER COLUMN "Cod_Lugares" SET DEFAULT nextval('public."Lugares_Cod_Lugares_seq"'::regclass);


--
-- TOC entry 3187 (class 2604 OID 16600)
-- Name: Rutas Cod_Ruta; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rutas" ALTER COLUMN "Cod_Ruta" SET DEFAULT nextval('public."Rutas_Cod_Ruta_seq"'::regclass);


--
-- TOC entry 3340 (class 0 OID 16577)
-- Dependencies: 214
-- Data for Name: Autobuses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Autobuses" VALUES (2, 2314.89, 'AAAA-222', 50, 'Renault');
INSERT INTO public."Autobuses" VALUES (1, 4123.45, 'AAAA-111', 60, 'Mercedes');


--
-- TOC entry 3341 (class 0 OID 16582)
-- Dependencies: 215
-- Data for Name: Conductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Conductor" VALUES (2, '11334455F', 'Maria', 1600.00, 21, 655233889, 2);
INSERT INTO public."Conductor" VALUES (1, '11856873M', 'Jonatan', 1200.00, 22, 601229800, 1);


--
-- TOC entry 3343 (class 0 OID 16588)
-- Dependencies: 217
-- Data for Name: Lugares; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Lugares" VALUES ('Zamora', 234);
INSERT INTO public."Lugares" VALUES ('Toledo', 123);


--
-- TOC entry 3345 (class 0 OID 16597)
-- Dependencies: 219
-- Data for Name: Rutas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Rutas" VALUES (2, 2, 2, '2023-05-02', 2);
INSERT INTO public."Rutas" VALUES (1, 1, 1, '2023-05-01', 1);


--
-- TOC entry 3353 (class 0 OID 0)
-- Dependencies: 216
-- Name: Lugares_Cod_Lugares_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Lugares_Cod_Lugares_seq"', 1, false);


--
-- TOC entry 3354 (class 0 OID 0)
-- Dependencies: 218
-- Name: Rutas_Cod_Ruta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Rutas_Cod_Ruta_seq"', 1, false);


--
-- TOC entry 3189 (class 2606 OID 16581)
-- Name: Autobuses Autobuses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Autobuses"
    ADD CONSTRAINT "Autobuses_pkey" PRIMARY KEY ("Cod_Bus");


--
-- TOC entry 3191 (class 2606 OID 16586)
-- Name: Conductor Conductor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Conductor"
    ADD CONSTRAINT "Conductor_pkey" PRIMARY KEY ("Cod_Conductor");


--
-- TOC entry 3193 (class 2606 OID 16595)
-- Name: Lugares Lugares_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Lugares"
    ADD CONSTRAINT "Lugares_pkey" PRIMARY KEY ("Cod_Lugares");


--
-- TOC entry 3195 (class 2606 OID 16602)
-- Name: Rutas Rutas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rutas"
    ADD CONSTRAINT "Rutas_pkey" PRIMARY KEY ("Cod_Ruta");


--
-- TOC entry 3196 (class 2606 OID 16603)
-- Name: Rutas FK_rutas_autobuses; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rutas"
    ADD CONSTRAINT "FK_rutas_autobuses" FOREIGN KEY ("Cod_Bus") REFERENCES public."Autobuses"("Cod_Bus") NOT VALID;


--
-- TOC entry 3197 (class 2606 OID 16608)
-- Name: Rutas Fk_rutas_conductores; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rutas"
    ADD CONSTRAINT "Fk_rutas_conductores" FOREIGN KEY ("Cod_Conductor") REFERENCES public."Conductor"("Cod_Conductor") NOT VALID;


-- Completed on 2023-05-03 16:57:06

--
-- PostgreSQL database dump complete
--

