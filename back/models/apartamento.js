'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apartamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  apartamento.init({
    andar: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    numerofixo: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'apartamento',
    modelName: 'apartamento',
  });
  apartamento.removeAttribute('id')
  return apartamento;
};