'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('game',{
    idgame: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_game: {
      type: Sequelize.STRING,
      allowNull: false
    },
    time_game: {
      type: Sequelize.INTEGER,
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
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('game')
};
