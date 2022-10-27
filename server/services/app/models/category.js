'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasOne(models.Item, { foreignKey : "categoryId" })
    }
  }
  Category.init({
    name: {
      allowNull:false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Category name is required'
        },
        notEmpty: {
          msg: 'Category name is required'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};