module.exports = {
  development: {
    host: 'localhost',
    port: '5432',
    database: 'portfolio_development',
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    dialect: 'postgres',
  },
};
