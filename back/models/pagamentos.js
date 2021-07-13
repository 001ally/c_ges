'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pagamentos extends Model {

    static associate(models) {
      // define association here
      pagamentos.belongsTo(models.morador, {
        targetKey:'idmorador', foreignKey:'morador_idmorador'
      })
    }
  };
  pagamentos.init({
    idpagamentos: DataTypes.INTEGER,
    data: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    morador_idmorador: DataTypes.INTEGER,
    
  }, {
    sequelize,
    timestamps: false,
    tableName: 'pagamentos',
    modelName: 'pagamentos',
  });
  pagamentos.removeAttribute('id')
  return pagamentos;
};