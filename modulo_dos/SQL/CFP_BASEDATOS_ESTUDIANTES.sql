SELECT * FROM encargados

SELECT * FROM estudiantes

COMMIT;

SELECT * FROM estudiantes

DELETE estudiantes
    WHERE id=1;
        
ROLLBACK;

SELECT *FROM estudiantes

COMMIT;