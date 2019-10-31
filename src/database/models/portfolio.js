export default (Sequelize, DataTypes) => {
  const Portfolio = Sequelize.define('Portfolio', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tradingCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    numberOfUnits: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});

  Portfolio.associate = (models) => {
    Portfolio.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });

    Portfolio.belongsTo(models.Stock, {
      foreignKey: 'tradingCode',
      onDelete: 'CASCADE'
    });
  };
  return Portfolio;
};
