"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Job.belongsToMany(models.User, {through: models.Save_Job})
     Job.belongsToMany(models.User, {through: models.Applied})
         Job.belongsToMany(models.Field, {through: models.Field_Job})
    }
  }
  Job.init(
    {
      title: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      currency: DataTypes.STRING,
      employQuantity: DataTypes.INTEGER,
      applyReason: DataTypes.TEXT,
      mainContent: DataTypes.TEXT,
      benefit: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      updateDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      views: DataTypes.INTEGER,
      saves: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      recruiterId: DataTypes.INTEGER,
      
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
