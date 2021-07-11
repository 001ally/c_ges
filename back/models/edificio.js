'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificio extends Model {
  
    static associate(models) {
      edificio.belongsTo(models.user, {targetKey:'iduser', foreignKey: 'user_iduser'})
      // define association here
    }
  };
  edificio.init({
    nome: DataTypes.STRING,
    fotografia: DataTypes.STRING,
    localizacao: DataTypes.STRING,
    user_iduser: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    tableName: 'edificio',
    modelName: 'edificio',
  });
  
  edificio.removeAttribute('id')
  return edificio;
};