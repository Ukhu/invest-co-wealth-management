export const up = (queryInterface, Sequelize) => queryInterface.createTable('Stocks', {
  id: {
    allowNull: false,
    autoIncrement: true,
    type: Sequelize.INTEGER,
    unique: true
  },
  tradingCode: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING
  },
  companyName: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true
  },
  unitPrice: {
    allowNull: false,
    type: Sequelize.DECIMAL
  },
  volume: {
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

export const down = (queryInterface) => queryInterface.dropTable('Stocks');
