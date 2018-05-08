'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    published: DataTypes.BOOLEAN
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.User)
    Item.hasMany(models.Comment)
    Item.belongsToMany(models.Tag, { through: 'ItemTags' })
  };
  return Item;
};
