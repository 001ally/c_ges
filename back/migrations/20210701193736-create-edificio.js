'use strict';

const { sequelize } = require("../models");

module.exports = {
 
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('edificio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      fotografia: {
        type: Sequelize.STRING
      },
      localizacao:{
        allowNull:true,
        type: sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('edificio');
  }
};