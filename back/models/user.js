'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
   
    static associate(models) {
      // define association here
      user.hasMany(models.edificio,{ sourceKey:'iduser', foreignKey:'user_iduser' })
    }
  };
  user.init({
    iduser: DataTypes.INTEGER,

    name: {
     type: DataTypes.STRING,
     allowNull: false,
     validate:{  customValidator(value) {
      if (value === null ) {
        throw new Error("name can't be null ");
      }
    }}
    } ,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{notNull:{msg:'campo email vazio'}}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{notNull:{msg:'campo psw vazio'}}
    } 
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'user',
  });
  user.removeAttribute('id')
  return user;
};
