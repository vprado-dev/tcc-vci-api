/* jshint indent: 2 */
const { db , Sequelize } = require('../../config/objetos');

const Perguntados = db.define('game', {
    idtoten: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_toten: {
      type: Sequelize.STRING,
      allowNull: false
    },
    path_image: {
      type: Sequelize.STRING,
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
    tableName: 'perguntados',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    schema: 'public'
  });

module.exports = Perguntados;