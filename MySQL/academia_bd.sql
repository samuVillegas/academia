USE academia;

DROP TABLE IF EXISTS actores;
DROP TABLE IF EXISTS tipo_documento;
DROP TABLE IF EXISTS tipo_actores;
DROP TABLE IF EXISTS estado_actores;
DROP TABLE IF EXISTS modulos;


CREATE TABLE tipo_documento(
    codigo varchar(3) PRIMARY KEY,
    descripcion varchar(100) 
);


CREATE TABLE tipo_actores(
    id INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    perfil varchar(100)
);

CREATE TABLE estado_actores(
    id INTEGER(5) UNSIGNED PRIMARY kEY AUTO_INCREMENT,
    estado varchar(30)
)ENGINE =INNODB;

CREATE TABLE modulos(
    id INT(5) PRIMARY KEY,
    modulo varchar(255),
    `mod` varchar(10)
) ENGINE=INNODB;

/*Poner una primar key con alter*/
ALTER TABLE modulos
ADD PRIMARY KEY(id);

/*borrar columna*/
ALTER TABLE modulos
DROP mo
/*Añadir columna*/
ALTER TABLE modulos
ADD `mod` varchar(10)

CREATE TABLE actores(
    id INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    documento VARCHAR(20) NOT NULL UNIQUE,
    tipo_documento VARCHAR(3) NOT NULL,
    nombres VARCHAR(255),
    apellidos VARCHAR(255),
    contrasena VARCHAR(100) NOT NULL,
    correo VARCHAR(255) NOT NULL DEFAULT 'correo@dominio.com',
    telefono_celular VARCHAR(30) COMMENT 'telefono celular del actor',
    numero_expediente VARCHAR(255) NOT NULL UNIQUE,
    genero ENUM('hombre','mujer') NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    estado_actor_id INT(5) UNSIGNED,
    institucion_id INT(5),
    tipo_actor_id INT(5) UNSIGNED,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (estado_actor_id) REFERENCES estado_actores(id),
    FOREIGN KEY (tipo_actor_id) REFERENCES tipo_actores(id)
)ENGINE=INNODB;


/*
También podemos hacer así.
    CREATE TABLE tipo_actores(
        id INT(5) AUTO_INCREMENT,
        perfil varchar(100),
        PRIMARY KEY(id)
    );
*/

INSERT INTO tipo_actores VALUES (1,"Alumno");
INSERT INTO tipo_actores(perfil) VALUES("Docente");
SELECT * FROM tipo_actores 

UPDATE tipo_actores SET perfil = 'Estudiante' WHERE id = 1;