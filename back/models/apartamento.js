'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apartamento extends Model {
 
    static associate(models) {
      apartamento.hasMany(models.morador, {
        sourceKey:'idapartamentos',
        foreignKey: 'apartamento_idapartamentos'
      })
    }
  };
  apartamento.init({
    edificio_idedificio: DataTypes.INTEGER,
    idapartamentos: DataTypes.INTEGER,
    andar: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    numerofixo: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    tableName:'apartamento',
    modelName: 'apartamento',
  });
  apartamento.removeAttribute('id')
  return apartamento;
};