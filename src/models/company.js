"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Job);
      Company.hasOne(models.Allcode);
      Company.hasMany(models.Address);
      Company.belongsToMany(models.User, { through: models.Company_User });
      Company.belongsToMany(models.Province, {
        through: models.Company_Province,
      });
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      introduce: DataTypes.TEXT,
      benefit: DataTypes.TEXT,
      type: DataTypes.STRING,
      size: DataTypes.INTEGER,
      hotline: DataTypes.STRING,
      workingdays: DataTypes.STRING,
      email: DataTypes.STRING,
      logo: DataTypes.STRING,
      album: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
