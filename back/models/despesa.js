'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class despesa extends Model {
    static associate(models) {
      // define association here
      despesa.belongsTo(models.edificio,{targetKey:'idedificio', foreignKey:'edificio_idedificio'})
    }
  };
  despesa.init({
    iddespesa: DataTypes.INTEGER,
    tipodespesa: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data: DataTypes.DATE,
    edificio_idedificio: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    tableName: 'despesa',
    modelName: 'despesa',

  });
  
  despesa.removeAttribute('id')
  return despesa;
};