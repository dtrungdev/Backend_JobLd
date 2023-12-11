"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Job", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title:{
        type: Sequelize.STRING
      } ,
      salary:{
        type: Sequelize.INTEGER
      } ,
      currency:{
        type: Sequelize.STRING
      } ,
      employQuantity:{
        type: Sequelize.INTEGER
      } ,
      applyReason:{
        type: Sequelize.TEXT
      } ,
      mainContent:{
        type: Sequelize.TEXT
      },
      benefit:{
        type: Sequelize.TEXT
      },
      startDate:{
        type: Sequelize.DATE
      },
      updateDate:{
        type: Sequelize.DATE
      },
      endDate:{
        type: Sequelize.DATE
      },
      views:{
        type: Sequelize.INTEGER
      } ,
      saves:{
        type: Sequelize.INTEGER
      } ,
      categoryId:{
        type: Sequelize.INTEGER
      } ,
      recruiterId:{
        type: Sequelize.INTEGER
      } ,

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
    await queryInterface.dropTable("Job");
  },
};
