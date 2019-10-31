export default (Sequelize, DataTypes) => {
  const Stock = Sequelize.define('Stock', {
    tradingCode: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true
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

  Stock.associate = (models) => {
    Stock.hasMany(models.Portfolio, {
      foreignKey: 'tradingCode',
      onDelete: 'CASCADE'
    });
  };
  return Stock;
};
