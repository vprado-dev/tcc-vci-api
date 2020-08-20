require('dotenv/config');
const Sequelize = require('sequelize');
const config = require('./database');
module.exports = {
    db: new Sequelize(config),
    Sequelize
}