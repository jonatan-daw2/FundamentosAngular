--función sin parametro de entrada para devolver el precio máximo
CREATE OR REPLACE FUNCTION producto_max_precio()
RETURNS REAL AS $$
DECLARE
  max_price REAL;
BEGIN
  SELECT MAX(unit_price)
  INTO max_price
  FROM products;
  
  RETURN max_price;
END;
$$ LANGUAGE plpgsql;

SELECT producto_max_precio();


--parametro de entrada

--Obtener el numero de ordenes por empleado
CREATE OR REPLACE FUNCTION ordenes_empleado(employee_id_orders integer)
RETURNS integer AS $$
DECLARE
  contador_ordenes integer;
BEGIN
  SELECT COUNT(*) 
  INTO contador_ordenes
  FROM orders
  WHERE employee_id = employee_id_orders;
  
  RETURN contador_ordenes;
END;
$$ LANGUAGE plpgsql;

SELECT ordenes_empleado(2);


--Obtener la venta de un empleado con un determinado producto
-- SELECT SUM(od.quantity * od.unit_price * (1 - od.discount)) esto da el monto
CREATE OR REPLACE FUNCTION venta_employee (employee_id_venta integer,product_id_venta integer)
RETURNS real
AS $$
DECLARE
    ventas_totales real := 0;
BEGIN
    SELECT SUM(od.quantity)
    INTO ventas_totales
    FROM order_details od
    JOIN orders o ON o.order_id = od.order_id
    WHERE o.employee_id = employee_id_venta 
        AND od.product_id = product_id_venta;
    
    RETURN ventas_totales;
END;
$$ LANGUAGE plpgsql;

SELECT venta_employee(4,1);


--Crear una funcion para devolver una tabla con producto_id, nombre, precio y unidades en strock, debe obtener los productos terminados en n
CREATE OR REPLACE FUNCTION obtener_productos()
RETURNS TABLE (
    product_id smallint,
    product_name character varying(40),
    unit_price real,
    units_in_stock smallint
) AS $$
BEGIN
    RETURN QUERY
        SELECT p.product_id, p.product_name, p.unit_price, p.units_in_stock
        FROM products p
        WHERE p.product_name LIKE '%n';
END;
$$ LANGUAGE plpgsql;

SELECT * from obtener_productos();

-- Creamos la función contador_ordenes_anio()
-- QUE CUENTE LAS ORDENES POR AÑO devuelve una tabla con año y contador
CREATE OR REPLACE FUNCTION contador_ordenes_anio()
RETURNS TABLE(year numeric, num_orders bigint) AS $$
BEGIN
    RETURN QUERY 
    SELECT extract(year from order_date) AS year, count(*) AS num_orders
    FROM orders
    GROUP BY year
    ORDER BY year;
END;
$$ LANGUAGE plpgsql;

SELECT * from contador_ordenes_anio();

-- Lo mismo pero con año por parametro
CREATE OR REPLACE FUNCTION contador_ordenes_anio(anio integer)
RETURNS TABLE (year numeric, num_orders bigint) AS $$
BEGIN
  RETURN QUERY 
  SELECT extract(year from order_date) AS year, count(*) AS num_orders
  FROM orders
  WHERE extract(year from order_date) = anio
  GROUP BY year;
END;
$$ LANGUAGE plpgsql;

SELECT * from contador_ordenes_anio(1996);


--FUNCION PARA OBTENER PRECIO PROMEDIO Y SUMA DE 
--UNIDADES EN STOCK POR CATEGORIA
CREATE OR REPLACE FUNCTION categoria_stock(categoriaID integer)
RETURNS TABLE (
    avg_price double precision,
    sum_stock bigint
) AS $$
BEGIN
	RETURN QUERY 
    SELECT AVG(unit_price), SUM(units_in_stock) 
    FROM products 
    WHERE category_id = categoriaID
	GROUP BY category_id;
END;
$$ LANGUAGE plpgsql;

SELECT * from categoria_stock(1);
