'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class morador extends Model {
    static associate(models) {
      // define association here
      morador.belongsTo(models.apartamento, {
        targetKey: 'idapartamentos',
        foreignKey: 'apartamento_idapartamentos'
      })
      morador.hasMany(models.pagamentos, { sourceKey: 'idmorador', foreignKey: 'morador_idmorador' })
    }
  };
  morador.init({
    idmorador: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    contacto: DataTypes.INTEGER,
    pagamentototal: DataTypes.DOUBLE,
    apartamento_idapartamentos: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    tableName: 'morador',
    modelName: 'morador',
  });
  morador.removeAttribute('id')
  return morador;
};