'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('questions',{
    idquestion: {
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
    json_question: {
      type: Sequelize.JSON,
      allowNull: false
    },
    totem_fk:{
      type: Sequelize.INTEGER,
      allowNull: true, 
      references: {
        model:{
          tableName: 'perguntados',
        },
        key:'idtoten'
      }
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
  down: async (queryInterface, Sequelize) => queryInterface.dropTable('questions')
};
