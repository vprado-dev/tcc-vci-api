'use strict';

const faker = require('faker');

const users = [...Array(10)].map((user) => (
  {
    name_user: faker.internet.userName(),
    email_user: faker.internet.email(),
    password_user: faker.internet.password(8),
    admin: false,
    created_at: new Date(),
    updated_at: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',users,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users',null,{});
  }
};
