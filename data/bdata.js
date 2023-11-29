const {pool} = require ('pg')

const pool = new Pool({
    user: 'default',
    host: 'ep-orange-smoke-08960365.us-east-1.postgres.vercel-storage.com',
    database: 'verceldb',
    password: 'bf3BTmnKYd4P',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

const obras = `CREATE TABLE obrasEnAvance (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(100),
    proyecto VARCHAR(100),
    observacion TEXT,
    fecha DATE,
    foto TEXT
);`

