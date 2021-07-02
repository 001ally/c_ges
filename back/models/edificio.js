'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  edificio.init({
    nome: DataTypes.STRING,
    fotografia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'edificio',
  });
  return edificio;
};