/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    iduser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'users',
    schema: 'public'
  });
};
