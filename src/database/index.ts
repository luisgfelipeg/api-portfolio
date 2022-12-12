import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'portfolio_development',
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  define: {
    underscored: true,
  },
});
