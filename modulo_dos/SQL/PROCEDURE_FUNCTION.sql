CREATE PROCEDURE categorias
       (id INTEGER, nombre VARCHAR2);
      BEGIN
        INSERT INTO categorias VALUES (8,'bebidas');
      END categorias;
      

      SELECT * FROM categorias;

CREATE PROCEDURE poner_categoria
       (p_id INTEGER, p_nombre VARCHAR2)
       IS
      BEGIN
        INSERT INTO categorias VALUES (p_id,p_nombre);
      END poner_categoria;
      
      EXECUTE poner_categoria(9,'lacteos');
      
      SELECT * FROM categorias;
      
      
EXECUTE poner_categoria(10,'licores');

CREATE  OR REPLACE PROCEDURE ingresar_categoria
       (p_id INTEGER, p_nombre VARCHAR2, p_ids OUT INTEGER)
       IS
      BEGIN
        INSERT INTO categorias VALUES (p_id,p_nombre);
        p_ids:=p_id+1;
      END ingresar_categoria;
    
SET SERVEROUT ON;
DECLARE
ids INTEGER;  
BEGIN
ingresar_categoria(12,'jardineria',ids);
dbms_output.put_line(ids);
END;

CREATE  OR REPLACE FUNCTION almacenar_categoria
       (p_id INTEGER, p_nombre VARCHAR2) RETURN INTEGER
       IS
      BEGIN
        INSERT INTO categorias VALUES (p_id,p_nombre);
        return p_id+1;
END almacenar_categoria;
      
SET SERVEROUT ON;
DECLARE
BEGIN
dbms_output.put_line(almacenar_categoria(12,'jardineria'));

END;

COMMIT;
  