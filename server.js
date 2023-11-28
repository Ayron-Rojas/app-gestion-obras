const express = require('express')
const app = require (express)

//filter by user or call user
app.get('/users',(req,res)=>{
    const listUsersQuery = `SELECT * FROM baseDate;`;

pool.query(listUsersQuery)
    .then(res2 => {
        console.log("List baseDate: ", res2.rows);
        res.status(201)
        res.send(res2.rows)
    })
    .catch(err => {
        console.error(err);
        res.status(400)
        console.log('ha ocurrido un error')
        res.send('hubo un error')
    });
});

// filter by id
app.get('/users/:id',(req,res)=>{
    const listUsersQuery = `SELECT * FROM users WHERE id = '${req.params.id}'`
    pool.query(listUsersQuery)
    .then(data=>{
        console.log("List users: ", data.rows);
        res.status(201)
        res.send(data.rows)
    })
    .catch(err=>{
        console.error(err);
        res.status(400)
        console.log('ha ocurrido un error')
        res.send('hubo un error')
    });
});

//filter by project
app.get('/users/:project',(req, res)=>{
    const listUsersQuery = `SELECT * FROM users WHERE project = '${req.params.proyect}'`
    pool.query(listUsersQuery)
   .then(data=>{
        res.status(201);
        res.send(data.rows);
   })
   .catch(err=>{
    console.error(err);
    res.status(400);
    console.log('ha ocurrido un error')
    res.send('hubo un error')
   })
})

//filter by date
app.get('/users/:date',(req,res)=>{
    const {date} = req.params;
    const listUsersQuery = `SELECT * FROM users WHERE date = '${date}'`
    pool.query(listUsersQuery)
    .then(data=>{
        res.status(200);
        res.send(data.rows);
    })
    .catch(err=>{
        console.error(err);
        res.status(400);
        console.log('ha ocurrido un error')
        res.send('hubo un error')
    });
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});