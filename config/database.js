require('dotenv/config');
const Sequelize = require('sequelize');
module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect:  'postgres',
    define: {
        timestamps : true
    }
}

// new Sequelize
// (`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`);
