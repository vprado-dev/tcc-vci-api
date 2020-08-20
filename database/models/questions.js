/* jshint indent: 2 */
const { db , Sequelize } = require('../../config/objetos');


const Questions = db.define('questions', {
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
  }, {
    Sequelize,
    tableName: 'questions',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    schema: 'public'
  });

module.exports = Questions;