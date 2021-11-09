const { options } = require('./src/models/databases')
const knex = require('knex')(options)

knex.from('products').del()
  .then(() => console.log('Table deleted'))
  .catch((err) => { console.err(err); throw err;})
  .finally(() => knex.destroy());