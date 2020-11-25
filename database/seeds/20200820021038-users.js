"use strict";

const faker = require("faker");
const bcrypt = require("bcrypt");

function gerarCpf() {
    const n1 = aleatorio(),
        n2 = aleatorio(),
        n3 = aleatorio(),
        d1 = dig(n1, n2, n3);
    return `${n1}.${n2}.${n3}-${d1}`;
}

function dig(n1, n2, n3) {
    let numeros = [0, n1, n2, n3];
    let semitotal = numeros.reduce(function (total, current) {
        let centena = ((current % 1000) - (current % 100)) / 100;
        let dezena = ((current % 100) - (current % 10)) / 10;
        let unidade = current % 10;
        return total + centena + dezena + unidade;
    });
    let faltando = semitotal % 11;
    let retorno = semitotal - faltando + 11 - semitotal;
    return retorno <= 9 ? "0" + retorno : retorno;
}
function aleatorio() {
    return ("" + Math.floor(Math.random() * 999)).padStart(3, "0");
}
var flag = true;
const salt = bcrypt.genSaltSync(12);
const users = [...Array(10)].map((user) => {
    var cpf = gerarCpf();
    if(flag){
        flag = false;
        return {
            name_user: 'Login Admin',
            nickname_user: 'LAdmin',
            email_user: "treinamentos.vci@gmail.com",
            password_user: bcrypt.hashSync("123.456.789-10", salt),
            cpf_user: "123.456.789-10",
            admin: true,
            checked_user: true,
            path_image: "",
            created_at: new Date(),
            updated_at: new Date(),
        };
    }else{
        return {
            name_user: faker.internet.userName(),
            nickname_user: faker.internet.userName(),
            email_user: faker.internet.email(),
            password_user: bcrypt.hashSync(cpf, salt),
            cpf_user: cpf,
            admin: false,
            checked_user: false,
            path_image: "",
            created_at: new Date(),
            updated_at: new Date()
        };
    }
   
});

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert("users", users, {});
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete("users", null, {});
    }
};
