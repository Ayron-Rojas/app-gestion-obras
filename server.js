const express = require('express')
const app = express()
const { Pool } = require('pg')
app.use(express.json())

const pool = new Pool({
    user: 'default',
    host: 'ep-orange-smoke-08960365.us-east-1.postgres.vercel-storage.com',
    database: 'verceldb',
    password: 'bf3BTmnKYd4P',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});




//filter by user or call user
app.get('/users', (req, res) => {
    let listUsersQuery = `SELECT * FROM obrasenavance`;

    if (req.query.id) {
        listUsersQuery += ` WHERE id = ${req.query.id}`;
    } else if (req.query.usuario) {
        listUsersQuery += ` WHERE usuario = '${req.query.usuario}'`;
    } else if (req.query.proyecto) {
        listUsersQuery += ` WHERE proyecto = '${req.query.proyecto}'`;
    } else if (req.query.fecha) {
        listUsersQuery += ` WHERE fecha = '${req.query.fecha}'`;
    }

    pool.query(listUsersQuery)
        .then(data => {
            res.status(200).send({ data: data.rows });
        })
        .catch(err => {
            console.error('Error: ', err);
            res.status(500).send('Error en la consulta');
        });
});


app.post('/user', (req, res) => {
    const insertSQL = `INSERT INTO obrasenavance (usuario,proyecto,observacion,fecha) VALUES('${req.body.usuario}','${req.body.proyecto}','${req.body.observacion}','${req.body.fecha}')`
    pool.query(insertSQL)
        .then(datarows => {})

    res.status(200).send({message:"Registro Exitoso"})
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});