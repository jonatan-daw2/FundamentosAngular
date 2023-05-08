CREATE SEQUENCE seq_socio START 1;

CREATE TABLE Socio (
  idSocio integer PRIMARY KEY DEFAULT nextval('seq_socio'),
  dni character varying(60) NOT NULL,
  nombre character varying(60) NOT NULL,
  apellidos character varying(60) NOT NULL,
  telefono character varying(60) NOT NULL,
  idPoblacion integer NOT NULL,
  idSocioAvalador integer NOT NULL,
  FOREIGN KEY ("idPoblacion") REFERENCES "Poblacion"("idPoblacion"),
  FOREIGN KEY ("idSocioAvalador") REFERENCES "Socio"("idSocio")
);

CREATE SEQUENCE seq_pedidos START 1;

CREATE TABLE Pedido (
  idPedido INTEGER DEFAULT nextval('seq_pedidos'),
  formaEnvio CHAR(50) NOT NULL,
  formaPago CHAR(50) NOT NULL,
  idSocio INTEGER REFERENCES socio(idsocio),
  PRIMARY KEY ("idPedido"),
  FOREIGN KEY ("idSocio") REFERENCES "Socio"("idSocio")
);

CREATE TABLE Poblacion (
	idPoblacion INTEGER DEFAULT nextval('seq_poblacion'),
	Habitantes INTEGER NOT NULL,
	Nombre CHAR (60) NOT NULL,
	idProvincia INTEGER REFERENCES provincia(idProvincia),
	PRIMARY KEY ("idPoblacion"),
	FOREIGN KEY ("idProvincia") REFERENCES "Socio"("idProvincia")
)