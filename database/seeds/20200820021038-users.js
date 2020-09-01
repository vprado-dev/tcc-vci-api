'use strict';

const faker = require('faker');

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
		let centena = (current % 1000 - current % 100) / 100;
		let dezena = (current % 100 - current % 10) / 10;
		let unidade = current % 10;
		return total + centena + dezena + unidade;
	})
	let faltando = semitotal%11;
	let retorno = (semitotal-faltando) +11 - semitotal;
    console.log(semitotal,faltando)
	return retorno <=9 ? '0' + retorno : retorno;
	
}
gerarCpf();
function aleatorio() {
	return ("" + Math.floor(Math.random() * 999)) .padStart(3, '0');
}
const users = [...Array(10)].map((user) => {
	return {
		name_user: faker.internet.userName(),
		nickname_user: faker.internet.userName(),
		email_user: faker.internet.email(),
		password_user: faker.internet.password(8),
		cpf_user: gerarCpf(),
		admin: false,
		created_at: new Date(),
		updated_at: new Date()
	}
})

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('users', users, {});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('users', null, {});
	}
};
