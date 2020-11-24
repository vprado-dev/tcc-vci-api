require("dotenv/config");
const Sequelize = require("sequelize");
const producao = {
    username: "rnlxptmxeveich",
    password:
        "ed8b2249591c52ff036962ac85aebb73765f2c837e631b5c5e4cfc68d34f66c5",
    database: "d239l4doba6dom",
    host: "ec2-3-233-236-188.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres"
};
const local = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    dialect: "postgres",
    define: {
        timestamps: true
    }
};
// Aqui você só troca qnd quiser ir para produção ou local
module.exports = local;
// new Sequelize
// (`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`);
