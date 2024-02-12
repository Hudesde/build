"use strict";
const { Pool } = require('pg');
const pool = new Pool({
    user: 'huesomx',
    host: 'dpg-clo6ipv5felc73a33d80-a.oregon-postgres.render.c',
    database: 'impersanmartin',
    password: 'Tocsu3jtdpYBazrCm9R73QmhY9UeNqPy',
    port: 5432,
    ssl: {
    rejectUnauthorized: false,
    },
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error al conectar a la base de datos', err);
    } else {
        console.log('Conexión a la base de datos exitosa', res.rows[0].now);
    }
});

module.exports = pool;
