'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificio extends Model {
  
    static associate(models) {
      // define association here
    }
  };
  edificio.init({
    nome: DataTypes.STRING,
    fotografia: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'edificio',
    modelName: 'edificio',
  });
 
  return edificio;
};