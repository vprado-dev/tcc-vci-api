'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable("users",{
    iduser: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_user: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email_user: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password_user: {
      type: Sequelize.STRING,
      allowNull: false
    },
    admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }),
  down: async (queryInterface, Sequelize) => queryInterface.dropTable("users")
};
