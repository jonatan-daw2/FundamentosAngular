--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-05-03 17:24:55

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
-- TOC entry 221 (class 1259 OID 16717)
-- Name: Libro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Libro" (
    "Nombre" character varying(60) NOT NULL,
    "Cod_Libro" integer NOT NULL,
    "Autor" character varying NOT NULL,
    "NumEjem" integer NOT NULL,
    "Cod_Tema" integer NOT NULL
);


ALTER TABLE public."Libro" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16716)
-- Name: Libro_Cod_Libro_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Libro_Cod_Libro_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Libro_Cod_Libro_seq" OWNER TO postgres;

--
-- TOC entry 3358 (class 0 OID 0)
-- Dependencies: 220
-- Name: Libro_Cod_Libro_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Libro_Cod_Libro_seq" OWNED BY public."Libro"."Cod_Libro";


--
-- TOC entry 215 (class 1259 OID 16696)
-- Name: Prestamos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Prestamos" (
    "FechaIni" date NOT NULL,
    "FechaFin" date NOT NULL,
    "Cod_Socio" integer NOT NULL,
    "Cod_Libro" integer NOT NULL,
    "Cod_Prestamo" integer NOT NULL
);


ALTER TABLE public."Prestamos" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16695)
-- Name: Prestamos_Cod_Prestamo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Prestamos_Cod_Prestamo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Prestamos_Cod_Prestamo_seq" OWNER TO postgres;

--
-- TOC entry 3359 (class 0 OID 0)
-- Dependencies: 214
-- Name: Prestamos_Cod_Prestamo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Prestamos_Cod_Prestamo_seq" OWNED BY public."Prestamos"."Cod_Prestamo";


--
-- TOC entry 217 (class 1259 OID 16703)
-- Name: Socio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Socio" (
    "Nombre" character varying(60) NOT NULL,
    "Direccion " character varying(120) NOT NULL,
    "Cod_Socio" integer NOT NULL
);


ALTER TABLE public."Socio" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16702)
-- Name: Socio_Cod_Socio_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Socio_Cod_Socio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Socio_Cod_Socio_seq" OWNER TO postgres;

--
-- TOC entry 3360 (class 0 OID 0)
-- Dependencies: 216
-- Name: Socio_Cod_Socio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Socio_Cod_Socio_seq" OWNED BY public."Socio"."Cod_Socio";


--
-- TOC entry 219 (class 1259 OID 16710)
-- Name: Tema; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tema" (
    "Nombre" character varying(60) NOT NULL,
    "Cod_Tema" integer NOT NULL
);


ALTER TABLE public."Tema" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16709)
-- Name: Tema_Cod_Tema_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tema_Cod_Tema_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tema_Cod_Tema_seq" OWNER TO postgres;

--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 218
-- Name: Tema_Cod_Tema_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tema_Cod_Tema_seq" OWNED BY public."Tema"."Cod_Tema";


--
-- TOC entry 3191 (class 2604 OID 16720)
-- Name: Libro Cod_Libro; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Libro" ALTER COLUMN "Cod_Libro" SET DEFAULT nextval('public."Libro_Cod_Libro_seq"'::regclass);


--
-- TOC entry 3188 (class 2604 OID 16699)
-- Name: Prestamos Cod_Prestamo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Prestamos" ALTER COLUMN "Cod_Prestamo" SET DEFAULT nextval('public."Prestamos_Cod_Prestamo_seq"'::regclass);


--
-- TOC entry 3189 (class 2604 OID 16706)
-- Name: Socio Cod_Socio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Socio" ALTER COLUMN "Cod_Socio" SET DEFAULT nextval('public."Socio_Cod_Socio_seq"'::regclass);


--
-- TOC entry 3190 (class 2604 OID 16713)
-- Name: Tema Cod_Tema; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tema" ALTER COLUMN "Cod_Tema" SET DEFAULT nextval('public."Tema_Cod_Tema_seq"'::regclass);


--
-- TOC entry 3352 (class 0 OID 16717)
-- Dependencies: 221
-- Data for Name: Libro; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Libro" VALUES ('Libro2', 2, 'Autor2', 43, 2);
INSERT INTO public."Libro" VALUES ('Libro1', 1, 'Autor1', 23, 1);


--
-- TOC entry 3346 (class 0 OID 16696)
-- Dependencies: 215
-- Data for Name: Prestamos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Prestamos" VALUES ('2023-05-03', '2023-05-23', 2, 2, 2);
INSERT INTO public."Prestamos" VALUES ('2023-05-02', '2023-05-13', 1, 1, 1);


--
-- TOC entry 3348 (class 0 OID 16703)
-- Dependencies: 217
-- Data for Name: Socio; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Socio" VALUES ('Socio1', 'direccion2', 2);
INSERT INTO public."Socio" VALUES ('Socio1', 'direccion1', 1);


--
-- TOC entry 3350 (class 0 OID 16710)
-- Dependencies: 219
-- Data for Name: Tema; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Tema" VALUES ('Fantasia', 2);
INSERT INTO public."Tema" VALUES ('Ciencia', 1);


--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 220
-- Name: Libro_Cod_Libro_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Libro_Cod_Libro_seq"', 1, false);


--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 214
-- Name: Prestamos_Cod_Prestamo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Prestamos_Cod_Prestamo_seq"', 1, false);


--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 216
-- Name: Socio_Cod_Socio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Socio_Cod_Socio_seq"', 1, false);


--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 218
-- Name: Tema_Cod_Tema_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tema_Cod_Tema_seq"', 1, false);


--
-- TOC entry 3199 (class 2606 OID 16724)
-- Name: Libro Libro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Libro"
    ADD CONSTRAINT "Libro_pkey" PRIMARY KEY ("Cod_Libro");


--
-- TOC entry 3193 (class 2606 OID 16701)
-- Name: Prestamos Prestamos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Prestamos"
    ADD CONSTRAINT "Prestamos_pkey" PRIMARY KEY ("Cod_Prestamo");


--
-- TOC entry 3195 (class 2606 OID 16708)
-- Name: Socio Socio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Socio"
    ADD CONSTRAINT "Socio_pkey" PRIMARY KEY ("Cod_Socio");


--
-- TOC entry 3197 (class 2606 OID 16715)
-- Name: Tema Tema_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tema"
    ADD CONSTRAINT "Tema_pkey" PRIMARY KEY ("Cod_Tema");


--
-- TOC entry 3202 (class 2606 OID 16735)
-- Name: Libro FK_libros_temas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Libro"
    ADD CONSTRAINT "FK_libros_temas" FOREIGN KEY ("Cod_Tema") REFERENCES public."Tema"("Cod_Tema") NOT VALID;


--
-- TOC entry 3200 (class 2606 OID 16730)
-- Name: Prestamos FK_prestamos_libros; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Prestamos"
    ADD CONSTRAINT "FK_prestamos_libros" FOREIGN KEY ("Cod_Libro") REFERENCES public."Libro"("Cod_Libro") NOT VALID;


--
-- TOC entry 3201 (class 2606 OID 16725)
-- Name: Prestamos FK_prestamos_socios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Prestamos"
    ADD CONSTRAINT "FK_prestamos_socios" FOREIGN KEY ("Cod_Socio") REFERENCES public."Socio"("Cod_Socio") NOT VALID;


-- Completed on 2023-05-03 17:24:55

--
-- PostgreSQL database dump complete
--

