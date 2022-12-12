import AdminJS from 'adminjs';
import adminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { sequelize } from '../database';
import { adminJsResources } from './resources';

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  resources: adminJsResources,
  branding: {
    companyName: 'MyPortfolio',
    logo: '/logo.svg',
  },
});

export const adminJsRouter = adminJSExpress.buildRouter(adminJs);
