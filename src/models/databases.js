const sqliteOptions = {
  client: 'sqlite3',
  connection: { filename : './DB/ecommerce.sqlite'},
  useNullAsDefault: true
}
const options = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '270298',
    database: 'ecommerce'
  },
  pool: { min: 0, max: 7 }
}
module.exports = {
  sqliteOptions,
  options
};