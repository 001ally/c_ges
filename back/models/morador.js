'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class morador extends Model {
    static associate(models) {
      // define association here
      morador.belongsTo(models.apartamento, {
        targetKey:'idapartamentos',
        foreignKey:'apartamento_idapartamentos'
      })
    }
  };
  morador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    //proprietario: DataTypes.STRING,
    contacto: DataTypes.INTEGER,
    pagamentototal: DataTypes.DOUBLE,
    apartamento_idapartamentos: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'morador',
    modelName: 'morador',
  });
  morador.removeAttribute('id')
  return morador;
};