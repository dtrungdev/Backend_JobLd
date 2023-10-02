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
      Job.belongsToMany(User, { through: "Job_User" });
      Job.belongsTo(models.Category);
      Job.belongsTo(models.Company);
    }
  }
  Job.init(
    {
      title: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      description: DataTypes.STRING,
      startDate: DataTypes.DATE,
      updateDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      categoryID: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
