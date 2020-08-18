/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game', {
    idgame: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_game: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time_game: {
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
    tableName: 'game',
    schema: 'public'
  });
};
