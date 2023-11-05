"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Company", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      introduce: {
        type: Sequelize.TEXT,
      },
      benefit: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.INTEGER,
      },
      hotline: {
        type: Sequelize.STRING,
      },
      workingdays: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      logo: {
        type: Sequelize.STRING,
      },
      album: {
        type: Sequelize.TEXT,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Company");
  },
};
