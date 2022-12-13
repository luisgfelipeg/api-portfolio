import uploadFileFeature from '@adminjs/upload';
import { FeatureType, ResourceOptions } from 'adminjs';
import path from 'path';

export const videoResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'projectId', 'uploadVideo', 'secondsLong'],
  filterProperties: [
    'name',
    'projectId',
    'secondsLong',
    'createdAt',
    'updatedAt',
  ],
  listProperties: ['id', 'name', 'projectId', 'secondsLong'],
  showProperties: [
    'id',
    'name',
    'projectId',
    'videoUrl',
    'secondsLong',
    'createdAt',
    'updatedAt',
  ],
};

export const videoResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '..', '..', '..', 'uploads'),
        opts: {},
      },
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo',
    },
    uploadPath: (record, filename) =>
      `videos/project-${record.get('projectId')}/${filename}`,
  }),
];
