CREATE TABLE encargados(
    id INTEGER NOT NULL,
    dpi INTEGER NULL,
    nombre VARCHAR2(100) NOT NULL,
    apellido VARCHAR2(100) NULL,
    telefono INTEGER  NOT NULL,
    direccion VARCHAR2(500)NULL,
    telefono_adicional INTEGER NULL,
    correo VARCHAR2(250) NULL,
    edad INTEGER NULL,
    ocupacion VARCHAR2(500),
    PRIMARY KEY (id)
 );
 
CREATE TABLE estudiantes(
    id INTEGER NOT NULL,
    dpi INTEGER NULL,
    nombre VARCHAR2(100) NOT NULL,
    apellido VARCHAR2(100) NOT NULL,
    encargado_id INTEGER NOT NULL,
    escolaridad VARCHAR2(100) DEFAULT 'nivel medio',
    edad INTEGER NOT NULL,
    telefono INTEGER NULL,
    direccion VARCHAR2(500) NOT NULL,
    correo VARCHAR2(250) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (encargado_id) REFERENCES encargados (id)
);


INSERT INTO encargados (id,dpi, nombre,apellido,telefono,direccion,telefono_adicional, correo, edad, ocupacion)
    VALUES(1,208415030806,'vilma','osorio',37390917,'4ta calle 4-13 zona 7 landivar',50046141, 'osorio20@gmail.com', 20, 'auditor');

INSERT INTO encargados VALUES(2,208415030807,'marisol','tum',37390987,'5ta calle 4-18 zona 7 landivar',50046150, 'oso250@gmail.com', 30, 'recepcionista');

UPDATE encargados
    SET apellido = 'vazquez'
    WHERE id=2;

UPDATE encargados
    SET direccion='8va avenida', nombre='irma'
    WHERE id=2
    AND edad=30
    AND telefono=37390987; 
    
UPDATE encargados
    SET nombre='magui';
    

INSERT INTO encargados VALUES(3,208415030807,'marisol','tum',37350987,'10ma calle 4-18 zona 8 ',50046150, 'tum@gmail.com', 25, 'encargado de ventas');

INSERT INTO encargados VALUES(4,208415030203,'juan','cabrera',37390123,'5ta calle 4-18 zona 5',50048900, 'juan@gmail.com', 30, 'maestro');

DELETE encargados
    WHERE id=3;
    
DELETE encargados
    WHERE nombre='juan';
    
INSERT INTO estudiantes(id,dpi,nombre,apellido, encargado_id, telefono,edad,direccion,correo)
                    SELECT 1, dpi,nombre,apellido,id,telefono,edad,direccion,correo
                    FROM encargados
                    WHERE id=2

SELECT * FROM  encargados ORDER BY id ASC;  

SELECT * FROM encargados ORDER BY id DESC;

COMMIT;
