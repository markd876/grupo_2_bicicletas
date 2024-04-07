'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.TINYINT
      },
      bicicletasid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bicicletas',
          key: 'id'
        }
      },
      productsid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
      ordenid: {
        type: sequelize.INTEGER,
        references: {
          model: 'orden',
          key:'id'
        }
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};