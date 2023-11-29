const express = require('express')
const app = require (express)

//filter by user or call user
    app.get('/users', (req, res) => {
        let obras = 'SELECT * FROM users';

    
        if (req.query.filter === 'id') {
            obras = `SELECT * FROM users WHERE id = '${req.query.value}'`;
        } else if (req.query.filter === 'project') {
            obras = `SELECT * FROM users WHERE project = '${req.query.value}'`;
        } else if (req.query.filter === 'date') {
            listUsersQuery = `SELECT * FROM users WHERE date = '${req.query.value}'`;
        }

        pool.query(obras)
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


app.post('/user',(req,res)=>{
    const update = `SELET`
})

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});