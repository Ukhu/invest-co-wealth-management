export default (Sequelize, DataTypes) => {
  const Stock = Sequelize.define('Stock', {
    tradingCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    companyName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    unitPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    volume: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 100.00
    }
  }, {});

  Stock.associate = () => {
  };
  return Stock;
};
