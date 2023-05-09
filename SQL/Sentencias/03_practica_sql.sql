--Subconsultas

-- Obtener los productos cuyo precio unitario sea mayor al precio promedio de la tabla de productos
SELECT *
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);
-- Obtener los productos cuya cantidad en stock sea menor al promedio de cantidad en stock de toda la tabla de productos.
SELECT *
FROM products
WHERE units_in_stock < (SELECT AVG(units_in_stock) FROM products);

-- Obtener los productos cuya cantidad en Inventario (UnitsInStock) sea menor a la cantidad mínima del detalle de ordenes (Order Details)
SELECT *
FROM products
WHERE units_in_stock < (SELECT MIN(quantity) FROM order_details);


--OBTENER LOS PRODUCTOS CUYA CATEGORIA SEA IGUAL A LAS CATEGORIAS DE LOS PRODUCTOS CON PROVEEDOR 1.
SELECT *
FROM products
WHERE category_id IN (SELECT category_id
    FROM products
    WHERE supplier_id = 1);

-- Subconsultas correlacionadas 

--Obtener el número de empleado y el apellido para aquellos empleados que tengan menos de 100 ordenes.
SELECT employee_id, last_name
FROM employees
WHERE employee_id IN (SELECT employee_id
    FROM orders
    GROUP BY employee_id
    HAVING COUNT(*) < 100);
	
--Correlacionada
SELECT employee_id, last_name
FROM employees e
WHERE (
  SELECT COUNT(*)
  FROM orders
  WHERE employee_id = e.employee_id
) < 100;


--Obtener la clave de cliente y el nombre de la empresa para aquellos clientes que tengan más de 20 ordenes
SELECT customer_id, company_name
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) > 20
);

--Correlacionada
SELECT customer_id, company_name
FROM customers c
WHERE (
  SELECT COUNT(*) 
  FROM orders o 
  WHERE o.customer_id = c.customer_id
) > 20;


--Obtener el productoid, el nombre del producto, el proveedor de la tabla de productos para aquellos productos que se hayan vendido menos de 100 unidades (Consultarlo en la tabla de Orders details).
SELECT product_id, product_name, supplier_id
FROM products
WHERE product_id IN (
  SELECT product_id
  FROM order_details
  GROUP BY product_id
  HAVING SUM(quantity) < 100
);

--Correlacionadas
SELECT product_id, product_name, supplier_id
FROM products p
WHERE product_id IN (
  SELECT product_id
  FROM order_details od
  WHERE od.product_id = p.product_id
  GROUP BY od.product_id
  HAVING SUM(quantity) < 100
);


--Obtener los datos del empleado IDEmpleado y nombre completo De aquellos que tengan mas de 100 ordenes
SELECT employee_id, CONCAT(first_name, ' ', last_name) AS nombre_completo
FROM employees
WHERE employee_id IN (
  SELECT employee_id
  FROM orders
  GROUP BY employee_id
  HAVING COUNT(*) > 100
);

--Correlacionada
SELECT employee_id, CONCAT(first_name, ' ', last_name) AS nombre_completo
FROM employees e 
WHERE EXISTS (SELECT employee_id
  FROM orders o
  WHERE o.employee_id = e.employee_id
  GROUP BY employee_id
  HAVING COUNT(*) > 100
);

--SELECT product_id, product_name, supplier_id 
--FROM products AS p WHERE 
--(SELECT SUM(od.quantity) FROM order_details AS od WHERE p.product_id = od.product_id) < 100;


--Obtener los datos de Producto ProductId, ProductName, UnitsinStock, UnitPrice (Tabla Products) de los productos que la sumatoria de la cantidad (Quantity) de orders details sea mayor a 450
SELECT product_id, product_name, units_in_stock, unit_price
FROM products
WHERE product_id IN (
  SELECT product_id
  FROM order_details
  GROUP BY product_id
  HAVING SUM(quantity) > 450
);

--Correlacion
SELECT product_id, product_name, units_in_stock, unit_price
FROM products as p
WHERE (
  SELECT product_id
  FROM order_details od
  WHERE od.product_id = p.product_id
  GROUP BY product_id
  HAVING SUM(quantity) > 450
);

--CORRECCION
SELECT product_id, product_name, units_in_stock, unit_price 
FROM products AS p 
WHERE (SELECT SUM(od.quantity) FROM order_details AS od WHERE p.product_id = od.product_id) > 450;

--Obtener la clave de cliente y el nombre de la empresa para aquellos clientes que tengan más de 20 ordenes.
SELECT customer_id, company_name
FROM customers
WHERE customer_id IN (
  SELECT customer_id
  FROM orders
  GROUP BY customer_id
  HAVING COUNT(*) > 20
);

--Correlacion
SELECT customer_id, company_name
FROM customers c
WHERE customer_id IN (
  SELECT customer_id
  FROM orders o
  WHERE c.customer_id = o.customer_id
  GROUP BY customer_id
  HAVING COUNT(*) > 20
);

--CORRECCION
SELECT customer_id, company_name 
FROM customers AS c 
WHERE (SELECT COUNT(o.order_id) FROM orders AS o WHERE c.customer_id = o.customer_id) > 20;


--insert

--Insertar un registro en la tabla de Categorias, únicamente se quiere insertar la información del CategoryName y la descripción los Papelería y papelería escolar
INSERT INTO categories (category_id, category_name, description)
VALUES (9,'Papeleria', 'Papeleria escolar');

--Dar de alta un producto con Productname, SupplierId, CategoryId, UnitPrice, UnitsInStock Como esta tabla tiene dos clave foraneas hay que ver los datos a dar de alta
INSERT INTO products (product_id, product_name, supplier_id, category_id, unit_price, units_in_stock, discontinued)
VALUES (78, 'Producto nuevo', 1, 9, 50, 10, 3);

--Dar de alta un empleado con LastName, FistName, Title, BrithDate
INSERT INTO employees (employee_id,last_name,first_name,title,birth_date)
VALUES (10, 'Smith', 'William', 'Sales Manger','1957-09-25');

--Dar de alta una orden, CustomerId, Employeeid, Orderdate, ShipVia Como esta tabla tiene dos clave foraneas hay que ver los datos a dar de alta
INSERT INTO orders (order_id,customer_id, employee_id, order_date, ship_via)
VALUES (11078, 'ALFKI', 4, '2023-05-09', 3);

--Dar de alta un Order details, con todos los datos
INSERT INTO order_details (order_id, product_id, unit_price, quantity, discount)
VALUES (11078, 2, 10.0, 3, 0.1);

--update

-- Cambiar el CategoryName a Verduras de la categoria 10
UPDATE categories
SET category_name = 'Verduras'
WHERE category_id = 10;

-- Actualizar los precios de la tabla de Productos para incrementarlos un 10%
UPDATE products
SET unit_price = unit_price * 1.1;

--ACTUALIZAR EL PRODUCTNAME DEL PRODUCTO 80 A ZANAHORIA ECOLOGICA
UPDATE products
SET product_name = 'ZANAHORIA ECOLOGICA'
WHERE product_id = 80;

--ACTUALIZAR EL FIRSTNAME DEL EMPLOYEE 10 A ROSARIO
UPDATE employees
SET first_name = 'ROSARIO'
WHERE employee_id = 10;

--ACTUALIZAR EL ORDERS DETAILS DE LA 11079 PARA QUE SU CANTIDAD SEA 10
UPDATE order_details
SET quantity = 10
WHERE order_id = 11079;

--Delete

--diferencia entre delete y truncate
--BORRAR EL EMPLEADO 10
DELETE FROM employees
WHERE employee_id = 10;