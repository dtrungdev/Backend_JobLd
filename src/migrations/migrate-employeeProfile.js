"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EmployeeProfile", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CV: {
        type: Sequelize.BLOB("medium"),
      },
      introduce: {
        type: Sequelize.TEXT,
      },
      experience: {
        type: Sequelize.TEXT,
      },
      skill: {
        type: Sequelize.TEXT,
      },
      education: {
        type: Sequelize.TEXT,
      },
      certificate: {
        type: Sequelize.TEXT,
      },
      award: {
        type: Sequelize.TEXT,
      },
      project: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("EmployeeProfile");
  },
};
