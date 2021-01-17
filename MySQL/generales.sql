-- mysql localhost -u root -p 
SHOW databases; -- Nos permite visualizar las bases de datos creadas.
SHOW tables; -- Nos permite visualizar las tablas de la bd.
USE academia; -- Nos permite entrar en una bd.
-- CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'tu_contrasena’;

select user, password, host from user; -- Visulizar usuarios

GRANT ALL PRIVILEGES ON *.* TO 'samuel'@'localhost'; -- Hacer super usuario
GRANT SELECT, INSERT ON bd.tabla To 'user'@'localhost'; -- Hacer super usuario en tabla
desc nombretabla o describe tabla  -- Sirve para mostrar todo de una tabla

/*
    UNSIGNED: para que solo admita enteros naturales. Despues del tipo de dato. 
*/