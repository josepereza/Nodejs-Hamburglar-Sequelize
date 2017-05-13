// define table
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
    },
    date: {
      type: DataTypes.DATE
    }
  });
  console.log(typeof Burger);
  return Burger;
};
