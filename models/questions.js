/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    idquestion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idgame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'game',
        },
        key: 'idgame'
      }
    },
    json_question: {
      type: DataTypes.JSON,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'questions',
    schema: 'public'
  });
};
