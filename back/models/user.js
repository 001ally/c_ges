'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
   
    static associate(models) {
      // define association here
      user.hasMany(models.edificio,{ sourceKey:'iduser', foreignKey:'user_iduser' })
    }
  };
  user.init({
    iduser: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'user',
  });
  user.removeAttribute('id')
  return user;
};
