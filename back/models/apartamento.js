'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apartamento extends Model {

    static associate(models) {
      apartamento.hasMany(models.morador, {
        sourceKey: 'idapartamentos',
        foreignKey: 'apartamento_idapartamentos'
      })
      apartamento.belongsTo(models.edificio, { targetKey: 'idedificio', foreignKey: 'edificio_idedificio' })
    }
  };
  apartamento.init({
    idapartamentos: DataTypes.INTEGER,
    proprietario: DataTypes.STRING,
    andar: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    numerofixo: DataTypes.INTEGER,
    edificio_idedificio: DataTypes.INTEGER
  },
    {
      sequelize,
      timestamps: false,
      tableName: 'apartamento',
      modelName: 'apartamento',
    });
  apartamento.removeAttribute('id')
  return apartamento;
};