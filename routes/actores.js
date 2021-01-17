const { Router } = require('express');
const { cnn_mysql } = require('./../config/database')
const router = Router();

//Retorna todos los actores
router.get('/actor', (req, res) => {
    cnn_mysql.query(`SELECT * FROM actores`, (error, resultset, fields) => {
        if (error) {
            return res.status(500).send('Se presento error')
        } else {
            return res.json(resultset);
        }
    })

});

//Retorna un actor por ID
router.get('/actor/:id', async (req, res) => {
    const id = req.params.id;
    const [rows] = await cnn_mysql.promise().query(`SELECT * FROM actores WHERE id = ?`, [id]);
    if (rows.length != 0) {
        return res.json(rows[0]);
    } else {
        res.json({});
    }

});

//Añadir un actor
router.post('/actor',async (req, res) => {
    try {
        const {
            documento,
            tipo_documento,
            nombres,
            apellidos,
            contrasena,
            correo,
            telefono_celular,
            numero_expediente,
            genero,
            fecha_nacimiento,
            estado_actor_id,
            institucion_id,
            tipo_actor_id,
            fecha_creacion,
            fecha_actualizacion
        } = req.body
        const [rows, fields] = await cnn_mysql.promise().execute(`INSERT INTO actores(documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id, fecha_creacion,fecha_actualizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id, fecha_creacion, fecha_actualizacion])

        if (rows.affectedRows > 0) {
            res.json({
                id: rows.insertId,
                documento: documento,
                tipo_documento: tipo_documento,
                nombres: nombres,
                apellidos: apellidos,
                contrasena: contrasena,
                correo: correo,
                telefono_celular: telefono_celular,
                numero_expediente: numero_expediente,
                genero: genero,
                fecha_nacimiento: fecha_nacimiento,
                estado_actor_id: estado_actor_id,
                institucion_id: institucion_id,
                tipo_actor_id: tipo_actor_id,
                fecha_creacion: fecha_creacion,
                fecha_actualizacion: fecha_actualizacion
            })
        } else {
            res.json({})
        }
    } catch (e) {
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
});

//Actualiza
router.put('/actor/:id', (req, res) => {
});
//Actualiza
router.patch('/actor/:id', async(req, res) => {
    try {
        if (Object.keys(req.body).length > 0) {
            const id = req.params.id
            let SQL = 'UPDATE actores SET '
            const params = []

            for (const elment in req.body) {
                SQL += `${elment} = ?, `
                params.push(req.body[elment])
            }
            SQL = SQL.slice(0, -2)
            SQL += ` WHERE id = ?`
            params.push(id)
           // console.log(SQL, params)
            let [rows] = await cnn_mysql.promise().execute(SQL, params)
            
            if (rows.affectedRows > 0) {
                [rows] = await cnn_mysql.promise().query(`SELECT * FROM actores WHERE id = ?`, [id])
                res.json(rows[0])
            }else{
                res.json({})
            }
        } else {
            res.status(401).json({ message: 'No existe campos a modificar' })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
});
//Borra un registro
router.delete('/actor/:id', (req, res) => {

});

module.exports = router