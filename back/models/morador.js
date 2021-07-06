'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class morador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  morador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    proprietario: DataTypes.STRING,
    contacto: DataTypes.INTEGER,
    pagamentototal: DataTypes.DOUBLE
  }, {
    sequelize,
    tableName: 'morador',
    modelName: 'morador',
  });

  return morador;
};