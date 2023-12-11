"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Save_Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Save_Job.init(
    {
      userId: DataTypes.INTEGER,
      jobId: DataTypes.INTEGER,
     
    },
    {
      sequelize,
      modelName: "Save_Job",
    }
  );
  return Save_Job;
};
