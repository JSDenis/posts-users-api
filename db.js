const Pool = require('pg').Pool

const pool = new Pool({
    user: 'admin',
    password: '1234',
    host:'localhost',
    port: 5432,
    database: 'exampledb2',
    ssl: false
})

module.exports = pool
