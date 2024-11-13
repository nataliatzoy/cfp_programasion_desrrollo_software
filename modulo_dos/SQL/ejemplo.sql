SET SERVEROUT ON;
DECLARE
    nombre VARCHAR2(100) :='Ana';
BEGIN
    dbms_output.put_line(nombre);
END;

SET SERVEROUT ON;
BEGIN
     dbms_output.put_line('Ana');
END;