import { adminJs, adminJsRouter } from './adminjs';
import { sequelize } from './database';
import { server } from './server/Server';

server.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection sucessfully');
  });
  console.log(`Server started sucessfuly at port ${PORT}`);
});
