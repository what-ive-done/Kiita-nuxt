'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.Item, {
      through: 'ItemTags',
      foreignKey: 'ItemId'
    })
  };
  return Tag;
};
