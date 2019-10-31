export const up = (queryInterface) => queryInterface.bulkInsert('Stocks', [{
  id: 1,
  tradingCode: 'AFR',
  companyName: 'AFRIPRUD',
  unitPrice: 1.68,
  volume: 100000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 2,
  tradingCode: 'STA',
  companyName: 'STANBIC',
  unitPrice: 19.69,
  volume: 100000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 3,
  tradingCode: 'JAP',
  companyName: 'JAPUL OIL',
  unitPrice: 0.06,
  volume: 100000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 4,
  tradingCode: 'PRC',
  companyName: 'PRESCO',
  unitPrice: 12.91,
  volume: 100000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 5,
  tradingCode: 'ZEN',
  companyName: 'ZENITH BANK',
  unitPrice: 5.93,
  volume: 100000,
  createdAt: new Date(),
  updatedAt: new Date()
}], {});
export const down = (queryInterface) => queryInterface.bulkDelete('Stocks', null, {});
