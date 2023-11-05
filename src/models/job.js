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
      Job.belongsToMany(models.User, { through: models.Job_User });
      Job.belongsTo(models.Company);
      Job.hasOne(models.Allcode);
      Job.belongsTo(models.Category);
      Job.belongsTo(models.Position);
    }
  }
  Job.init(
    {
      title: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      updateDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      categoryId: DataTypes.INTEGER,
      positionId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      experiecnceId: DataTypes.INTEGER,
      levelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
