'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('ranking',{
    idranking: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idgame: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'game',
        },
        key: 'idgame'
      }
    },
    iduser: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'iduser'
      }
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    time: {
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
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('ranking')
};
