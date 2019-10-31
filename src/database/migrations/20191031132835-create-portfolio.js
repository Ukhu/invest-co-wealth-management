export const up = (queryInterface, Sequelize) => queryInterface.createTable('Portfolios', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  tradingCode: {
    allowNull: false,
    type: Sequelize.STRING,
    references: {
      model: 'Stocks',
      key: 'tradingCode'
    }
  },
  numberOfUnits: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

export const down = (queryInterface) => queryInterface.dropTable('Portfolios');
