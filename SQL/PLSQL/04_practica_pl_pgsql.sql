-- EJERCICIOS
/*

1 - Escriba un bloque de codigo PL/pgSQL que reciba una nota como parametro
    y notifique en la consola de mensaje las letras A,B,C,D,E o F segun el valor de la nota

*/
DO $$
DECLARE nota integer:= 7;

BEGIN
	IF nota >= 9 THEN
		RAISE NOTICE 'A';
	ELSEIF nota >= 8 AND nota < 9 THEN
		RAISE NOTICE 'B';
	ELSEIF nota >= 7 AND nota < 8 THEN
		RAISE NOTICE 'C';
	ELSEIF nota >= 6 AND nota < 7 THEN
		RAISE NOTICE 'D';
	ELSEIF nota >= 5 AND nota < 6 THEN
		RAISE NOTICE 'E';
	ELSE
		RAISE NOTICE 'F';
	END IF;
END;
$$ LANGUAGE plpgsql;


/*
2 - Escriba un bloque de codigo PL/pgSQL que reciba un numero como parametro
    y muestre la tabla de multiplicar de ese numero.
*/
DO $$
DECLARE nota integer:= 7;
DECLARE i integer:= 0;

BEGIN
    RAISE NOTICE 'Tabla de multiplicar del %', nota;
	    WHILE i <= 10 LOOP
        RAISE NOTICE '% x % = %', nota, i, nota*i;
        i := i + 1;
    END LOOP;

END;
$$ LANGUAGE plpgsql;


/*
3 - Escriba una funcion PL/pgSQL que convierta de dolares a moneda nacional.
    La funcion debe recibir dos parametros, cantidad de dolares y tasa de cambio.
    Al final debe retornar el monto convertido a moneda nacional.
*/
DO $$
DECLARE dollares numeric := 9.89;
DECLARE conversion_euros numeric := 0.91;

BEGIN
	RAISE NOTICE 'CONVERSION A EUROS: ';
	RAISE NOTICE '% x % = %', dollares, conversion_euros, dollares*conversion_euros;
END;
$$ LANGUAGE plpgsql;

/*

4 - Escriba una funcion PL/pgSQL que reciba como parametro el monto de un prestamo,
    su duracion en meses y la tasa de interes, retornando el monto de la cuota a pagar.
    Aplicar el metodo de amortizacion frances.

*/
/*
La función recibe tres parámetros: prestamo (el monto del préstamo), 
duracion_meses (la duración del préstamo en meses) 
y tasa_interes (la tasa de interés anual).

La tasa de interés se divide por 12 para obtener la tasa mensual.

Se calcula la cuota mensual utilizando la fórmula del método de amortización francés.

Luego se realiza un bucle FOR para calcular el detalle de cada cuota mensual, 
mostrando en la consola de mensajes el número del mes, la cuota, el interés, la amortización y el capital pendiente.

Al final, se retorna el valor de la cuota mensual.
*/

DO $$
DECLARE cuota numeric;
DECLARE interes numeric := 20;
DECLARE amortizacion numeric := 10;
DECLARE tasa_interes numeric := 3;
DECLARE duracion_mes integer := 2;
DECLARE prestamo numeric := 7;

BEGIN
	interes := tasa_interes/12;
	cuota := (prestamo * interes) / (1 -(1+interes)^(-duracion_mes));
	
	FOR i IN 1..duracion_mes LOOP
		amortizacion := cuota - (prestamo * interes);
		prestamo := prestamo - amortizacion;
		
		 RAISE NOTICE 'Mes %: Cuota: %, Interes: %, Amortizacion: %, Capital Pendiente: %', i, cuota, prestamo * interes, amortizacion, prestamo;
	END LOOP;
END;
$$ LANGUAGE plpgsql;