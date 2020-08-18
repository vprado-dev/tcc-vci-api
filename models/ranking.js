/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ranking', {
    idranking: {
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
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'iduser'
      }
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER,
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
    tableName: 'ranking',
    schema: 'public'
  });
};
