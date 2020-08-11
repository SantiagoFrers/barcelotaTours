module.exports = {
  development: {
    username: "root",
    password: null,
    database: "btours_db",
    host: "127.0.0.1",
    dialect: "mysql"
    /* Quito el operatorsAliases para que no muestre error */
    /* "operatorsAliases": false */
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};