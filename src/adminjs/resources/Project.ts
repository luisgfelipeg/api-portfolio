import { ResourceOptions } from 'adminjs';

export const projectResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'description', 'uploadThumbnail', 'categoryId'],
  filterProperties: [
    'name',
    'description',
    'categoryId',
    'createdAt',
    'updatedAt',
  ],
  listProperties: ['id', 'name', 'categoryId'],
  showProperties: [
    'id',
    'name',
    'description',
    'thumbnailUrl',
    'categoryId',
    'createdAt',
    'updatedAt',
  ],
};
